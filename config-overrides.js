const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@react_redux_course": "src/",
    "@ui": "src/components/UI",
    "@store": "src/store",
  })(config);
  return config;
};
