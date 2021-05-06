const fileSystem = require("fs");
const jSFiles = fileSystem.readdirSync("../AlgorithmPractice/JavaScript");
const rubyFiles = fileSystem.readdirSync("../AlgorithmPractice/Ruby");

module.exports = {
  getJS: jSFiles,
  getRuby: rubyFiles,
};
