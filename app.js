(() => {
  const molecules = window.MOLECULE_LIBRARY || [];
  const categories = window.MOLECULE_CATEGORIES || [];
  const VIEWER_CDN_SOURCES = [
    "https://cdn.jsdelivr.net/npm/3dmol@2.0.8/build/3Dmol-min.js",
    "https://unpkg.com/3dmol@2.0.8/build/3Dmol-min.js",
    "https://3dmol.org/build/3Dmol-min.js",
  ];
  const categoryMap = categories.reduce((acc, cat) => {
    acc[cat.id] = cat.label;
    return acc;
  }, {});

  const state = {
    searchTerm: "",
    currentCategory: "all",
    viewer: null,
    currentModel: null,
    selected: null,
    styleMode: null,
    viewerStatus: "idle",
  };

  const elements = {
    chips: document.getElementById("categoryChips"),
    list: document.getElementById("moleculeList"),
    resultCount: document.getElementById("resultCount"),
    listEmpty: document.getElementById("listEmpty"),
    search: document.getElementById("moleculeSearch"),
    currentName: document.getElementById("currentName"),
    currentFormula: document.getElementById("currentFormula"),
    currentCategoryLabel: document.getElementById("currentCategoryLabel"),
    metaCategory: document.getElementById("metaCategory"),
    metaPhase: document.getElementById("metaPhase"),
    metaTags: document.getElementById("metaTags"),
    structureDescription: document.getElementById("structureDescription"),
    teachingTips: document.getElementById("teachingTips"),
    styleLabel: document.getElementById("styleLabel"),
    styleToggle: document.getElementById("styleToggle"),
    resetView: document.getElementById("resetView"),
    viewerPlaceholder: document.getElementById("viewerPlaceholder"),
  };
  const defaultViewerPlaceholder = elements.viewerPlaceholder.innerHTML;

  function showDefaultPlaceholder() {
    elements.viewerPlaceholder.innerHTML = defaultViewerPlaceholder;
    elements.viewerPlaceholder.classList.remove("hidden");
  }

  function showPlaceholderMessage(primary, secondary) {
    elements.viewerPlaceholder.innerHTML = `<p>${primary}</p>${
      secondary ? `<small>${secondary}</small>` : ""
    }`;
    elements.viewerPlaceholder.classList.remove("hidden");
  }

  function hideViewerPlaceholder() {
    elements.viewerPlaceholder.classList.add("hidden");
  }

  function init() {
    setupCategoryChips();
    attachEvents();
    renderList();
    updateDetails(null);
    updateStyleUI();
    beginViewerLoad();
  }

  function setupCategoryChips() {
    elements.chips.innerHTML = "";
    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = cat.label;
      btn.dataset.categoryId = cat.id;
      if (cat.id === state.currentCategory) {
        btn.classList.add("active");
      }
      btn.addEventListener("click", () => {
        state.currentCategory = cat.id;
        updateActiveChips();
        renderList();
      });
      elements.chips.appendChild(btn);
    });
  }

  function attachEvents() {
    elements.search.addEventListener("input", (event) => {
      state.searchTerm = event.target.value.trim().toLowerCase();
      renderList();
    });

    elements.styleToggle.addEventListener("click", () => {
      if (!state.selected) return;
      state.styleMode =
        state.styleMode === "spacefill" ? "ball_and_stick" : "spacefill";
      applyStyle();
      updateStyleUI();
    });

    elements.resetView.addEventListener("click", () => {
      if (!state.selected || !state.viewer) return;
      state.viewer.zoomTo();
      state.viewer.render();
    });
  }

  function beginViewerLoad() {
    state.viewerStatus = "loading";
    load3DMolLibrary()
      .then(() => {
        if (!window.$3Dmol) {
          throw new Error("3Dmol global unavailable");
        }
        state.viewerStatus = "ready";
        state.viewer = window.$3Dmol.createViewer("viewer", {
          backgroundColor: "#040c15",
        });
        if (state.selected) {
          loadMolecule(state.selected);
          toggleControls(true);
        } else if (state.viewerStatus === "ready") {
          showDefaultPlaceholder();
          toggleControls(false);
        }
      })
      .catch(() => {
        state.viewerStatus = "failed";
        showPlaceholderMessage(
          "3Dmol.js 加载失败",
          "请检查网络或稍后刷新，暂可先浏览文字信息。"
        );
        toggleControls(false);
      });
  }

  function load3DMolLibrary() {
    return new Promise((resolve, reject) => {
      if (window.$3Dmol) {
        resolve();
        return;
      }
      let index = 0;

      const tryLoad = () => {
        if (index >= VIEWER_CDN_SOURCES.length) {
          reject(new Error("Unable to load 3Dmol.js"));
          return;
        }
        const script = document.createElement("script");
        script.src = VIEWER_CDN_SOURCES[index];
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => {
          script.remove();
          index += 1;
          tryLoad();
        };
        document.head.appendChild(script);
      };

      tryLoad();
    });
  }

  function updateActiveChips() {
    const chipButtons = elements.chips.querySelectorAll("button");
    chipButtons.forEach((btn) => {
      btn.classList.toggle(
        "active",
        btn.dataset.categoryId === state.currentCategory
      );
    });
  }

  function getFilteredMolecules() {
    return molecules.filter((mol) => {
      const matchCategory =
        state.currentCategory === "all" ||
        mol.category === state.currentCategory;
      const matchSearch = matchKeyword(mol, state.searchTerm);
      return matchCategory && matchSearch;
    });
  }

  function matchKeyword(molecule, keyword) {
    if (!keyword) return true;
    const searchable =
      `${molecule.nameZh} ${molecule.nameEn} ${molecule.formula} ${(molecule.tags || []).join(" ")}`.toLowerCase();
    return searchable.includes(keyword);
  }

  function renderList() {
    const filtered = getFilteredMolecules();
    elements.resultCount.textContent = `共 ${filtered.length} 个`;
    elements.list.innerHTML = "";

    if (filtered.length === 0) {
      elements.listEmpty.classList.remove("hidden");
    } else {
      elements.listEmpty.classList.add("hidden");
      filtered.forEach((mol) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "molecule-item";
        if (state.selected && state.selected.id === mol.id) {
          item.classList.add("active");
        }
        item.innerHTML = `
          <div class="primary-line">
            <span>${mol.nameZh}</span>
            <span>${mol.formula}</span>
          </div>
          <div class="muted-text">${mol.nameEn}</div>
          <div class="tags">
            <span>${categoryMap[mol.category] || "未分类"}</span>
            ${(mol.tags || [])
              .slice(0, 2)
              .map((tag) => `<span>${tag}</span>`)
              .join("")}
          </div>
        `;
        item.addEventListener("click", () => selectMolecule(mol));
        elements.list.appendChild(item);
      });
    }
  }

  function selectMolecule(molecule) {
    state.selected = molecule;
    state.styleMode = molecule.defaultStyle || "ball_and_stick";
    loadMolecule(molecule);
    updateDetails(molecule);
    updateStyleUI();
    renderList();
    toggleControls(true);
  }

  function loadMolecule(molecule) {
    if (!state.viewer || state.viewerStatus !== "ready") {
      const isFailed = state.viewerStatus === "failed";
      const message = isFailed
        ? "3D 视图暂不可用，无法显示该分子的模型。"
        : "3D 视图正在初始化，请稍候……";
      const tip = isFailed
        ? "请检查网络连接或刷新页面后再试。"
        : "载入完成后模型会自动显示。";
      showPlaceholderMessage(message, tip);
      return;
    }
    state.viewer.removeAllModels();
    const formattedData = (molecule.data || "").trim();
    if (!formattedData) return;
    state.currentModel = state.viewer.addModel(
      formattedData,
      molecule.dataFormat || "xyz"
    );
    applyStyle();
    state.viewer.zoomTo();
    state.viewer.render();
    hideViewerPlaceholder();
  }

  function applyStyle() {
    if (!state.currentModel || !state.viewer) return;
    const style =
      state.styleMode === "spacefill"
        ? { sphere: { scale: 0.25, colorscheme: "Jmol" } }
        : {
            stick: { radius: 0.2, colorscheme: "Jmol" },
            sphere: { scale: 0.22, colorscheme: "Jmol" },
          };
    state.viewer.setStyle({}, style);
    state.viewer.render();
  }

  function toggleControls(enabled) {
    const usable = enabled && state.viewerStatus === "ready";
    elements.styleToggle.disabled = !usable;
    elements.resetView.disabled = !usable;
  }

  function updateDetails(molecule) {
    if (!molecule) {
      elements.currentName.textContent = "请先选择一个分子";
      elements.currentFormula.textContent = "—";
      elements.currentCategoryLabel.textContent = "尚未选择";
      elements.metaCategory.textContent = "—";
      elements.metaPhase.textContent = "—";
      elements.metaTags.textContent = "—";
      elements.structureDescription.textContent =
        "选择一个分子后将展示构型、键角和极性特点等信息。";
      elements.teachingTips.innerHTML =
        "<li>右侧将列出课堂提问或对比建议。</li>";
      toggleControls(false);
      if (state.viewerStatus === "failed") {
        showPlaceholderMessage(
          "3Dmol.js 加载失败",
          "请检查网络并刷新页面，暂可先浏览文字信息。"
        );
      } else {
        showDefaultPlaceholder();
      }
      return;
    }

    const categoryLabel = categoryMap[molecule.category] || "未分类";
    elements.currentName.textContent = `${molecule.nameZh} · ${molecule.nameEn}`;
    elements.currentFormula.textContent = molecule.formula;
    elements.currentCategoryLabel.textContent = categoryLabel;
    elements.metaCategory.textContent = categoryLabel;
    elements.metaPhase.textContent = molecule.phase || "—";

    if (molecule.tags?.length) {
      elements.metaTags.innerHTML = "";
      molecule.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.textContent = tag;
        elements.metaTags.appendChild(span);
      });
    } else {
      elements.metaTags.textContent = "—";
    }

    elements.structureDescription.textContent =
      molecule.structureDescription || "暂无结构说明。";

    elements.teachingTips.innerHTML = "";
    if (molecule.teachingTips?.length) {
      molecule.teachingTips.forEach((tip) => {
        const li = document.createElement("li");
        li.textContent = tip;
        elements.teachingTips.appendChild(li);
      });
    } else {
      elements.teachingTips.innerHTML = "<li>暂无教学提示。</li>";
    }
  }

  function updateStyleUI() {
    if (!state.selected) {
      elements.styleLabel.textContent = "尚未载入模型";
      elements.styleToggle.textContent = "切换显示样式";
      return;
    }

    const isSpaceFill = state.styleMode === "spacefill";
    const styleText = isSpaceFill
      ? "空间填充：突出原子体积与空间占据"
      : "球棍模型：突出键角与分子骨架";
    elements.styleLabel.textContent = `当前样式：${styleText}`;
    elements.styleToggle.textContent = isSpaceFill
      ? "切换为球棍模型"
      : "切换为空间填充";
  }

  window.addEventListener("DOMContentLoaded", init);
})();
