module.exports = {
  defaultSeverity: "warning",
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-idiomatic-order",
    "stylelint-config-prettier"
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "layer"]
      }
    ],
    "declaration-block-trailing-semicolon": null,
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["screen", "theme"]
      }
    ],
    "no-descending-specificity": null
  }
}
