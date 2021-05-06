const fileSystem = require("fs");
const jSFiles = fileSystem.readdirSync("../AlgorithmPractice/JavaScript");
const rubyFiles = fileSystem.readdirSync("../AlgorithmPractice/Ruby");

jSFiles.splice(jSFiles.indexOf("algoTemplate.js"), 1);
rubyFiles.splice(rubyFiles.indexOf("algoTemplate.rb"), 1);

module.exports = {
  getJS: jSFiles,
  getRuby: rubyFiles,
};
