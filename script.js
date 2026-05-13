const OSS_BASE_URL = "https://agan-xin.oss-cn-beijing.aliyuncs.com";

const categoryLabels = {
  all: "全部",
  "short-drama": "短剧",
  event: "活动",
  "self-media": "自媒体",
  wedding: "婚礼",
  food: "探店",
  portrait: "写真",
  graduation: "毕业季",
  "life-style": "生活方式",
};

const galleryLabels = {
  all: "全部",
  portrait: "人像",
  event: "活动",
  personal: "个人",
  cafe: "咖啡与生活方式",
};

function encodeOssKey(objectKey) {
  return objectKey
    .split("/")
    .map((segment) =>
      encodeURIComponent(segment).replace(/[!'()*]/g, (char) =>
        `%${char.charCodeAt(0).toString(16).toUpperCase()}`,
      ),
    )
    .join("/");
}

function ossUrl(objectKey) {
  return `${OSS_BASE_URL}/${encodeOssKey(objectKey)}`;
}

function asset(objectKey, title, type = "image", orientation = "landscape") {
  return {
    id: objectKey,
    title,
    type,
    orientation,
    ossObjectKey: objectKey,
    ossUrl: ossUrl(objectKey),
  };
}

function ratioFor(orientation) {
  if (orientation === "portrait") return "9 / 16";
  if (orientation === "square") return "1 / 1";
  return "16 / 9";
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const personalImages = [
  asset("Agan/个人简历/个人介绍/个人照片/微信图片_20260508214010_249_194.jpg", "个人形象照", "image", "portrait"),
  asset("Agan/个人简历/个人介绍/个人照片/微信图片_20260508214011_250_194.jpg", "个人形象照", "image", "portrait"),
  asset("Agan/个人简历/个人介绍/个人照片/微信图片_20251220015050_68_194.jpg", "个人形象照", "image", "portrait"),
];

const projects = [
  {
    id: "qingdao-short-drama",
    title: "短剧制片与影像统筹",
    company: "青岛众星影业",
    category: "short-drama",
    period: "2024.11 - 2025.07",
    location: "青岛",
    roles: ["摄影师", "执行导演", "剪辑师", "中层管理", "制片统筹"],
    summary:
      "负责 10 人以上内容厂牌统筹管理，主导短剧项目全流程制片与现场推进，拍摄阶段担任 A 机摄影师与执行导演，后期负责剪辑和最终定剪。",
    highlights: [
      "累计完成 16 部短剧拍摄任务。",
      "独立完成 3 部短剧全集剪辑。",
      "主导 15 部短剧最终定剪。",
      "负责现场拍摄推进与后期剪辑整理。",
    ],
    metrics: [
      { label: "短剧拍摄", value: "16 部" },
      { label: "全集剪辑", value: "3 部" },
      { label: "最终定剪", value: "15 部" },
    ],
    cover: null,
    media: [
      asset("Agan/个人简历/工作经历/青岛众星影业/短剧视频案例/短剧作品合集.mp4", "短剧作品合集", "video", "portrait"),
      asset("Agan/个人简历/工作经历/青岛众星影业/短剧团队介绍/短剧作品集.pdf", "短剧作品集 PDF", "pdf", "landscape"),
    ],
  },
  {
    id: "tianjin-retro-market",
    title: "复古市集活动与账号运营",
    company: "天津浩棋文化有限公司",
    category: "event",
    period: "2022.07 - 2022.09 / 2023.05 - 2023.12",
    location: "天津",
    roles: ["策划", "运营", "宣传", "执行", "摄影", "摄像", "后期"],
    summary:
      "参与大型复古市集活动策划运营，负责商家和艺术家对接、宣传方案执行、场地布置、现场拍摄和后期内容制作。",
    highlights: [
      "策划运营 5 场大型复古市集活动。",
      "制作并运营 4 个万粉账号，半年完成 100+ 短视频。",
      "个人账号 2 个月发布 20 条作品获赞 26w+，单条爆款播放 500w+。",
      "廉平活动照片刊登于日本复古杂志《CLUTCH》。",
    ],
    metrics: [
      { label: "大型活动", value: "5 场" },
      { label: "短视频", value: "100+" },
      { label: "单条播放", value: "500w+" },
    ],
    cover: asset(
      "Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/浩棋复古游园会/DSC02338.jpg",
      "浩棋复古游园会",
      "image",
      "landscape",
    ),
    media: [
      asset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动视频/廉平成片.mp4", "廉平成片", "video", "landscape"),
      asset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动视频/浩棋游园会.mp4", "浩棋游园会", "video", "landscape"),
      asset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/廉平/微信图片_20260509012544_258_194.jpg", "廉平活动现场", "image", "landscape"),
      asset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/抖音制作/个人账号/抖音截图/阿甘有车了.png", "个人账号截图", "image", "portrait"),
    ],
  },
  {
    id: "nanjing-wedding-media",
    title: "婚礼影像与婚礼自媒体",
    company: "南京好享瑷高端婚礼策划有限公司",
    category: "wedding",
    period: "2017.06 - 至今",
    location: "南京",
    roles: ["婚礼执行", "婚礼摄影", "婚礼摄像", "编导", "剪辑", "运营"],
    summary:
      "长期参与婚礼执行和影像制作，负责婚礼流程把控、人员调度、场地需求、搭建舞美、现场拍摄、后期制作和老板 IP 内容运营。",
    highlights: [
      "拥有超百场婚礼落地执行经验。",
      "熟悉婚礼现场流程、搭建、舞美和多岗位协同。",
      "负责婚礼老板 IP 的全案策划、编导、拍摄、剪辑与运营。",
      "完成婚礼现场拍摄、快剪和自媒体内容制作。",
    ],
    metrics: [
      { label: "婚礼落地", value: "100+" },
      { label: "内容方向", value: "IP 全案" },
    ],
    cover: null,
    media: [
      asset("Agan/个人简历/工作经历/南京好享瑷高端婚礼策划有限公司/视频案例/摄像快剪/快剪.mp4", "婚礼快剪", "video", "landscape"),
      asset("Agan/个人简历/工作经历/南京好享瑷高端婚礼策划有限公司/视频案例/自媒体/好享瑷1期.mp4", "好享瑷 1 期", "video", "portrait"),
      asset("Agan/个人简历/工作经历/南京好享瑷高端婚礼策划有限公司/视频案例/自媒体/韩国新娘点名要的韩式婚礼.mp4", "韩式婚礼选题", "video", "portrait"),
      asset("Agan/个人简历/工作经历/南京好享瑷高端婚礼策划有限公司/视频案例/自媒体/备婚攻略（金银饰）.mp4", "备婚攻略", "video", "portrait"),
    ],
  },
  {
    id: "beijing-food-reels",
    title: "建行生活美食探店",
    company: "北京优为文化传媒有限公司",
    category: "food",
    period: "2022.12 - 2023.05",
    location: "全国多城市",
    roles: ["摄像", "编导", "剪辑"],
    summary:
      "服务建设银行旗下 app 建行生活，在全国多城市完成美食探店内容拍摄，覆盖脚本、拍摄、素材整理、包装和后期剪辑。",
    highlights: [
      "全国 20+ 城市美食探店拍摄。",
      "累计拍摄 100+ 家门店。",
      "日均积累素材 400min+。",
      "撰写拍摄脚本 30+ 篇。",
    ],
    metrics: [
      { label: "城市", value: "20+" },
      { label: "门店", value: "100+" },
      { label: "脚本", value: "30+" },
    ],
    cover: null,
    media: [
      asset("Agan/个人简历/工作经历/北京优为文化传媒有限公司/视频案例/喜焱 (1).mp4", "喜焱探店案例", "video", "portrait"),
    ],
  },
  {
    id: "portrait-gallery",
    title: "人像写真拍摄精选",
    company: "个人项目",
    category: "portrait",
    period: "2024 - 2026",
    location: "南京 / 多地",
    roles: ["摄影", "现场沟通", "后期调色"],
    summary:
      "完成人像写真拍摄与后期选片，素材包含横图、竖图和方图。",
    highlights: [
      "覆盖棚拍、户外和生活方式场景。",
      "负责拍摄沟通、现场拍摄和后期选片。",
      "包含个人写真、品牌人物和毕业季相关拍摄。",
    ],
    metrics: [
      { label: "照片素材", value: "60+" },
      { label: "画幅", value: "横/竖/方" },
    ],
    cover: asset("Agan/个人简历/其他项目经历/写真拍摄/DSC04576.jpg", "写真拍摄精选", "image", "landscape"),
    media: [
      asset("Agan/个人简历/其他项目经历/写真拍摄/DSC04576.jpg", "写真作品 01", "image", "landscape"),
      asset("Agan/个人简历/其他项目经历/写真拍摄/DSC06389.jpg", "写真作品 02", "image", "portrait"),
      asset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022640_290_194.jpg", "写真作品 03", "image", "portrait"),
      asset("Agan/个人简历/其他项目经历/写真拍摄/DSC07167.jpg", "写真作品 04", "image", "landscape"),
    ],
  },
  {
    id: "graduation-video",
    title: "毕业季影像项目",
    company: "其他项目经历",
    category: "graduation",
    period: "项目经历",
    location: "南京",
    roles: ["拍摄", "剪辑", "成片交付"],
    summary:
      "完成毕业季活动视频拍摄与剪辑，交付幼儿园和班级毕业季成片。",
    highlights: [
      "完成幼儿园与班级毕业季成片。",
      "覆盖活动记录、人物采访和现场素材剪辑。",
    ],
    metrics: [
      { label: "成片", value: "2 支" },
      { label: "类型", value: "毕业季" },
    ],
    cover: null,
    media: [
      asset("Agan/个人简历/其他项目经历/毕业季拍摄/南京博颂莱爵幼儿园毕业季3.mp4", "南京博颂莱爵幼儿园毕业季", "video", "landscape"),
      asset("Agan/个人简历/其他项目经历/毕业季拍摄/南京丁家桥六一班毕业季3.m4v", "南京丁家桥六一班毕业季", "video", "landscape"),
    ],
  },
  {
    id: "hairline-self-media",
    title: "纹发账号短视频",
    company: "自媒体项目",
    category: "self-media",
    period: "项目经历",
    location: "线上",
    roles: ["选题", "编导", "拍摄", "剪辑"],
    summary:
      "围绕纹发、脱发、发际线等垂直领域进行短视频选题、拍摄和剪辑。",
    highlights: [
      "覆盖痛点型、剧情型、反差型和科普型选题。",
      "以竖屏短视频为主要表达形态。",
      "用于纹发账号短视频内容。",
    ],
    metrics: [
      { label: "案例", value: "10 支" },
      { label: "画幅", value: "9:16" },
    ],
    cover: null,
    media: [
      asset("Agan/个人简历/其他项目经历/自媒体/纹发账号/视频案例/1.解决脱发最好的办法.mp4", "解决脱发最好的办法", "video", "portrait"),
      asset("Agan/个人简历/其他项目经历/自媒体/纹发账号/视频案例/3.宽发缝女生.mp4", "宽发缝女生", "video", "portrait"),
      asset("Agan/个人简历/其他项目经历/自媒体/纹发账号/视频案例/9.M型发际线.mp4", "M 型发际线", "video", "portrait"),
      asset("Agan/个人简历/其他项目经历/自媒体/纹发账号/视频案例/纹发正片.mp4", "纹发正片", "video", "landscape"),
    ],
  },
  {
    id: "photography-account",
    title: "摄影账号人物短片",
    company: "自媒体项目",
    category: "self-media",
    period: "项目经历",
    location: "线上",
    roles: ["摄影", "摄像", "剪辑", "账号内容"],
    summary:
      "围绕人物拍摄制作摄影账号短视频内容。",
    highlights: [
      "覆盖朱文慧、陈莉、朱虹、孔孟茹等人物视频案例。",
      "负责拍摄、剪辑和账号内容整理。",
    ],
    metrics: [
      { label: "人物短片", value: "4 支" },
      { label: "账号方向", value: "摄影" },
    ],
    cover: null,
    media: [
      asset("Agan/个人简历/其他项目经历/自媒体/摄影账号/视频案例/朱文慧.mp4", "朱文慧", "video", "portrait"),
      asset("Agan/个人简历/其他项目经历/自媒体/摄影账号/视频案例/陈莉.mp4", "陈莉", "video", "portrait"),
      asset("Agan/个人简历/其他项目经历/自媒体/摄影账号/视频案例/朱虹.mp4", "朱虹", "video", "portrait"),
      asset("Agan/个人简历/其他项目经历/自媒体/摄影账号/视频案例/孔孟茹.m4v", "孔孟茹", "video", "portrait"),
    ],
  },
  {
    id: "qingmen-cafe",
    title: "青门 CAFE&TAPROOM",
    company: "青门 CAFE&TAPROOM",
    category: "life-style",
    period: "2022.10 - 2022.12",
    location: "天津",
    roles: ["服务员", "精酿文化", "日常服务"],
    summary:
      "参与精酿门店打酒服务、日常盘点与卫生工作。",
    highlights: [
      "熟悉精酿文化和门店服务流程。",
      "参与咖啡、啤酒相关生活方式场景工作。",
    ],
    metrics: [
      { label: "方向", value: "生活方式" },
    ],
    cover: asset("Agan/个人简历/工作经历/青门CAFE&TAPROOM/照片/微信图片_20260509020721_264_194.jpg", "青门 CAFE&TAPROOM", "image", "square"),
    media: [
      asset("Agan/个人简历/工作经历/青门CAFE&TAPROOM/照片/微信图片_20260509020721_264_194.jpg", "青门照片 01", "image", "square"),
      asset("Agan/个人简历/工作经历/青门CAFE&TAPROOM/照片/微信图片_20260509020720_263_194.jpg", "青门照片 02", "image", "portrait"),
      asset("Agan/个人简历/工作经历/青门CAFE&TAPROOM/照片/微信图片_20260509020722_265_194.jpg", "青门照片 03", "image", "portrait"),
      asset("Agan/个人简历/工作经历/青门CAFE&TAPROOM/照片/微信图片_20260509020723_266_194.jpg", "青门照片 04", "image", "square"),
    ],
  },
];

const timelineItems = [
  {
    period: "2024.11 - 2025.07",
    title: "青岛众星影业",
    role: "摄影师 / 执行导演 / 剪辑师 / 中层管理 / 制片统筹",
    location: "青岛",
    bullets: [
      "负责 10 人以上内容厂牌统筹管理。",
      "主导短剧项目全流程制片与整体统筹工作。",
      "现场担任 A 机摄影师及执行导演，后期负责剪辑与最终定剪。",
    ],
    stats: ["16 部短剧拍摄", "3 部全集剪辑", "15 部最终定剪"],
  },
  {
    period: "2017.06 - 至今",
    title: "南京好享瑷高端婚礼策划有限公司",
    role: "婚礼执行 / 婚礼摄影摄像 / 婚礼自媒体",
    location: "南京",
    bullets: [
      "把控婚礼流程、人员调度、场地需求、搭建、舞美与 DIY 相关内容。",
      "负责婚礼前期策划、现场拍摄和后期制作。",
      "负责婚礼老板 IP 的策划、编导、拍摄、剪辑和运营。",
    ],
    stats: ["100+ 婚礼落地", "全案 IP 内容", "多年婚礼影像"],
  },
  {
    period: "2022.07 - 2022.09 / 2023.05 - 2023.12",
    title: "天津浩棋文化有限公司",
    role: "策划 / 运营 / 宣传 / 执行 / 摄影 / 摄像 / 后期",
    location: "天津",
    bullets: [
      "策划运营 5 场大型复古市集活动。",
      "对接社群用户、商家与艺术家，推进宣传方案、场地布置和现场执行。",
      "制作运营 4 个万粉账号，半年完成 100+ 短视频。",
    ],
    stats: ["5 场大型市集", "4 个万粉账号", "500w+ 单条播放"],
  },
  {
    period: "2022.12 - 2023.05",
    title: "北京优为文化传媒有限公司",
    role: "摄像 / 编导",
    location: "全国多城市",
    bullets: [
      "服务建行生活 app，在全国 20+ 城市拍摄 100+ 美食探店。",
      "掌握项目制作全流程，负责拍摄、脚本、素材整理和后期包装。",
      "日均积累素材 400min+，撰写脚本 30+ 篇。",
    ],
    stats: ["20+ 城市", "100+ 门店", "30+ 脚本"],
  },
  {
    period: "2022.10 - 2022.12",
    title: "青门 CAFE&TAPROOM",
    role: "服务员",
    location: "天津",
    bullets: [
      "精通精酿文化，参与打酒服务、日常盘点与卫生工作。",
      "补充咖啡、啤酒和生活方式领域的兴趣与现场经验。",
    ],
    stats: ["精酿文化", "生活方式", "服务现场"],
  },
];

const gallery = [
  ...personalImages.map((item) => ({ ...item, group: "personal" })),
  { ...asset("Agan/个人简历/其他项目经历/写真拍摄/DSC04576.jpg", "写真作品 01", "image", "landscape"), group: "portrait" },
  { ...asset("Agan/个人简历/其他项目经历/写真拍摄/DSC06389.jpg", "写真作品 02", "image", "portrait"), group: "portrait" },
  { ...asset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022640_290_194.jpg", "写真作品 03", "image", "portrait"), group: "portrait" },
  { ...asset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022832_302_194.jpg", "写真作品 04", "image", "landscape"), group: "portrait" },
  { ...asset("Agan/个人简历/其他项目经历/写真拍摄/DSC06777.jpg", "写真作品 05", "image", "portrait"), group: "portrait" },
  { ...asset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022627_285_194.jpg", "写真作品 06", "image", "landscape"), group: "portrait" },
  { ...asset("Agan/个人简历/其他项目经历/写真拍摄/DSC04886.jpg", "写真作品 07", "image", "portrait"), group: "portrait" },
  { ...asset("Agan/个人简历/其他项目经历/写真拍摄/DSC07167.jpg", "写真作品 08", "image", "landscape"), group: "portrait" },
  { ...asset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/廉平/微信图片_20260509012544_258_194.jpg", "廉平活动 01", "image", "landscape"), group: "event" },
  { ...asset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/廉平/微信图片_20260509012546_260_194.jpg", "廉平活动 02", "image", "square"), group: "event" },
  { ...asset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/浩棋复古游园会/DSC02338.jpg", "复古游园会 01", "image", "landscape"), group: "event" },
  { ...asset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/浩棋复古游园会/DSC05253.jpg", "复古游园会 02", "image", "portrait"), group: "event" },
  { ...asset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/浩棋复古游园会/DSC04323.jpg", "复古游园会 03", "image", "portrait"), group: "event" },
  { ...asset("Agan/个人简历/工作经历/青门CAFE&TAPROOM/照片/微信图片_20260509020721_264_194.jpg", "青门 CAFE&TAPROOM 01", "image", "square"), group: "cafe" },
  { ...asset("Agan/个人简历/工作经历/青门CAFE&TAPROOM/照片/微信图片_20260509020720_263_194.jpg", "青门 CAFE&TAPROOM 02", "image", "portrait"), group: "cafe" },
  { ...asset("Agan/个人简历/工作经历/青门CAFE&TAPROOM/照片/微信图片_20260509020722_265_194.jpg", "青门 CAFE&TAPROOM 03", "image", "portrait"), group: "cafe" },
  { ...asset("Agan/个人简历/工作经历/青门CAFE&TAPROOM/照片/微信图片_20260509020723_266_194.jpg", "青门 CAFE&TAPROOM 04", "image", "square"), group: "cafe" },
];

function photographyAsset(objectKey, group = "portrait") {
  const filename = objectKey.split("/").pop().replace(/\.[^.]+$/, "");
  return { ...asset(objectKey, filename, "image", "square"), group };
}

const additionalPhotography = [
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022612_281_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/DSC04576.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022640_290_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/DSC06389.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022832_302_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/DSC06777.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022627_285_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022605_279_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022517_274_194.png"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/DSC04886.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022704_295_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022632_287_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022636_289_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022850_305_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022812_299_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022658_294_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022643_291_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/DSC07153.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022440_272_194.png"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022712_296_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022608_280_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022853_306_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/DSC04855.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022624_284_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022629_286_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022601_278_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022722_297_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022348_269_194.png"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022615_282_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/DSC07167.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022619_283_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260428001409_234_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/DSC02633.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022634_288_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260428001410_235_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/DSC06221.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022844_304_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/DSC05884.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022839_303_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022544_276_194.png"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022501_273_194.png"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/DSC06194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/DSC07076.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022327_268_194.png"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022818_300_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/DSC06746.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022826_301_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022651_293_194.jpg"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/微信图片_20260509022301_267_194.png"),
  photographyAsset("Agan/个人简历/其他项目经历/写真拍摄/DSC06179.jpg"),
  photographyAsset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/廉平/微信图片_20260509012546_260_194.jpg", "event"),
  photographyAsset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/廉平/微信图片_20260509012948_262_194.jpg", "event"),
  photographyAsset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/廉平/微信图片_20260509012544_258_194.jpg", "event"),
  photographyAsset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/廉平/微信图片_20260509012545_259_194.jpg", "event"),
  photographyAsset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/浩棋复古游园会/DSC02338.jpg", "event"),
  photographyAsset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/浩棋复古游园会/DSC05253.jpg", "event"),
  photographyAsset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/浩棋复古游园会/DSC04612.jpg", "event"),
  photographyAsset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/浩棋复古游园会/DSC03433.jpg", "event"),
  photographyAsset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/浩棋复古游园会/DSC05032.jpg", "event"),
  photographyAsset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/浩棋复古游园会/DSC04253.jpg", "event"),
  photographyAsset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/浩棋复古游园会/DSC04650.jpg", "event"),
  photographyAsset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/浩棋复古游园会/DSC04323.jpg", "event"),
  photographyAsset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/活动照片/浩棋复古游园会/DSC04390.jpg", "event"),
];

const photographyWall = uniqueMedia([
  ...gallery.filter((item) => item.type === "image" && item.group === "portrait"),
  ...additionalPhotography.filter((item) => item.group === "portrait"),
]);

const shortVideos = [
  asset("Agan/个人简历/其他项目经历/自媒体/纹发账号/视频案例/1.解决脱发最好的办法.mp4", "解决脱发最好的办法", "video", "portrait"),
  asset("Agan/个人简历/其他项目经历/自媒体/纹发账号/视频案例/2.杰森斯坦僧.mp4", "杰森斯坦僧", "video", "portrait"),
  asset("Agan/个人简历/其他项目经历/自媒体/纹发账号/视频案例/3.宽发缝女生.mp4", "宽发缝女生", "video", "portrait"),
  asset("Agan/个人简历/其他项目经历/自媒体/纹发账号/视频案例/4.寸头帅哥.mp4", "寸头帅哥", "video", "portrait"),
  asset("Agan/个人简历/其他项目经历/自媒体/纹发账号/视频案例/5.植发疤痕地铁.mp4", "植发疤痕地铁", "video", "portrait"),
  asset("Agan/个人简历/其他项目经历/自媒体/纹发账号/视频案例/6.骂人.mp4", "情绪化选题", "video", "portrait"),
  asset("Agan/个人简历/其他项目经历/自媒体/纹发账号/视频案例/7.上学的学生.mp4", "上学的学生", "video", "portrait"),
  asset("Agan/个人简历/其他项目经历/自媒体/纹发账号/视频案例/8.我大抵是秃了.mp4", "我大抵是秃了", "video", "portrait"),
  asset("Agan/个人简历/其他项目经历/自媒体/纹发账号/视频案例/9.M型发际线.mp4", "M 型发际线", "video", "portrait"),
  asset("Agan/个人简历/其他项目经历/自媒体/纹发账号/视频案例/纹发正片.mp4", "纹发正片", "video", "landscape"),
  asset("Agan/个人简历/其他项目经历/自媒体/摄影账号/视频案例/朱文慧.mp4", "朱文慧", "video", "portrait"),
  asset("Agan/个人简历/其他项目经历/自媒体/摄影账号/视频案例/陈莉.mp4", "陈莉", "video", "portrait"),
  asset("Agan/个人简历/其他项目经历/自媒体/摄影账号/视频案例/朱虹.mp4", "朱虹", "video", "portrait"),
  asset("Agan/个人简历/其他项目经历/自媒体/摄影账号/视频案例/孔孟茹.m4v", "孔孟茹", "video", "portrait"),
  asset("Agan/个人简历/工作经历/南京好享瑷高端婚礼策划有限公司/视频案例/自媒体/韩国新娘同款婚礼要花多少米？.mp4", "韩式婚礼预算选题", "video", "portrait"),
  asset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/抖音制作/个人账号/视频案例/日常更新.mp4", "阿甘有车了日常更新", "video", "portrait"),
];

const activityAccountScreenshots = [
  asset("Agan/个人简历/工作经历/自媒体账号/活动账号/抖音截图/浩棋.png", "浩棋活动账号截图", "image", "portrait"),
  asset("Agan/个人简历/工作经历/自媒体账号/活动账号/抖音截图/浩棋复古游园会.png", "浩棋复古游园会账号截图", "image", "portrait"),
];

const selfMediaGroups = [
  {
    id: "wedding-short",
    title: "婚礼短视频",
    summary: "婚礼 IP、备婚攻略和婚礼选题内容。",
    media: [
      asset("Agan/个人简历/工作经历/南京好享瑷高端婚礼策划有限公司/视频案例/自媒体/好享瑷1期.mp4", "好享瑷 1 期", "video", "portrait"),
      asset("Agan/个人简历/工作经历/南京好享瑷高端婚礼策划有限公司/视频案例/自媒体/韩国新娘同款婚礼要花多少米？.mp4", "韩式婚礼预算选题", "video", "portrait"),
      asset("Agan/个人简历/工作经历/南京好享瑷高端婚礼策划有限公司/视频案例/自媒体/韩国新娘点名要的韩式婚礼.mp4", "韩式婚礼选题", "video", "portrait"),
      asset("Agan/个人简历/工作经历/南京好享瑷高端婚礼策划有限公司/视频案例/自媒体/备婚攻略（金银饰）.mp4", "备婚攻略", "video", "portrait"),
      asset("Agan/个人简历/工作经历/南京好享瑷高端婚礼策划有限公司/视频案例/自媒体/备婚日常-家纺篇.mp4", "备婚日常-家纺篇", "video", "portrait"),
    ],
  },
  {
    id: "hairline-short",
    title: "纹发短视频",
    summary: "纹发、脱发、发际线垂直选题内容。",
    media: shortVideos.filter((video) => video.ossObjectKey.includes("纹发账号")),
  },
  {
    id: "event-short",
    title: "活动短视频",
    summary: "活动宣传、账号日常和现场内容发布素材。",
    media: [
      asset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/抖音制作/其余账号/视频案例/活动宣传.m4v", "活动宣传", "video", "portrait"),
    ],
  },
  {
    id: "motor-short",
    title: "机车短视频",
    summary: "个人账号“阿甘有车了”短视频内容。",
    media: [
      asset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/抖音制作/个人账号/视频案例/日常更新.mp4", "阿甘有车了", "video", "portrait"),
      asset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/抖音制作/其余账号/视频案例/活动宣传1.mp4", "TZY 1", "video", "portrait"),
      asset("Agan/个人简历/工作经历/天津浩棋文化有限公司/照片视频案例/抖音制作/其余账号/视频案例/日常拍摄.m4v", "TZY 2", "video", "portrait"),
      asset("Agan/个人简历/工作经历/自媒体账号/机车账号/抖音截图/tzy.png", "TZY 账号截图 01", "image", "portrait"),
      asset("Agan/个人简历/工作经历/自媒体账号/机车账号/抖音截图/tzy2.png", "TZY 账号截图 02", "image", "portrait"),
      asset("Agan/个人简历/工作经历/自媒体账号/机车账号/抖音截图/阿甘有车了.png", "阿甘有车了账号截图 01", "image", "portrait"),
      asset("Agan/个人简历/工作经历/自媒体账号/机车账号/抖音截图/阿甘有车了2.png", "阿甘有车了账号截图 02", "image", "portrait"),
    ],
  },
  {
    id: "barber-short",
    title: "理发短视频",
    summary: "理发账号短视频内容。",
    media: [
      asset("Agan/个人简历/工作经历/自媒体账号/理发账号/视频案例/理发.mp4", "理发短视频", "video", "portrait"),
    ],
  },
  {
    id: "photo-short",
    title: "摄影短视频",
    summary: "摄影账号人物短视频内容。",
    media: shortVideos.filter((video) => video.ossObjectKey.includes("摄影账号")),
  },
];

const portfolioCategoryPages = [
  {
    id: "self-media",
    title: "自媒体",
    summary: "账号短视频、个人账号爆款、婚礼 IP 和垂直领域内容。",
  },
  {
    id: "short-drama",
    title: "短剧",
    summary: "短剧制片统筹、现场执行、摄影和后期剪辑。",
  },
  {
    id: "event",
    title: "活动",
    summary: "复古市集策划执行、现场拍摄、活动照片和活动成片。",
  },
  {
    id: "wedding",
    title: "婚礼",
    summary: "婚礼执行、婚礼快剪、婚礼自媒体和老板 IP 内容。",
  },
  {
    id: "food",
    title: "探店",
    summary: "建行生活美食探店，覆盖脚本、拍摄和剪辑交付。",
  },
  {
    id: "graduation",
    title: "毕业季",
    summary: "幼儿园和班级毕业季活动记录、人物素材和成片交付。",
  },
  {
    id: "portrait",
    title: "写真",
    summary: "个人照片、人像写真、生活方式照片和后期选片。",
  },
];

function setInitialAssets() {
  document.querySelectorAll("[data-oss-key]").forEach((node) => {
    const key = node.getAttribute("data-oss-key");
    if (key) node.src = ossUrl(key);
  });

  const ogImage = document.createElement("meta");
  ogImage.setAttribute("property", "og:image");
  ogImage.setAttribute("content", personalImages[0].ossUrl);
  document.head.appendChild(ogImage);
}

function uniqueMedia(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (!item || seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function projectsForCategory(category) {
  return projects.filter((project) => project.category === category);
}

function mediaForCategory(category) {
  const projectMedia = projectsForCategory(category).flatMap((project) => project.media ?? []);
  if (category === "wedding") return projectMedia.slice(0, 1);
  if (category === "event") return uniqueMedia([...projectMedia.slice(0, 2), ...activityAccountScreenshots]);

  const extraMedia = {
    "self-media": selfMediaGroups.flatMap((group) => group.media),
    portrait: photographyWall,
  }[category] ?? [];

  return uniqueMedia([...projectMedia, ...extraMedia]);
}

function coverForCategory(category) {
  const categoryProjects = projectsForCategory(category);
  const media = mediaForCategory(category);
  return categoryProjects.find((project) => project.cover)?.cover ?? media.find((item) => item.type === "image") ?? media[0] ?? null;
}

function renderPortfolioCategories() {
  const jumpBar = document.querySelector("#category-jump-bar");
  const grid = document.querySelector("#works-grid");
  grid.classList.add("category-grid");

  if (jumpBar) {
    jumpBar.innerHTML = portfolioCategoryPages
      .map(
        (category) => `
          <button class="filter-button" type="button" data-category-page-link="${category.id}">
            ${escapeHtml(category.title)}
          </button>
        `,
      )
      .join("");

    jumpBar.querySelectorAll("[data-category-page-link]").forEach((button) => {
      button.addEventListener("click", () => openCategoryPage(button.dataset.categoryPageLink));
    });
  }

  grid.innerHTML = portfolioCategoryPages
    .map((category, index) => renderCategoryCard(category, index))
    .join("");

  grid.querySelectorAll("[data-category-page]").forEach((card) => {
    bindCardActivation(card, () => openCategoryPage(card.dataset.categoryPage));
  });
  setupPreviewPlayback(grid);
  observeReveals(grid);
}

function renderCategoryCard(category, index) {
  const categoryProjects = projectsForCategory(category.id);
  const categoryMedia = mediaForCategory(category.id);
  const previewMedia = coverForCategory(category.id);
  const videoCount = categoryMedia.filter((item) => item.type === "video").length;
  const imageCount = categoryMedia.filter((item) => item.type === "image").length;

  return `
    <article class="work-card category-card category-${category.id} reveal" role="button" tabindex="0" data-category-page="${category.id}">
      <span class="work-media">
        <span class="category-preview-single">
          ${renderCategoryPreviewTile(previewMedia) || `<span class="visual-placeholder">${escapeHtml(category.title)}</span>`}
        </span>
      </span>
      <span class="work-content">
        <span class="work-category">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <span>${categoryMedia.length} MEDIA</span>
        </span>
        <h3>${escapeHtml(category.title)}</h3>
        <p>${escapeHtml(category.summary)}</p>
        <span class="mini-metrics">
          <span>${categoryProjects.length} 项项目</span>
          <span>${videoCount} 支视频</span>
          <span>${imageCount} 张图片</span>
        </span>
      </span>
    </article>
  `;
}

function renderCategoryPreviewTile(item) {
  if (!item) return "";
  if (item.type === "image") {
    return `<span class="category-preview-tile"><img src="${item.ossUrl}" alt="${escapeHtml(item.title)}" loading="lazy" /></span>`;
  }
  if (item.type === "video") {
    return `
      <span class="category-preview-tile">
        <video class="preview-video" src="${item.ossUrl}#t=0.1" muted playsinline preload="metadata" aria-label="${escapeHtml(item.title)}"></video>
      </span>
    `;
  }
  return `<span class="category-preview-tile category-preview-file">${escapeHtml(item.title)}</span>`;
}

function renderProjectCard(project) {
  const cover = project.cover;
  const previewVideo = project.media.find((item) => item.type === "video");
  const mediaMarkup = renderPreviewMedia({ cover, previewVideo, title: project.title });
  const metrics = project.metrics?.map((metric) => `<span>${escapeHtml(metric.value)} ${escapeHtml(metric.label)}</span>`).join("") ?? "";

  return `
    <article class="work-card reveal" role="button" tabindex="0" data-project-id="${project.id}">
      <span class="work-media">
        ${mediaMarkup}
      </span>
      <span class="work-content">
        <span class="work-category">
          <span>${categoryLabels[project.category]}</span>
          <span>${project.media.length} MEDIA</span>
        </span>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary)}</p>
        <span class="mini-metrics">${metrics}</span>
      </span>
    </article>
  `;
}

function renderPreviewMedia({ cover, previewVideo, title }) {
  if (cover) {
    return `<img src="${cover.ossUrl}" alt="${escapeHtml(cover.title)}" loading="lazy" />`;
  }

  if (previewVideo) {
    return `
      <video
        class="preview-video"
        src="${previewVideo.ossUrl}#t=0.1"
        muted
        playsinline
        preload="metadata"
        aria-label="${escapeHtml(previewVideo.title)}"
      ></video>
      <span class="preview-badge">VIDEO</span>
    `;
  }

  return `<span class="visual-placeholder">${escapeHtml(title)}</span>`;
}

function renderTimeline() {
  const list = document.querySelector("#timeline-list");
  if (!list) return;
  list.innerHTML = timelineItems
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <time>${escapeHtml(item.period)}</time>
          <div class="timeline-content">
            <div>
              <h3>${escapeHtml(item.title)}</h3>
              <div class="timeline-role">${escapeHtml(item.role)} / ${escapeHtml(item.location)}</div>
              <ul>
                ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
              </ul>
            </div>
            <div class="timeline-stat">
              ${item.stats.map((stat) => `<span>${escapeHtml(stat)}</span>`).join("")}
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderCases() {
  const stack = document.querySelector("#case-stack");
  if (!stack) return;
  const caseProjects = projects.slice(0, 6);
  stack.innerHTML = caseProjects
    .map(
      (project, index) => `
        <article class="case-card reveal">
          <div class="case-number">${String(index + 1).padStart(2, "0")}</div>
          <div>
            <p class="eyebrow">${escapeHtml(project.company ?? "个人项目")} / ${escapeHtml(project.period ?? "")}</p>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.summary)}</p>
            <ul>
              ${project.highlights.slice(0, 4).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </div>
          <div class="case-meta">
            ${project.roles.slice(0, 5).map((role) => `<span>${escapeHtml(role)}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderGalleryFilters() {
  const filters = document.querySelector("#gallery-filters");
  if (!filters) return;
  const groups = ["all", "portrait", "event", "personal", "cafe"];

  filters.innerHTML = groups
    .map(
      (group, index) => `
        <button class="filter-button ${index === 0 ? "is-active" : ""}" type="button" data-gallery-filter="${group}" aria-pressed="${index === 0}">
          ${galleryLabels[group]}
        </button>
      `,
    )
    .join("");

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gallery-filter]");
    if (!button) return;
    filters.querySelectorAll(".filter-button").forEach((item) => {
      item.classList.toggle("is-active", item === button);
      item.setAttribute("aria-pressed", String(item === button));
    });
    renderGallery(button.dataset.galleryFilter);
  });
}

let currentGallery = [];
let currentLightboxIndex = 0;

function renderGallery(filter = "all") {
  const wall = document.querySelector("#photo-wall");
  if (!wall) return;
  currentGallery = filter === "all" ? gallery : gallery.filter((item) => item.group === filter);
  wall.innerHTML = currentGallery
    .map(
      (item, index) => `
        <article class="photo-card reveal" role="button" tabindex="0" data-gallery-index="${index}">
          <figure>
            <img
              src="${item.ossUrl}"
              alt="${escapeHtml(item.title)}"
              loading="lazy"
              style="--ratio: ${ratioFor(item.orientation)}"
            />
            <figcaption>
              <span>${escapeHtml(item.title)}</span>
              <span>${galleryLabels[item.group]}</span>
            </figcaption>
          </figure>
        </article>
      `,
    )
    .join("");

  wall.querySelectorAll("[data-gallery-index]").forEach((button) => {
    bindCardActivation(button, () => openLightbox(Number(button.dataset.galleryIndex)));
  });
  observeReveals(wall);
}

function renderShorts() {
  const grid = document.querySelector("#shorts-grid");
  if (!grid) return;
  grid.innerHTML = shortVideos
    .map(
      (video, index) => `
        <article class="short-card ${video.orientation === "landscape" ? "is-landscape" : ""} reveal" role="button" tabindex="0" data-short-index="${index}">
          <span class="short-card-media">
            <video
              class="preview-video"
              src="${video.ossUrl}#t=0.1"
              muted
              playsinline
              preload="metadata"
              aria-label="${escapeHtml(video.title)}"
            ></video>
            <span>PLAY</span>
          </span>
          <span class="short-card-content">
            <h3>${escapeHtml(video.title)}</h3>
            <p>${video.orientation === "portrait" ? "竖屏内容" : "横屏成片"} / ${index < 10 ? "纹发账号" : index < 14 ? "摄影账号" : "品牌账号"}</p>
          </span>
        </article>
      `,
    )
    .join("");

  grid.querySelectorAll("[data-short-index]").forEach((button) => {
    bindCardActivation(button, () => openShort(Number(button.dataset.shortIndex)));
  });
  setupPreviewPlayback(grid);
}

function openGalleryCollection() {
  const groupSummary = gallery.reduce((summary, item) => {
    summary[item.group] = (summary[item.group] ?? 0) + 1;
    return summary;
  }, {});
  currentGallery = gallery;

  openModal(`
    <div class="modal-title">
      <p class="eyebrow">PHOTOGRAPHY / ${gallery.length} IMAGES</p>
      <h2 id="modal-title">摄影作品墙</h2>
      <p>个人照片、写真作品、活动照片和生活方式照片。</p>
      <div class="collection-summary">
        ${Object.entries(groupSummary)
          .map(([group, count]) => `<span>${escapeHtml(galleryLabels[group])} ${count}</span>`)
          .join("")}
      </div>
    </div>
    <div class="modal-media collection-modal-grid">
      ${gallery.map(renderMediaItem).join("")}
    </div>
  `);
}

function openShortsCollection() {
  const portraitCount = shortVideos.filter((video) => video.orientation === "portrait").length;
  const landscapeCount = shortVideos.length - portraitCount;

  openModal(`
    <div class="modal-title">
      <p class="eyebrow">VERTICAL VIDEO / ${shortVideos.length} VIDEOS</p>
      <h2 id="modal-title">短视频与账号内容</h2>
      <p>纹发账号、摄影账号、婚礼账号和活动账号案例。</p>
      <div class="collection-summary">
        <span>竖屏 ${portraitCount}</span>
        <span>横屏 ${landscapeCount}</span>
        <span>全部可播放</span>
      </div>
    </div>
    <div class="modal-media collection-modal-grid">
      ${shortVideos.map(renderMediaItem).join("")}
    </div>
  `);
}

function openCollection(collectionId) {
  if (collectionId === "gallery") openGalleryCollection();
  if (collectionId === "shorts") openShortsCollection();
}

function openCategoryPage(categoryId) {
  const category = portfolioCategoryPages.find((item) => item.id === categoryId);
  if (!category) return;

  const categoryProjects = projectsForCategory(categoryId);
  const categoryMedia = mediaForCategory(categoryId);
  const videoCount = categoryMedia.filter((item) => item.type === "video").length;
  const imageCount = categoryMedia.filter((item) => item.type === "image").length;
  const categoryContent =
    categoryId === "self-media"
      ? `
        <div class="self-media-group-grid">
          ${selfMediaGroups.map(renderSelfMediaGroupCard).join("")}
        </div>
      `
      : categoryId === "portrait"
        ? `
          <div class="portrait-photo-wall">
            ${categoryMedia.map(renderPhotoWallItem).join("")}
          </div>
        `
      : `
        <div class="category-project-list">
          ${categoryProjects.map(renderCategoryProjectSummary).join("")}
        </div>
        <div class="modal-section">
          <h3>视频与图片素材</h3>
          <div class="modal-media category-modal-grid">
            ${categoryMedia.map(renderMediaItem).join("")}
          </div>
        </div>
      `;

  openModal(`
    <div class="modal-title">
      <p class="eyebrow">PORTFOLIO / ${escapeHtml(category.title)}</p>
      <h2 id="modal-title">${escapeHtml(category.title)}</h2>
      <p>${escapeHtml(category.summary)}</p>
      <div class="collection-summary">
        <span>${categoryProjects.length} 项项目</span>
        <span>${videoCount} 支视频</span>
        <span>${imageCount} 张图片</span>
        <span>${categoryMedia.length} 个素材</span>
      </div>
    </div>
    <div class="category-page-layout">
      ${categoryContent}
    </div>
  `);

  if (categoryId === "self-media") {
    modalBody.querySelectorAll("[data-self-media-group]").forEach((card) => {
      bindCardActivation(card, () => openSelfMediaGroup(card.dataset.selfMediaGroup));
    });
    setupPreviewPlayback(modalBody);
  }

  if (categoryId === "portrait") {
    currentGallery = categoryMedia;
    modalBody.querySelectorAll("[data-photo-index]").forEach((card) => {
      bindCardActivation(card, () => openLightbox(Number(card.dataset.photoIndex)));
    });
  }
}

function renderCategoryProjectSummary(project) {
  return `
    <article class="category-project-summary">
      <p class="eyebrow">${escapeHtml(project.company ?? "个人项目")} / ${escapeHtml(project.period ?? "")}</p>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.summary)}</p>
      <div class="mini-metrics">
        ${(project.metrics ?? []).map((metric) => `<span>${escapeHtml(metric.value)} ${escapeHtml(metric.label)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderSelfMediaGroupCard(group) {
  const previewMedia = group.media[0];
  const videoCount = group.media.filter((item) => item.type === "video").length;

  return `
    <article class="work-card category-card self-media-group-card" role="button" tabindex="0" data-self-media-group="${group.id}">
      <span class="work-media">
        <span class="category-preview-single">
          ${renderCategoryPreviewTile(previewMedia) || `<span class="visual-placeholder">${escapeHtml(group.title)}</span>`}
        </span>
      </span>
      <span class="work-content">
        <span class="work-category">
          <span>短视频</span>
          <span>${group.media.length} MEDIA</span>
        </span>
        <h3>${escapeHtml(group.title)}</h3>
        <p>${escapeHtml(group.summary)}</p>
        <span class="mini-metrics">
          <span>${videoCount} 支视频</span>
        </span>
      </span>
    </article>
  `;
}

function renderPhotoWallItem(item, index) {
  return `
    <article class="photo-wall-item" role="button" tabindex="0" data-photo-index="${index}">
      <img src="${item.ossUrl}" alt="${escapeHtml(item.title)}" loading="lazy" />
    </article>
  `;
}

function openSelfMediaGroup(groupId) {
  const group = selfMediaGroups.find((item) => item.id === groupId);
  if (!group) return;

  openModal(`
    <div class="modal-title">
      <p class="eyebrow">SELF MEDIA / ${group.media.length} VIDEOS</p>
      <h2 id="modal-title">${escapeHtml(group.title)}</h2>
      <p>${escapeHtml(group.summary)}</p>
    </div>
    <div class="modal-media short-video-wall">
      ${group.media.map((item) => renderMediaItem({ ...item, orientation: "portrait" })).join("")}
    </div>
  `);
}

function bindCardActivation(element, callback) {
  element.addEventListener("click", callback);
  element.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    callback();
  });
}

function setupPreviewPlayback(root) {
  root.querySelectorAll(".preview-video").forEach((video) => {
    const card = video.closest(".work-card, .short-card");
    if (!card) return;

    const playPreview = () => {
      document.querySelectorAll(".preview-video").forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.pause();
          try {
            otherVideo.currentTime = 0.1;
          } catch {}
        }
      });
      video.play().catch(() => {});
    };

    const pausePreview = () => {
      video.pause();
      try {
        if (Number.isFinite(video.duration)) video.currentTime = 0.1;
      } catch {}
    };

    card.addEventListener("pointerenter", playPreview);
    card.addEventListener("focusin", playPreview);
    card.addEventListener("pointerleave", pausePreview);
    card.addEventListener("focusout", pausePreview);
  });
}

function openProject(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  openModal(`
    <div class="modal-title">
      <p class="eyebrow">${escapeHtml(project.company ?? "个人项目")} / ${escapeHtml(project.period ?? "")} / ${escapeHtml(project.location ?? "")}</p>
      <h2 id="modal-title">${escapeHtml(project.title)}</h2>
      <p>${escapeHtml(project.summary)}</p>
      <div class="mini-metrics">
        ${(project.metrics ?? []).map((metric) => `<span>${escapeHtml(metric.value)} ${escapeHtml(metric.label)}</span>`).join("")}
      </div>
    </div>
    <div class="modal-columns">
      <div class="modal-section">
        <h3>关键工作</h3>
        <ul>
          ${project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
      <div class="modal-section">
        <h3>角色</h3>
        <ul>
          ${project.roles.map((role) => `<li>${escapeHtml(role)}</li>`).join("")}
        </ul>
      </div>
    </div>
    <div class="modal-section" style="margin-top: var(--space-4);">
      <h3>代表媒体</h3>
      <div class="modal-media">
        ${project.media.map(renderMediaItem).join("")}
      </div>
    </div>
  `);
}

function openShort(index) {
  const video = shortVideos[index];
  if (!video) return;
  openModal(`
    <div class="modal-title">
      <p class="eyebrow">VERTICAL VIDEO / SELF MEDIA</p>
      <h2 id="modal-title">${escapeHtml(video.title)}</h2>
      <p>短视频案例，展示选题、拍摄和剪辑。</p>
    </div>
    <div class="modal-media">
      ${renderMediaItem(video)}
    </div>
  `);
}

function renderMediaItem(item) {
  const ratio = ratioFor(item.orientation);
  if (item.type === "image") {
    return `
      <figure class="media-item">
        <img src="${item.ossUrl}" alt="${escapeHtml(item.title)}" loading="lazy" style="--ratio: ${ratio}" />
        <figcaption class="asset-label">${escapeHtml(item.title)}</figcaption>
      </figure>
    `;
  }

  if (item.type === "video") {
    return `
      <figure class="media-item">
        <video src="${item.ossUrl}" controls playsinline preload="metadata" style="--ratio: ${ratio}"></video>
        <figcaption class="asset-label">${escapeHtml(item.title)}</figcaption>
      </figure>
    `;
  }

  return `
    <figure class="media-item">
      <a href="${item.ossUrl}" target="_blank" rel="noreferrer">
        <span>打开 ${escapeHtml(item.title)}</span>
      </a>
      <figcaption class="asset-label">${escapeHtml(item.title)}</figcaption>
    </figure>
  `;
}

const modal = document.querySelector("#project-modal");
const modalBody = document.querySelector("#modal-body");
let lastFocusedElement = null;

function openModal(markup) {
  lastFocusedElement = document.activeElement;
  modalBody.innerHTML = markup;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();

  modal.querySelectorAll("video").forEach((video) => {
    video.addEventListener("play", () => {
      document.querySelectorAll("video").forEach((otherVideo) => {
        if (otherVideo !== video) otherVideo.pause();
      });
    });
  });
}

function closeModal() {
  modal.querySelectorAll("video").forEach((video) => video.pause());
  modal.hidden = true;
  modalBody.innerHTML = "";
  document.body.classList.remove("modal-open");
  if (lastFocusedElement?.focus) lastFocusedElement.focus();
}

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightbox();
  document.querySelector("#lightbox").hidden = false;
  document.body.classList.add("modal-open");
  document.querySelector("[data-close-lightbox]").focus();
}

function updateLightbox() {
  const item = currentGallery[currentLightboxIndex];
  if (!item) return;
  const lightbox = document.querySelector("#lightbox");
  const image = lightbox.querySelector("img");
  const caption = lightbox.querySelector("figcaption");
  image.src = item.ossUrl;
  image.alt = item.title;
  caption.textContent = `${item.title} / ${galleryLabels[item.group]}`;
}

function closeLightbox() {
  const lightbox = document.querySelector("#lightbox");
  lightbox.hidden = true;
  lightbox.querySelector("img").removeAttribute("src");
  document.body.classList.remove("modal-open");
}

function moveLightbox(direction) {
  if (!currentGallery.length) return;
  currentLightboxIndex = (currentLightboxIndex + direction + currentGallery.length) % currentGallery.length;
  updateLightbox();
}

document.querySelector("[data-close-lightbox]").addEventListener("click", closeLightbox);
document.querySelector("[data-lightbox-prev]").addEventListener("click", () => moveLightbox(-1));
document.querySelector("[data-lightbox-next]").addEventListener("click", () => moveLightbox(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!modal.hidden) closeModal();
    if (!document.querySelector("#lightbox").hidden) closeLightbox();
  }

  if (!document.querySelector("#lightbox").hidden) {
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
  }
});

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });

  const navLinks = [...nav.querySelectorAll("a")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-42% 0px -50% 0px", threshold: 0 },
  );

  sections.forEach((section) => navObserver.observe(section));
}

let revealObserver;

function setupReveals() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  observeReveals(document);
}

function observeReveals(root) {
  if (!revealObserver) return;
  root.querySelectorAll(".reveal:not(.is-visible)").forEach((node, index) => {
    if (!node.style.getPropertyValue("--delay")) {
      node.style.setProperty("--delay", `${Math.min(index * 28, 180)}ms`);
    }
    revealObserver.observe(node);
  });
}

function setupCopy() {
  const toast = document.querySelector("#toast");
  let toastTimeout;
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.dataset.copy;
      try {
        await navigator.clipboard.writeText(value);
        toast.textContent = "邮箱已复制";
      } catch {
        toast.textContent = value;
      }
      toast.classList.add("is-visible");
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 1800);
    });
  });
}

function setupBrokenMediaFallback() {
  document.addEventListener(
    "error",
    (event) => {
      const target = event.target;
      if (target.tagName !== "IMG") return;
      const wrapper = target.closest(".work-media, .photo-card, .media-item, .hero-figure");
      if (!wrapper) return;
      target.style.display = "none";
      if (!wrapper.querySelector(".visual-placeholder")) {
        const placeholder = document.createElement("span");
        placeholder.className = "visual-placeholder";
        placeholder.textContent = target.alt || "MEDIA";
        wrapper.appendChild(placeholder);
      }
    },
    true,
  );
}

function init() {
  setInitialAssets();
  renderPortfolioCategories();
  renderTimeline();
  renderCases();
  setupNavigation();
  setupReveals();
  setupCopy();
  setupBrokenMediaFallback();
}

init();
