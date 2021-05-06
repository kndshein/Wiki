const fileSystem = require("fs");
const files = fileSystem.readdirSync("../AlgorithmPractice/JavaScript");

module.exports = {
  getFiles: files,
};
