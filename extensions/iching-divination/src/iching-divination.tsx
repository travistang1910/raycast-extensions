import { useState } from "react";
import { ActionPanel, Action, List, Detail, Icon, getPreferenceValues } from "@raycast/api";
import { hexagrams, Hexagram } from "./hexagrams";
import { Language, translations, t } from "./i18n";

// 爻的類型（支持多語言）
interface Line {
  value: number; // 0-3
  typeKey: "oldYang" | "youngYin" | "youngYang" | "oldYin";
  symbol: string;
  isChanging: boolean;
}

// 生成單一爻（三枚硬幣方法）
function generateLine(): Line {
  // 模擬三枚硬幣：0 = 反面（陰），1 = 正面（陽）
  const coin1 = Math.floor(Math.random() * 2);
  const coin2 = Math.floor(Math.random() * 2);
  const coin3 = Math.floor(Math.random() * 2);
  const sum = coin1 + coin2 + coin3;

  let typeKey: Line["typeKey"];
  let symbol: string;
  let isChanging: boolean;

  switch (sum) {
    case 3: // 三個陽 = 老陽（變爻）
      typeKey = "oldYang";
      symbol = "⚊";
      isChanging = true;
      break;
    case 2: // 兩陽一陰 = 少陰
      typeKey = "youngYin";
      symbol = "⚋";
      isChanging = false;
      break;
    case 1: // 一陽兩陰 = 少陽
      typeKey = "youngYang";
      symbol = "⚊";
      isChanging = false;
      break;
    case 0: // 三個陰 = 老陰（變爻）
      typeKey = "oldYin";
      symbol = "⚋";
      isChanging = true;
      break;
    default:
      typeKey = "youngYang";
      symbol = "⚊";
      isChanging = false;
  }

  return { value: sum, typeKey, symbol, isChanging };
}

// 易經64卦按照上下卦組合的標準排列
// 上卦（外卦）* 8 + 下卦（內卦）的計算方式
// 八卦順序：坤(0), 震(1), 坎(2), 兌(3), 艮(4), 離(5), 巽(6), 乾(7)

// 根據六爻計算卦象
function calculateHexagram(lines: Line[]): Hexagram | null {
  // 將六爻轉換為二進制（從下往上，第0爻是最下面）
  // 陽 = 1, 陰 = 0
  let lowerValue = 0; // 下卦（下三爻：0,1,2）
  let upperValue = 0; // 上卦（上三爻：3,4,5）

  // 下卦（從下往上：第0,1,2爻）
  for (let i = 0; i < 3; i++) {
    if (lines[i].symbol === "⚊") {
      lowerValue += Math.pow(2, i);
    }
  }

  // 上卦（從下往上：第3,4,5爻）
  for (let i = 3; i < 6; i++) {
    if (lines[i].symbol === "⚊") {
      upperValue += Math.pow(2, i - 3);
    }
  }

  // 易經64卦的標準計算方式
  const hexagramIndex = (upperValue * 8 + lowerValue) % 64;
  return hexagrams[hexagramIndex] || hexagrams[0];
}

export default function Command() {
  // 從偏好設置讀取默認語言
  const preferences = getPreferenceValues<{ language?: Language }>();
  const defaultLanguage: Language = (preferences.language as Language) || "en";

  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [lines, setLines] = useState<Line[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0); // 0-6, 0=未開始, 6=完成
  const [hexagram, setHexagram] = useState<Hexagram | null>(null);
  const [isThrowing, setIsThrowing] = useState<boolean>(false);

  const handleStart = () => {
    setLines([]);
    setCurrentStep(1);
    setHexagram(null);
  };

  const handleThrowCoins = async () => {
    if (currentStep <= 6 && !isThrowing) {
      setIsThrowing(true);

      // 模擬投擲硬幣的等待時間（1-1.5秒）
      const delay = 1000 + Math.random() * 500;
      await new Promise((resolve) => setTimeout(resolve, delay));

      const newLine = generateLine();
      const newLines = [...lines, newLine];
      setLines(newLines);

      if (currentStep === 6) {
        // 所有六爻都生成完畢，計算卦象
        const calculatedHexagram = calculateHexagram(newLines);
        setHexagram(calculatedHexagram);
      } else {
        setCurrentStep(currentStep + 1);
      }

      setIsThrowing(false);
    }
  };

  const handleReset = () => {
    setLines([]);
    setCurrentStep(0);
    setHexagram(null);
    setIsThrowing(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "zh-HK" ? "en" : "zh-HK");
  };

  // 顯示結果頁面
  if (hexagram && lines.length === 6) {
    const changingLines = lines.filter((line) => line.isChanging);
    const hexagramDisplay = lines
      .slice()
      .reverse()
      .map((line, index) => {
        const position = 6 - index;
        const lineType = translations[language].lineTypes[line.typeKey];
        const changingText = line.isChanging ? ` (${t("changingLine", language)})` : "";
        return `${line.symbol} ${t("nthLine", language, { n: position, type: lineType })}${changingText}`;
      })
      .join("\n");

    const markdown = `# ${t("hexagram", language)} ${hexagram.number}: ${hexagram.name}

**${t("pinyin", language)}:** ${hexagram.pinyin}  
**${t("meaning", language)}:** ${hexagram.meaning}

---

## ${language === "zh-HK" ? "本卦" : "Hexagram"}

\`\`\`
${hexagramDisplay}
\`\`\`

---

## ${t("interpretation", language)}

${hexagram.description[language]}

---

## ${t("advice", language)}

${t("adviceText", language, { description: hexagram.description[language] })}

${changingLines.length > 0 ? `\n**${t("changingLines", language)}:** ${t("changingLinesText", language, { n: changingLines.length })}` : ""}
`;

    return (
      <Detail
        markdown={markdown}
        actions={
          <ActionPanel>
            <Action
              title={t("reset", language)}
              icon={Icon.ArrowClockwise}
              onAction={handleReset}
              shortcut={{ modifiers: ["cmd"], key: "r" }}
            />
            <Action
              title={language === "zh-HK" ? "Switch to English" : "切換到繁體中文"}
              icon={Icon.Globe}
              onAction={toggleLanguage}
              shortcut={{ modifiers: ["cmd"], key: "l" }}
            />
          </ActionPanel>
        }
      />
    );
  }

  // 主界面：顯示抽卦過程
  return (
    <List
      isLoading={isThrowing}
      searchBarPlaceholder={t("searchPlaceholder", language)}
      actions={
        <ActionPanel>
          {currentStep === 0 && (
            <Action
              title={t("startDivination", language)}
              icon={Icon.Play}
              onAction={handleStart}
              shortcut={{ modifiers: [], key: "enter" }}
            />
          )}
          {currentStep > 0 && currentStep <= 6 && !isThrowing && (
            <Action
              title={t("throwCoins", language)}
              icon={Icon.ArrowRight}
              onAction={handleThrowCoins}
              shortcut={{ modifiers: [], key: "enter" }}
            />
          )}
          {currentStep > 0 && (
            <Action
              title={t("reset", language)}
              icon={Icon.ArrowClockwise}
              onAction={handleReset}
              shortcut={{ modifiers: ["cmd"], key: "r" }}
            />
          )}
          <Action
            title={language === "zh-HK" ? "Switch to English" : "切換到繁體中文"}
            icon={Icon.Globe}
            onAction={toggleLanguage}
            shortcut={{ modifiers: ["cmd"], key: "l" }}
          />
        </ActionPanel>
      }
    >
      {currentStep === 0 && (
        <List.EmptyView icon={Icon.Star} title={t("title", language)} description={t("readyToStart", language)} />
      )}

      {currentStep > 0 && (
        <>
          <List.Section title={t("progress", language)}>
            <List.Item
              title={isThrowing ? t("throwing", language) : t("nthThrow", language, { n: currentStep })}
              subtitle={
                isThrowing
                  ? language === "zh-HK"
                    ? "正在投擲硬幣，請稍候..."
                    : "Throwing coins, please wait..."
                  : currentStep <= 6
                    ? t("moreThrowsNeeded", language, { n: 7 - currentStep })
                    : t("completed", language)
              }
              icon={isThrowing ? Icon.Clock : Icon.Circle}
            />
          </List.Section>

          {lines.length > 0 && (
            <List.Section title={t("generatedLines", language)}>
              {lines.map((line, index) => {
                const lineType = translations[language].lineTypes[line.typeKey];
                return (
                  <List.Item
                    key={index}
                    title={t("nthLine", language, { n: index + 1, type: lineType })}
                    subtitle={`${line.symbol} ${line.isChanging ? `(${t("changingLine", language)})` : ""}`}
                    icon={line.isChanging ? Icon.Star : Icon.Circle}
                  />
                );
              })}
            </List.Section>
          )}

          {currentStep <= 6 && (
            <List.Section title={t("operations", language)}>
              <List.Item
                title={t("throwCoins", language)}
                subtitle={t("throwCoinsSubtitle", language)}
                icon={Icon.ArrowRight}
                actions={
                  <ActionPanel>
                    {!isThrowing && (
                      <Action
                        title={t("throwCoins", language)}
                        icon={Icon.ArrowRight}
                        onAction={handleThrowCoins}
                        shortcut={{ modifiers: [], key: "enter" }}
                      />
                    )}
                    <Action
                      title={t("reset", language)}
                      icon={Icon.ArrowClockwise}
                      onAction={handleReset}
                      shortcut={{ modifiers: ["cmd"], key: "r" }}
                    />
                    <Action
                      title={language === "zh-HK" ? "Switch to English" : "切換到繁體中文"}
                      icon={Icon.Globe}
                      onAction={toggleLanguage}
                      shortcut={{ modifiers: ["cmd"], key: "l" }}
                    />
                  </ActionPanel>
                }
              />
            </List.Section>
          )}
        </>
      )}
    </List>
  );
}
