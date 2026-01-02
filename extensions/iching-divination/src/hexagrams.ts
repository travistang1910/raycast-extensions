export interface Hexagram {
  number: number;
  name: string;
  pinyin: string;
  meaning: string;
  description: {
    "zh-HK": string;
    en: string;
  };
}

export const hexagrams: Hexagram[] = [
  {
    number: 1,
    name: "乾",
    pinyin: "Qián",
    meaning: "天",
    description: {
      "zh-HK": "創造、剛健、自強不息",
      en: "The Creative, Strength, Perseverance",
    },
  },
  {
    number: 2,
    name: "坤",
    pinyin: "Kūn",
    meaning: "地",
    description: {
      "zh-HK": "順從、柔順、厚德載物",
      en: "The Receptive, Devotion, Nurturing",
    },
  },
  {
    number: 3,
    name: "屯",
    pinyin: "Zhūn",
    meaning: "水雷",
    description: {
      "zh-HK": "初生、困難、需要堅持",
      en: "Difficulty at the Beginning, Perseverance needed",
    },
  },
  {
    number: 4,
    name: "蒙",
    pinyin: "Méng",
    meaning: "山水",
    description: {
      "zh-HK": "啟蒙、教育、需要學習",
      en: "Youthful Folly, Education, Learning required",
    },
  },
  {
    number: 5,
    name: "需",
    pinyin: "Xū",
    meaning: "水天",
    description: {
      "zh-HK": "等待、耐心、時機未到",
      en: "Waiting, Patience, Timing not yet right",
    },
  },
  {
    number: 6,
    name: "訟",
    pinyin: "Sòng",
    meaning: "天水",
    description: {
      "zh-HK": "爭訟、衝突、需要調解",
      en: "Conflict, Dispute, Mediation needed",
    },
  },
  {
    number: 7,
    name: "師",
    pinyin: "Shī",
    meaning: "地水",
    description: {
      "zh-HK": "軍隊、紀律、需要組織",
      en: "The Army, Discipline, Organization needed",
    },
  },
  {
    number: 8,
    name: "比",
    pinyin: "Bǐ",
    meaning: "水地",
    description: {
      "zh-HK": "親近、團結、互相幫助",
      en: "Union, Solidarity, Mutual support",
    },
  },
  {
    number: 9,
    name: "小畜",
    pinyin: "Xiǎo Xù",
    meaning: "風天",
    description: {
      "zh-HK": "小積蓄、需要節制",
      en: "Small Accumulation, Moderation needed",
    },
  },
  {
    number: 10,
    name: "履",
    pinyin: "Lǚ",
    meaning: "天澤",
    description: {
      "zh-HK": "履行、實踐、小心謹慎",
      en: "Treading, Practice, Caution required",
    },
  },
  {
    number: 11,
    name: "泰",
    pinyin: "Tài",
    meaning: "天地",
    description: {
      "zh-HK": "通泰、順利、和諧",
      en: "Peace, Smoothness, Harmony",
    },
  },
  {
    number: 12,
    name: "否",
    pinyin: "Pǐ",
    meaning: "地天",
    description: {
      "zh-HK": "閉塞、不順、需要改變",
      en: "Standstill, Obstruction, Change needed",
    },
  },
  {
    number: 13,
    name: "同人",
    pinyin: "Tóng Rén",
    meaning: "天火",
    description: {
      "zh-HK": "團結、合作、共同目標",
      en: "Fellowship, Cooperation, Common goals",
    },
  },
  {
    number: 14,
    name: "大有",
    pinyin: "Dà Yǒu",
    meaning: "火天",
    description: {
      "zh-HK": "大有、豐收、成功",
      en: "Great Possession, Abundance, Success",
    },
  },
  {
    number: 15,
    name: "謙",
    pinyin: "Qiān",
    meaning: "地山",
    description: {
      "zh-HK": "謙遜、低調、保持謙虛",
      en: "Modesty, Humility, Stay humble",
    },
  },
  {
    number: 16,
    name: "豫",
    pinyin: "Yù",
    meaning: "雷地",
    description: {
      "zh-HK": "愉悅、準備、積極行動",
      en: "Enthusiasm, Preparation, Active action",
    },
  },
  {
    number: 17,
    name: "隨",
    pinyin: "Suí",
    meaning: "澤雷",
    description: {
      "zh-HK": "隨從、順應、靈活變通",
      en: "Following, Adaptation, Flexibility",
    },
  },
  {
    number: 18,
    name: "蠱",
    pinyin: "Gǔ",
    meaning: "山風",
    description: {
      "zh-HK": "腐敗、整頓、需要改革",
      en: "Decay, Reform, Restructuring needed",
    },
  },
  {
    number: 19,
    name: "臨",
    pinyin: "Lín",
    meaning: "地澤",
    description: {
      "zh-HK": "降臨、監督、需要關注",
      en: "Approach, Oversight, Attention needed",
    },
  },
  {
    number: 20,
    name: "觀",
    pinyin: "Guān",
    meaning: "風地",
    description: {
      "zh-HK": "觀察、審視、需要思考",
      en: "Contemplation, Observation, Reflection needed",
    },
  },
  {
    number: 21,
    name: "噬嗑",
    pinyin: "Shì Kè",
    meaning: "火雷",
    description: {
      "zh-HK": "咬合、解決、需要果斷",
      en: "Biting Through, Resolution, Decisiveness needed",
    },
  },
  {
    number: 22,
    name: "賁",
    pinyin: "Bì",
    meaning: "山火",
    description: {
      "zh-HK": "裝飾、美化、注重外表",
      en: "Grace, Adornment, Focus on appearance",
    },
  },
  {
    number: 23,
    name: "剝",
    pinyin: "Bō",
    meaning: "山地",
    description: {
      "zh-HK": "剝落、衰落、需要保護",
      en: "Splitting Apart, Decline, Protection needed",
    },
  },
  {
    number: 24,
    name: "復",
    pinyin: "Fù",
    meaning: "地雷",
    description: {
      "zh-HK": "復歸、恢復、重新開始",
      en: "Return, Recovery, New beginning",
    },
  },
  {
    number: 25,
    name: "無妄",
    pinyin: "Wú Wàng",
    meaning: "天雷",
    description: {
      "zh-HK": "無妄、真實、不要妄想",
      en: "Innocence, Truth, Avoid delusion",
    },
  },
  {
    number: 26,
    name: "大畜",
    pinyin: "Dà Xù",
    meaning: "山天",
    description: {
      "zh-HK": "大積蓄、需要儲備",
      en: "Great Accumulation, Reserve needed",
    },
  },
  {
    number: 27,
    name: "頤",
    pinyin: "Yí",
    meaning: "山雷",
    description: {
      "zh-HK": "頤養、修養、需要保養",
      en: "Nourishment, Cultivation, Maintenance needed",
    },
  },
  {
    number: 28,
    name: "大過",
    pinyin: "Dà Guò",
    meaning: "澤風",
    description: {
      "zh-HK": "大過、過度、需要調整",
      en: "Great Exceeding, Excess, Adjustment needed",
    },
  },
  {
    number: 29,
    name: "坎",
    pinyin: "Kǎn",
    meaning: "水",
    description: {
      "zh-HK": "險陷、困難、需要謹慎",
      en: "The Abysmal Water, Danger, Caution needed",
    },
  },
  {
    number: 30,
    name: "離",
    pinyin: "Lí",
    meaning: "火",
    description: {
      "zh-HK": "附麗、光明、需要依附",
      en: "The Clinging Fire, Clarity, Attachment needed",
    },
  },
  {
    number: 31,
    name: "咸",
    pinyin: "Xián",
    meaning: "澤山",
    description: {
      "zh-HK": "感應、互動、需要溝通",
      en: "Influence, Interaction, Communication needed",
    },
  },
  {
    number: 32,
    name: "恆",
    pinyin: "Héng",
    meaning: "雷風",
    description: {
      "zh-HK": "恆久、持久、需要堅持",
      en: "Duration, Persistence, Perseverance needed",
    },
  },
  {
    number: 33,
    name: "遯",
    pinyin: "Dùn",
    meaning: "天山",
    description: {
      "zh-HK": "退避、隱退、需要等待",
      en: "Retreat, Withdrawal, Waiting needed",
    },
  },
  {
    number: 34,
    name: "大壯",
    pinyin: "Dà Zhuàng",
    meaning: "雷天",
    description: {
      "zh-HK": "大壯、強盛、需要節制",
      en: "Great Power, Strength, Moderation needed",
    },
  },
  {
    number: 35,
    name: "晉",
    pinyin: "Jìn",
    meaning: "火地",
    description: {
      "zh-HK": "前進、晉升、積極向上",
      en: "Progress, Advancement, Positive upward movement",
    },
  },
  {
    number: 36,
    name: "明夷",
    pinyin: "Míng Yí",
    meaning: "地火",
    description: {
      "zh-HK": "明夷、受傷、需要隱忍",
      en: "Darkening of the Light, Injury, Endurance needed",
    },
  },
  {
    number: 37,
    name: "家人",
    pinyin: "Jiā Rén",
    meaning: "風火",
    description: {
      "zh-HK": "家人、家庭、注重和諧",
      en: "The Family, Household, Focus on harmony",
    },
  },
  {
    number: 38,
    name: "睽",
    pinyin: "Kuí",
    meaning: "火澤",
    description: {
      "zh-HK": "睽違、分歧、需要協調",
      en: "Opposition, Divergence, Coordination needed",
    },
  },
  {
    number: 39,
    name: "蹇",
    pinyin: "Jiǎn",
    meaning: "水山",
    description: {
      "zh-HK": "困難、阻礙、需要耐心",
      en: "Obstruction, Difficulty, Patience needed",
    },
  },
  {
    number: 40,
    name: "解",
    pinyin: "Jiě",
    meaning: "雷水",
    description: {
      "zh-HK": "解脫、解決、困難消除",
      en: "Deliverance, Resolution, Difficulties removed",
    },
  },
  {
    number: 41,
    name: "損",
    pinyin: "Sǔn",
    meaning: "山澤",
    description: {
      "zh-HK": "減損、損失、需要節制",
      en: "Decrease, Loss, Moderation needed",
    },
  },
  {
    number: 42,
    name: "益",
    pinyin: "Yì",
    meaning: "風雷",
    description: {
      "zh-HK": "增益、增加、有利發展",
      en: "Increase, Gain, Favorable development",
    },
  },
  {
    number: 43,
    name: "夬",
    pinyin: "Guài",
    meaning: "澤天",
    description: {
      "zh-HK": "決斷、果斷、需要決定",
      en: "Breakthrough, Decisiveness, Decision needed",
    },
  },
  {
    number: 44,
    name: "姤",
    pinyin: "Gòu",
    meaning: "天風",
    description: {
      "zh-HK": "相遇、邂逅、新的開始",
      en: "Coming to Meet, Encounter, New beginning",
    },
  },
  {
    number: 45,
    name: "萃",
    pinyin: "Cuì",
    meaning: "澤地",
    description: {
      "zh-HK": "聚集、匯聚、需要團結",
      en: "Gathering Together, Convergence, Unity needed",
    },
  },
  {
    number: 46,
    name: "升",
    pinyin: "Shēng",
    meaning: "地風",
    description: {
      "zh-HK": "上升、提升、持續進步",
      en: "Pushing Upward, Ascension, Continuous progress",
    },
  },
  {
    number: 47,
    name: "困",
    pinyin: "Kùn",
    meaning: "澤水",
    description: {
      "zh-HK": "困頓、困境、需要堅持",
      en: "Oppression, Exhaustion, Perseverance needed",
    },
  },
  {
    number: 48,
    name: "井",
    pinyin: "Jǐng",
    meaning: "水風",
    description: {
      "zh-HK": "水井、養育、需要修養",
      en: "The Well, Nourishment, Cultivation needed",
    },
  },
  {
    number: 49,
    name: "革",
    pinyin: "Gé",
    meaning: "澤火",
    description: {
      "zh-HK": "變革、改革、需要改變",
      en: "Revolution, Reform, Change needed",
    },
  },
  {
    number: 50,
    name: "鼎",
    pinyin: "Dǐng",
    meaning: "火風",
    description: {
      "zh-HK": "鼎器、穩定、需要鞏固",
      en: "The Cauldron, Stability, Consolidation needed",
    },
  },
  {
    number: 51,
    name: "震",
    pinyin: "Zhèn",
    meaning: "雷",
    description: {
      "zh-HK": "震動、驚動、需要警覺",
      en: "The Arousing Thunder, Shock, Alertness needed",
    },
  },
  {
    number: 52,
    name: "艮",
    pinyin: "Gèn",
    meaning: "山",
    description: {
      "zh-HK": "停止、靜止、需要止步",
      en: "Keeping Still, Mountain, Stop needed",
    },
  },
  {
    number: 53,
    name: "漸",
    pinyin: "Jiàn",
    meaning: "風山",
    description: {
      "zh-HK": "漸進、逐步、需要耐心",
      en: "Development, Gradual progress, Patience needed",
    },
  },
  {
    number: 54,
    name: "歸妹",
    pinyin: "Guī Mèi",
    meaning: "雷澤",
    description: {
      "zh-HK": "歸妹、出嫁、需要順應",
      en: "The Marrying Maiden, Marriage, Adaptation needed",
    },
  },
  {
    number: 55,
    name: "豐",
    pinyin: "Fēng",
    meaning: "雷火",
    description: {
      "zh-HK": "豐盛、盛大、需要保持",
      en: "Abundance, Greatness, Maintenance needed",
    },
  },
  {
    number: 56,
    name: "旅",
    pinyin: "Lǚ",
    meaning: "火山",
    description: {
      "zh-HK": "旅行、漂泊、需要適應",
      en: "The Wanderer, Travel, Adaptation needed",
    },
  },
  {
    number: 57,
    name: "巽",
    pinyin: "Xùn",
    meaning: "風",
    description: {
      "zh-HK": "順入、柔順、需要順從",
      en: "The Gentle Wind, Penetration, Submission needed",
    },
  },
  {
    number: 58,
    name: "兌",
    pinyin: "Duì",
    meaning: "澤",
    description: {
      "zh-HK": "喜悅、和悅、需要溝通",
      en: "The Joyous Lake, Joy, Communication needed",
    },
  },
  {
    number: 59,
    name: "渙",
    pinyin: "Huàn",
    meaning: "風水",
    description: {
      "zh-HK": "渙散、分散、需要凝聚",
      en: "Dispersion, Scattering, Cohesion needed",
    },
  },
  {
    number: 60,
    name: "節",
    pinyin: "Jié",
    meaning: "水澤",
    description: {
      "zh-HK": "節制、節約、需要控制",
      en: "Limitation, Restraint, Control needed",
    },
  },
  {
    number: 61,
    name: "中孚",
    pinyin: "Zhōng Fú",
    meaning: "風澤",
    description: {
      "zh-HK": "中孚、誠信、需要真誠",
      en: "Inner Truth, Sincerity, Authenticity needed",
    },
  },
  {
    number: 62,
    name: "小過",
    pinyin: "Xiǎo Guò",
    meaning: "雷山",
    description: {
      "zh-HK": "小過、小錯、需要謹慎",
      en: "Small Exceeding, Minor error, Caution needed",
    },
  },
  {
    number: 63,
    name: "既濟",
    pinyin: "Jì Jì",
    meaning: "水火",
    description: {
      "zh-HK": "既濟、完成、需要保持",
      en: "After Completion, Accomplishment, Maintenance needed",
    },
  },
  {
    number: 64,
    name: "未濟",
    pinyin: "Wèi Jì",
    meaning: "火水",
    description: {
      "zh-HK": "未濟、未完成、需要努力",
      en: "Before Completion, Incomplete, Effort needed",
    },
  },
];
