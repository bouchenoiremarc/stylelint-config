module.exports = {
  plugins: ["stylelint-scss"],
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-css-modules",
    "stylelint-config-idiomatic-order",
    "stylelint-config-prettier"
  ],
  defaultSeverity: "warning",
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/no-global-function-names": null
  }
}
