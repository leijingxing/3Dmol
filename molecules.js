const MOLECULE_CATEGORIES = [
  { id: "all", label: "全部" },
  { id: "gas", label: "常见气体" },
  { id: "polar", label: "极性分子" },
  { id: "nonpolar", label: "非极性共价分子" },
  { id: "acidbase", label: "酸与碱" },
  { id: "organic", label: "有机物入门" },
  { id: "feature", label: "特征结构演示" },
];

const MOLECULE_LIBRARY = [
  {
    id: "h2",
    nameZh: "氢气",
    nameEn: "Hydrogen",
    formula: "H₂",
    category: "gas",
    phase: "气体",
    tags: ["单质", "直线", "非极性"],
    structureDescription: "双原子线形分子，只有一条共价键，常用于引入最简单的分子模型概念。",
    teachingTips: [
      "可与氯气、氧气的模型对比，说明双原子分子的共同点。",
      "引导学生思考“氢分子为何稳定”与“单原子构成的分子是否都直线”问题。",
    ],
    dataFormat: "xyz",
    data: `2
Hydrogen molecule
H 0.000 0.000 0.000
H 0.740 0.000 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "o2",
    nameZh: "氧气",
    nameEn: "Oxygen",
    formula: "O₂",
    category: "gas",
    phase: "气体",
    tags: ["双原子", "直线", "氧化剂"],
    structureDescription: "线形双原子分子，可引导学生回顾双键与价层电子对互斥理论。",
    teachingTips: [
      "与氢气、氮气同台展示，讨论键的类型对性质的影响。",
      "结合燃烧实验中氧气的作用，加强分子与宏观性质的联系。",
    ],
    dataFormat: "xyz",
    data: `2
Oxygen molecule
O -0.600 0.000 0.000
O 0.600 0.000 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "n2",
    nameZh: "氮气",
    nameEn: "Nitrogen",
    formula: "N₂",
    category: "gas",
    phase: "气体",
    tags: ["双原子", "三键", "惰性"],
    structureDescription: "线形双原子分子，三键使其极为稳定，用于说明空气中氮气难反应的原因。",
    teachingTips: [
      "与氧气对比，引入“键能”概念解释化学惰性。",
      "可延伸到合成氨过程中如何“打破”氮分子的三键。",
    ],
    dataFormat: "xyz",
    data: `2
Nitrogen molecule
N -0.550 0.000 0.000
N 0.550 0.000 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "h2o",
    nameZh: "水",
    nameEn: "Water",
    formula: "H₂O",
    category: "polar",
    phase: "液体",
    tags: ["弯曲形", "极性", "氢键"],
    structureDescription:
      "典型的弯曲分子，键角约 104.5°，可结合极性演示偶极矩方向与氢键形成。",
    teachingTips: [
      "与二氧化碳做对比：同样含氧，但空间构型不同导致是否极性。",
      "课堂提问：若两个 H 原子排成一条直线，水是否仍为极性？",
    ],
    dataFormat: "xyz",
    data: `3
Water molecule
O 0.000 0.000 0.000
H 0.957 0.000 0.000
H -0.239 0.927 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "co2",
    nameZh: "二氧化碳",
    nameEn: "Carbon Dioxide",
    formula: "CO₂",
    category: "nonpolar",
    phase: "气体",
    tags: ["线形", "非极性", "温室气体"],
    structureDescription:
      "线形分子，两个等长 C=O 双键对称分布，展示“局部极性但整体非极性”的概念。",
    teachingTips: [
      "在讲解极性时与水分子对照，强调“构型”决定结果。",
      "结合碳循环，说明其在环境中的作用。",
    ],
    dataFormat: "xyz",
    data: `3
Carbon dioxide
O -1.160 0.000 0.000
C 0.000 0.000 0.000
O 1.160 0.000 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "nh3",
    nameZh: "氨气",
    nameEn: "Ammonia",
    formula: "NH₃",
    category: "polar",
    phase: "气体",
    tags: ["三角锥", "孤对电子", "极性"],
    structureDescription:
      "三角锥构型，N 顶端带孤对电子，展示孤对对键角压缩的效果。",
    teachingTips: [
      "与甲烷对比，同样是四对电子，但空间形状不同。",
      "提问：若孤对电子被替换成键，构型会变成什么？",
    ],
    dataFormat: "xyz",
    data: `4
Ammonia molecule
N 0.000 0.000 0.000
H 0.943 0.000 -0.333
H -0.471 0.816 -0.333
H -0.471 -0.816 -0.333`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "ch4",
    nameZh: "甲烷",
    nameEn: "Methane",
    formula: "CH₄",
    category: "nonpolar",
    phase: "气体",
    tags: ["正四面体", "非极性", "有机入门"],
    structureDescription:
      "四面体构型，所有 C-H 键等长等角，是细谈 sp³ 杂化与立体对称性的经典例子。",
    teachingTips: [
      "与氨气比较，帮助学生理解孤对电子的影响。",
      "可延伸到烷烃基本构型与 VSEPR 理论。",
    ],
    dataFormat: "xyz",
    data: `5
Methane molecule
C 0.000 0.000 0.000
H 0.629 0.629 0.629
H 0.629 -0.629 -0.629
H -0.629 0.629 -0.629
H -0.629 -0.629 0.629`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "so2",
    nameZh: "二氧化硫",
    nameEn: "Sulfur Dioxide",
    formula: "SO₂",
    category: "polar",
    phase: "气体",
    tags: ["弯曲形", "极性", "空气污染"],
    structureDescription:
      "弯曲分子，S 原子上孤对电子导致键角约 119°，可引出酸雨成因与结构关系。",
    teachingTips: [
      "与 CO₂ 对照，强调主族下移不一定保持线形构型。",
      "提问：SO₂ 为何具有较强极性？如何影响其化学性质？",
    ],
    dataFormat: "xyz",
    data: `3
Sulfur dioxide
S 0.000 0.000 0.000
O 1.430 1.000 0.000
O -1.430 1.000 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "hcl",
    nameZh: "氯化氢",
    nameEn: "Hydrogen Chloride",
    formula: "HCl",
    category: "acidbase",
    phase: "气体",
    tags: ["强酸", "直线", "极性"],
    structureDescription:
      "线形双原子分子，键极性明显，溶于水后形成强酸，可联系酸碱章节。",
    teachingTips: [
      "可与氢气对比，讨论同样含氢但性质完全不同。",
      "提出问题：为何气态 HCl 溶于水后强烈放热？",
    ],
    dataFormat: "xyz",
    data: `2
Hydrogen chloride
Cl 0.000 0.000 0.000
H 1.270 0.000 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "naoh",
    nameZh: "氢氧化钠",
    nameEn: "Sodium Hydroxide",
    formula: "NaOH",
    category: "acidbase",
    phase: "固体",
    tags: ["强碱", "离子型", "工业常用"],
    structureDescription:
      "虽为离子晶体，但常以单个离子团呈现，强调 Na⁺ 与 OH⁻ 的空间位置和电荷分离。",
    teachingTips: [
      "提示学生：即便是“无机盐”，在微观层面仍可用 3D 模型表达。",
      "可与 HCl 配对演示酸碱中和，讨论离子来源。",
    ],
    dataFormat: "xyz",
    data: `3
Sodium hydroxide
Na 0.000 0.000 0.000
O 1.900 0.000 0.000
H 2.600 0.800 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "c2h4",
    nameZh: "乙烯",
    nameEn: "Ethene",
    formula: "C₂H₄",
    category: "organic",
    phase: "气体",
    tags: ["平面", "双键", "烯烃"],
    structureDescription:
      "平面分子，C=C 双键显著，适合说明烯烃的键结构及顺反概念。",
    teachingTips: [
      "对比乙烷的自由旋转，说明双键限制旋转的原因。",
      "可延伸到聚乙烯的结构来源。",
    ],
    dataFormat: "xyz",
    data: `6
Ethene molecule
C -0.667 0.000 0.000
C 0.667 0.000 0.000
H -1.232 0.922 0.000
H -1.232 -0.922 0.000
H 1.232 0.922 0.000
H 1.232 -0.922 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "c2h2",
    nameZh: "乙炔",
    nameEn: "Ethyne",
    formula: "C₂H₂",
    category: "organic",
    phase: "气体",
    tags: ["线形", "三键", "炔烃"],
    structureDescription:
      "典型线形分子，C≡C 三键拉成直线，可与乙烯、乙烷组成“三级跳”对比。",
    teachingTips: [
      "让学生总结：饱和度越低，结构越线性，键越短。",
      "讨论乙炔焰温度高的原因，联系键能。",
    ],
    dataFormat: "xyz",
    data: `4
Ethyne molecule
H -1.900 0.000 0.000
C -0.630 0.000 0.000
C 0.630 0.000 0.000
H 1.900 0.000 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "c2h6",
    nameZh: "乙烷",
    nameEn: "Ethane",
    formula: "C₂H₆",
    category: "organic",
    phase: "气体",
    tags: ["单键", "自由旋转", "烷烃"],
    structureDescription:
      "由两个四面体碳相连，可演示 Newman 投影与自由旋转概念。",
    teachingTips: [
      "和乙烯、乙炔对比键阶，讨论饱和度与性质关系。",
      "引导学生观察：两个 CH₃ 如何围绕 C-C 轴旋转。",
    ],
    dataFormat: "xyz",
    data: `8
Ethane molecule
C -0.770 0.000 0.000
C 0.770 0.000 0.000
H -1.170 0.950 0.000
H -1.170 -0.950 0.000
H -1.170 0.000 0.950
H 1.170 0.950 0.000
H 1.170 -0.950 0.000
H 1.170 0.000 -0.950`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "c2h5oh",
    nameZh: "乙醇",
    nameEn: "Ethanol",
    formula: "C₂H₅OH",
    category: "organic",
    phase: "液体",
    tags: ["羟基", "极性尾", "可燃"],
    structureDescription:
      "末端含羟基，可观察到“极性头+非极性尾”的结构，适合说明溶解性。",
    teachingTips: [
      "提问：羟基位置变化会如何影响溶解性？",
      "与乙烷对比，突出官能团对性质的决定作用。",
    ],
    dataFormat: "xyz",
    data: `9
Ethanol molecule
C -0.748 0.027 0.000
C 0.748 -0.027 0.000
O 1.431 1.168 0.000
H 1.915 1.696 0.000
H -1.140 -0.503 0.889
H -1.140 -0.503 -0.889
H -1.157 1.049 0.000
H 1.136 -0.556 0.889
H 1.136 -0.556 -0.889`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "ch3cooh",
    nameZh: "乙酸",
    nameEn: "Acetic Acid",
    formula: "CH₃COOH",
    category: "acidbase",
    phase: "液体",
    tags: ["羧基", "弱酸", "极性"],
    structureDescription:
      "含羧基（-COOH），可观察到共平面的羧基与甲基的旋转，自然引到酸性来源。",
    teachingTips: [
      "强调羧基内的氢才是可电离的，避免学生误判。",
      "配合乙醇讲解：官能团不同导致酸碱性差异。",
    ],
    dataFormat: "xyz",
    data: `8
Acetic acid molecule
C -0.640 0.000 0.000
C 0.640 0.000 0.000
O 1.365 1.053 0.000
O 1.365 -1.053 0.000
H -1.085 1.012 0.000
H -1.085 -0.506 0.878
H -1.085 -0.506 -0.878
H 2.100 1.650 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "c6h6",
    nameZh: "苯",
    nameEn: "Benzene",
    formula: "C₆H₆",
    category: "feature",
    phase: "液体",
    tags: ["芳香性", "平面", "共轭"],
    structureDescription:
      "规则六边形平面结构，演示芳香性共轭 π 电子与碳碳键等长。",
    teachingTips: [
      "让学生观察所有 C-C 键长度一致，理解“共振结构”现实含义。",
      "引导讨论苯环在有机化学中的基石作用。",
    ],
    dataFormat: "xyz",
    data: `12
Benzene molecule
C 1.396 0.000 0.000
C 0.698 1.209 0.000
C -0.698 1.209 0.000
C -1.396 0.000 0.000
C -0.698 -1.209 0.000
C 0.698 -1.209 0.000
H 2.479 0.000 0.000
H 1.240 2.148 0.000
H -1.240 2.148 0.000
H -2.479 0.000 0.000
H -1.240 -2.148 0.000
H 1.240 -2.148 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "o3",
    nameZh: "臭氧",
    nameEn: "Ozone",
    formula: "O₃",
    category: "gas",
    phase: "气体",
    tags: ["弯曲形", "强氧化", "臭氧层"],
    structureDescription:
      "由三个氧原子构成的弯曲分子，可展示离域 π 键与共振对键长的影响。",
    teachingTips: [
      "结合臭氧层保护地球的案例，把微观结构与宏观环境联系起来。",
      "与 O₂ 对比说明键长与化学活性之间的关系。",
    ],
    dataFormat: "xyz",
    data: `3
Ozone molecule
O -1.200 0.000 0.000
O 0.000 0.370 0.000
O 1.150 -0.370 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "bf3",
    nameZh: "三氟化硼",
    nameEn: "Boron Trifluoride",
    formula: "BF₃",
    category: "nonpolar",
    phase: "气体",
    tags: ["平面三角形", "空轨道", "路易斯酸"],
    structureDescription:
      "典型的平面三角形分子，B 原子缺电子，可引入“空轨道接受电子对”的概念。",
    teachingTips: [
      "与 NH₃ 的孤对电子成对使用，理解配位键的形成机制。",
      "强调“非极性”不等于“不反应”，引导讨论 Lewis 酸碱理论。",
    ],
    dataFormat: "xyz",
    data: `4
Boron trifluoride
B 0.000 0.000 0.000
F 0.000 1.300 0.000
F -1.126 -0.650 0.000
F 1.126 -0.650 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "pf5",
    nameZh: "五氟化磷",
    nameEn: "Phosphorus Pentafluoride",
    formula: "PF₅",
    category: "feature",
    phase: "气体",
    tags: ["三角双锥", "扩展八隅体", "VSEPR"],
    structureDescription:
      "展示三角双锥构型的典型案例，可配合电子域理论讲解扩展八隅体。",
    teachingTips: [
      "让学生找出轴向与赤道向 F 的差别，分析键角变化原因。",
      "对比 PF₅ 与 PCl₅ 在不同温度下的稳定性，引出分子运动。",
    ],
    dataFormat: "xyz",
    data: `6
Phosphorus pentafluoride
P 0.000 0.000 0.000
F 0.000 0.000 2.000
F 0.000 0.000 -2.000
F 1.700 0.000 0.000
F -0.850 1.472 0.000
F -0.850 -1.472 0.000`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "sf6",
    nameZh: "六氟化硫",
    nameEn: "Sulfur Hexafluoride",
    formula: "SF₆",
    category: "feature",
    phase: "气体",
    tags: ["八面体", "绝缘气体", "扩展八隅体"],
    structureDescription:
      "八面体对称性极高，适合展示 d 轨道参与成键和气体绝缘材料的宏观应用。",
    teachingTips: [
      "与 PF₅ 串联，让学生比较三角双锥与八面体的电荷分布差异。",
      "结合 SF₆ 在高压电力设备中的应用，强化“结构决定性质”。",
    ],
    dataFormat: "xyz",
    data: `7
Sulfur hexafluoride
S 0.000 0.000 0.000
F 1.700 0.000 0.000
F -1.700 0.000 0.000
F 0.000 1.700 0.000
F 0.000 -1.700 0.000
F 0.000 0.000 1.700
F 0.000 0.000 -1.700`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "h2so4",
    nameZh: "硫酸",
    nameEn: "Sulfuric Acid",
    formula: "H₂SO₄",
    category: "acidbase",
    phase: "液体",
    tags: ["强酸", "四面体", "脱水性"],
    structureDescription:
      "中心 S 与四个 O 构成近似四面体，其中两个为羟基，可用于解释多元酸的逐级电离。",
    teachingTips: [
      "结合“浓硫酸的吸水性”实验，讨论羟基间的氢键可能性。",
      "提醒学生注意两个 H 都连在 O 上，而非直接连在 S 上。",
    ],
    dataFormat: "xyz",
    data: `7
Sulfuric acid
S 0.000 0.000 0.000
O 1.300 0.000 0.000
O -1.300 0.000 0.000
O 0.000 1.250 0.000
O 0.000 -1.250 0.000
H 0.000 2.150 0.200
H 0.000 -2.150 -0.200`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "nacl_cluster",
    nameZh: "氯化钠晶格单元",
    nameEn: "Sodium Chloride (unit cluster)",
    formula: "NaCl",
    category: "feature",
    phase: "固体",
    tags: ["离子晶体", "立方堆积", "配位数"],
    structureDescription:
      "以四个离子点阵展示 NaCl 的立方晶胞关系，便于说明“每个 Na⁺ 被六个 Cl⁻ 包围”的概念。",
    teachingTips: [
      "可让学生想象将该单元沿三个方向平移，即得到完整晶格。",
      "与金刚石、石墨的共价网络结构对比，强化晶体类型差异。",
    ],
    dataFormat: "xyz",
    data: `4
Sodium chloride cluster
Na -1.400 -1.400 -1.400
Na 1.400 1.400 -1.400
Cl -1.400 1.400 1.400
Cl 1.400 -1.400 1.400`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "c6h12o6",
    nameZh: "葡萄糖",
    nameEn: "Glucose",
    formula: "C₆H₁₂O₆",
    category: "organic",
    phase: "固体",
    tags: ["环状结构", "多羟基", "生物化学"],
    structureDescription:
      "六元环呈椅式构型，布满羟基，是讲解碳水化合物以及多官能团协同作用的绝佳例子。",
    teachingTips: [
      "提示学生观察“极性头遍布”的特点，推导葡萄糖易溶于水的原因。",
      "与乙醇或乙酸对照，思考官能团数量如何影响沸点与互溶性。",
    ],
    dataFormat: "xyz",
    data: `24
Glucose molecule
C 0.000 0.000 0.000
C 1.220 0.200 -0.120
C 2.270 -0.500 0.580
C 1.820 -1.850 0.220
C 0.500 -1.840 -0.720
C -0.520 -0.630 -1.200
O -0.850 0.900 0.300
O 2.550 0.750 1.200
O 3.200 -1.200 -0.200
O 2.600 -2.700 0.950
O 0.100 -2.950 -0.100
O -1.600 -1.500 -1.900
H 0.110 0.340 1.040
H 1.300 1.270 -0.420
H 2.340 -0.100 1.580
H 2.520 -2.070 -0.740
H 0.260 -1.270 -1.720
H -0.100 0.020 -1.900
H -1.230 1.580 -0.200
H 3.060 0.930 2.050
H 3.950 -1.650 -0.630
H 3.080 -3.040 1.650
H 0.000 -3.420 0.750
H -2.050 -0.980 -2.500`,
    defaultStyle: "ball_and_stick",
  },
  {
    id: "so3",
    nameZh: "三氧化硫",
    nameEn: "Sulfur Trioxide",
    formula: "SO₃",
    category: "feature",
    phase: "液体",
    tags: ["平面三角形", "酸酐", "强氧化"],
    structureDescription:
      "平面三角形分子，是硫酸的酸酐，可与 H₂SO₄ 组成“酸酐—酸”对。",
    teachingTips: [
      "展示从 SO₃ 加水生成 H₂SO₄ 的过程，帮助学生建立结构演化图。",
      "与 BF₃ 一同讲解平面三角形分子的对称性和极性判断。",
    ],
    dataFormat: "xyz",
    data: `4
Sulfur trioxide
S 0.000 0.000 0.000
O 1.320 0.000 0.000
O -0.660 1.143 0.000
O -0.660 -1.143 0.000`,
    defaultStyle: "ball_and_stick",
  },
];

window.MOLECULE_CATEGORIES = MOLECULE_CATEGORIES;
window.MOLECULE_LIBRARY = MOLECULE_LIBRARY;
