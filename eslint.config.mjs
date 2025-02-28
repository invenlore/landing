import pluginJs from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tsEslint from "typescript-eslint";

// Пример настроек для Google-стиля.
// Заметьте, что google-конфигурация в формате legacy, поэтому здесь мы вручную задаём ключевые правила.
const googleRules = {
  semi: ["error", "always"],
  quotes: ["error", "double"],
};

export default [
  // Сначала базовые рекомендуемые настройки:
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // Затем ваши пользовательские настройки, которые будут иметь приоритет:
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        sourceType: "module",
      },
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react: pluginReact,
      import: importPlugin,
    },
    rules: {
      ...googleRules,
      "react/react-in-jsx-scope": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // встроенные модули Node.js
            "external", // пакеты из node_modules
            "internal", // модули приложения
            "parent", // импорты из родительских директорий
            "sibling", // импорты из соседних файлов
            "index", // импорт из index файла
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      // Отключаем правила, конфликтующие с Prettier
      ...prettierConfig.rules,
    },
  },
];
