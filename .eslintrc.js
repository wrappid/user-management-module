// eslint-disable-next-line no-undef
module.exports = {
  "env": {
    "browser": true,
    "es2021" : true,
  },
  "extends"       : ["eslint:recommended", "plugin:react/recommended", "plugin:import/recommended", "plugin:react/jsx-runtime"],
  "ignorePatterns": ["**/node_modules/*"],
  "overrides"     : [],
  "parserOptions" : {
    "ecmaVersion": "latest",
    "sourceType" : "module",
  },
  "plugins": [
    "etc",
    "import",
    "react",
    "sort-keys-fix",
    "unused-imports",
  ],
  "rules": {
    "array-bracket-newline": [
      "error",
      {
        "minItems" : 5,
        "multiline": true,
      },
    ],
    "array-bracket-spacing"    : ["error", "never"],
    "array-element-newline"    : ["error", { "minItems": 5, "multiline": true }],
    "comma-dangle"             : ["error", { "arrays": "only-multiline", "objects": "only-multiline" }],
    "comma-spacing"            : ["error", { "after": true, "before": false }],
    "etc/no-commented-out-code": "error",
    "id-length"                : ["error", { "exceptions": ["i", "j", "id"], "min": 3, "properties": "never" }],
    "import/order"             : [
      "error",
      {
        "alphabetize": {
          "caseInsensitive": true,
          "order"          : "asc",
        },
        "groups"          : ["builtin", "external", "internal"],
        "newlines-between": "always",
        "pathGroups"      : [
          {
            "group"   : "builtin",
            "pattern" : "react",
            "position": "before",
          },
        ],
        "pathGroupsExcludedImportTypes": ["react"],
      },
    ],
    "indent"                  : ["error", 2, { "MemberExpression": 1, "SwitchCase": 1 }],
    "key-spacing"             : ["error", { "align": "colon" }],
    "linebreak-style"         : ["error", "unix"],
    "newline-after-var"       : ["error", "always"],
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 3 }],
    "no-console"              : "error",
    "no-multi-spaces"         : ["error", { exceptions: { "VariableDeclarator": true } }],
    "no-multiple-empty-lines" : ["error", { "max": 1 }],
    "no-unused-vars"          : ["error", { "args": "after-used", "vars": "all" }],
    "no-var"                  : "error",
    "object-curly-newline"    : [
      "error",
      {
        "ExportDeclaration": { "minProperties": 6, "multiline": true },
        "ImportDeclaration": { "minProperties": 6, "multiline": true },
        "ObjectExpression" : { "minProperties": 6, "multiline": true },
        "ObjectPattern"    : { "minProperties": 6, "multiline": true },
      },
    ],
    "object-curly-spacing"           : ["error", "always"],
    "object-property-newline"        : ["error", { "allowAllPropertiesOnSameLine": true }],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next     : "*",
        prev     : ["const", "let", "var"],
      },
      {
        blankLine: "any",
        next     : ["const", "let", "var"],
        prev     : ["const", "let", "var"],
      },
      {
        blankLine: "always",
        next     : "*",
        prev     : ["case", "default"],
      }
    ],
    "quotes"                          : ["error", "double"],
    "react/jsx-first-prop-new-line"   : "error",
    "react/jsx-max-props-per-line"    : ["error", { "maximum": { "multi": 1, "single": 3 } }],
    "react/jsx-newline"               : "error",
    "react/jsx-props-no-multi-spaces" : "error",
    "react/prop-types"                : "off",
    "semi"                            : ["error", "always"],
    "sort-keys-fix/sort-keys-fix"     : "error",
    "space-infix-ops"                 : ["error", { "int32Hint": false }],
    "unused-imports/no-unused-imports": "error",
  },
  "settings": { "react": { "version": "detect" } },
};
