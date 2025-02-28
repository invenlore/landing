// eslint.config.mjs
import pluginJs from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tsRecommended from "@typescript-eslint/eslint-plugin/dist/configs/recommended.flat.cjs";

// Пример настроек для Google-стиля.
const googleRules = {
  semi: ["error", "always"],
  quotes: ["error", "double"],
};

export default [
  // Базовые рекомендуемые настройки:
  pluginJs.configs.recommended,
  tsRecommended,
  pluginReact.configs.flat.recommended,
  // Пользовательские настройки, которые будут иметь приоритет:
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
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
            "builtin",   // встроенные модули Node.js
            "external",  // пакеты из node_modules
            "internal",  // модули приложения
            "parent",    // импорты из родительских директорий
            "sibling",   // импорты из соседних файлов
            "index",     // импорт из index файла
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      // Отключаем правила, конфликтующие с Prettier:
      ...prettierConfig.rules,
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
    ignores: [".next/*"],
  },
];
