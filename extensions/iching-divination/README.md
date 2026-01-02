# I Ching Divination

A Raycast extension for performing I Ching divination, providing random divination results and interpretations for all 64 hexagrams.

## Features

- Interactive hexagram drawing process: Step-by-step generation of six lines
- Three-coin method: Simulates the traditional I Ching divination method
- Complete 64 hexagrams data: Includes hexagram names, pinyin, symbols, and interpretations
- **Multi-language support**: Supports Traditional Chinese (Hong Kong) and English
- Language switching: Switch languages at runtime (shortcut: ⌘L)

## Usage

1. Type "易經占卜" or "I Ching Divination" in Raycast
2. Press Enter or click "Start Divination" to begin
3. Press Enter or click "Toss Coins" each time to generate one line (6 times total)
4. After completion, view the divination results, including:
   - Hexagram number and name
   - Hexagram symbols (e.g., Heaven, Earth, Water, Fire, etc.)
   - Display of the six lines
   - Hexagram interpretation and advice

## Language Settings

### Setting Default Language

1. Open Raycast Settings
2. Find the "I Ching Divination" extension
3. In the "Language" option, select your preferred language:
   - Traditional Chinese (Hong Kong)
   - English

### Switching Language at Runtime

- Use the shortcut **⌘L** to switch between Traditional Chinese and English
- Or select "Switch to English" / "切換到繁體中文" in the action panel

**Note**: Language settings changed at runtime are only effective for the current session. When reopening the extension, it will use the default language selected in preferences.

## About I Ching

The I Ching (易經) is one of the ancient Chinese classics, used for divination and philosophical reflection. It contains 64 hexagrams, each composed of six lines (yao), representing different situations and advice.

## Multi-language Support

This extension supports the following languages:

- **Traditional Chinese (Hong Kong)** (zh-HK) - Default
- **English** (en)

All UI text and hexagram interpretations have been translated and can be switched at runtime.

## Development

```bash
# Install dependencies
npm install

# Development mode
npm run dev

# Build
npm run build

# Check code
npm run lint
```

## License

MIT
