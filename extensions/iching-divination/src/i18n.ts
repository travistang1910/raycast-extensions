export type Language = "zh-HK" | "en";

export interface Translations {
  ui: {
    startDivination: string;
    throwCoins: string;
    reset: string;
    progress: string;
    generatedLines: string;
    operations: string;
    throwCoinsSubtitle: string;
    readyToStart: string;
    clickToStart: string;
    nthThrow: string;
    moreThrowsNeeded: string;
    completed: string;
    nthLine: string;
    changingLine: string;
    hexagram: string;
    pinyin: string;
    meaning: string;
    interpretation: string;
    advice: string;
    adviceText: string;
    changingLines: string;
    changingLinesText: string;
    searchPlaceholder: string;
    title: string;
    throwing: string;
  };
  lineTypes: {
    oldYang: string;
    youngYin: string;
    youngYang: string;
    oldYin: string;
  };
}

export const translations: Record<Language, Translations> = {
  "zh-HK": {
    ui: {
      startDivination: "開始占卜",
      throwCoins: "投擲硬幣",
      reset: "重新開始",
      progress: "占卜進度",
      generatedLines: "已生成的爻",
      operations: "操作",
      throwCoinsSubtitle: "按 Enter 或點擊此項進行下一次投擲",
      readyToStart: "準備開始占卜，請按 Enter 或點擊「開始占卜」",
      clickToStart: "開始占卜",
      nthThrow: "第 {n} 次投擲",
      moreThrowsNeeded: "還需要 {n} 次投擲",
      completed: "已完成",
      nthLine: "第 {n} 爻：{type}",
      changingLine: "(變爻)",
      hexagram: "卦",
      pinyin: "拼音",
      meaning: "卦象",
      interpretation: "解釋",
      advice: "建議",
      adviceText: "根據此卦的啟示，{description}。請仔細思考當前的處境，並採取適當的行動。",
      changingLines: "變爻",
      changingLinesText: "共有 {n} 個變爻，表示此卦有動態變化。",
      searchPlaceholder: "易經占卜",
      title: "易經占卜",
      throwing: "投擲中...",
    },
    lineTypes: {
      oldYang: "老陽",
      youngYin: "少陰",
      youngYang: "少陽",
      oldYin: "老陰",
    },
  },
  en: {
    ui: {
      startDivination: "Start Divination",
      throwCoins: "Throw Coins",
      reset: "Reset",
      progress: "Progress",
      generatedLines: "Generated Lines",
      operations: "Operations",
      throwCoinsSubtitle: "Press Enter or click to throw coins for the next line",
      readyToStart: "Ready to start divination. Press Enter or click 'Start Divination'",
      clickToStart: "Start Divination",
      nthThrow: "Throw {n}",
      moreThrowsNeeded: "{n} more throws needed",
      completed: "Completed",
      nthLine: "Line {n}: {type}",
      changingLine: "(Changing)",
      hexagram: "Hexagram",
      pinyin: "Pinyin",
      meaning: "Meaning",
      interpretation: "Interpretation",
      advice: "Advice",
      adviceText:
        "According to this hexagram, {description}. Please carefully consider your current situation and take appropriate action.",
      changingLines: "Changing Lines",
      changingLinesText: "There are {n} changing lines, indicating dynamic changes in this hexagram.",
      searchPlaceholder: "I Ching Divination",
      title: "I Ching Divination",
      throwing: "Throwing...",
    },
    lineTypes: {
      oldYang: "Old Yang",
      youngYin: "Young Yin",
      youngYang: "Young Yang",
      oldYin: "Old Yin",
    },
  },
};

// Helper function to replace placeholders
export function t(key: keyof Translations["ui"], lang: Language, params?: Record<string, string | number>): string {
  let text = translations[lang].ui[key];
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      text = text.replace(`{${k}}`, String(v));
    });
  }
  return text;
}
