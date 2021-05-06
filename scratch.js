const fileSystem = require("fs");
const files = fileSystem.readdirSync("../AlgorithmPractice/JavaScript");

// files.map((file) => {
//   console.log(
//     file[0].toUpperCase() +
//       file.slice(1, file.length - 3).replace(/([a-z])([A-Z])/g, "$1 $2")
//   );
// });

// console.log(
//   files.sort().map((file) => {
//     const splitFile = file.replace(/([a-z])([A-Z])/g, "$1 $2");
//     const output =
//       splitFile.substr(0, 0) +
//       file.charAt(0).toUpperCase() +
//       splitFile.substr(1, splitFile.length);
//     return output;
//   })
// );

console.log(
  files
    .sort()
    .map((file) => {
      const splitFile = file.replace(/([a-z])([A-Z])/g, "$1 $2");
      const output =
        splitFile.substr(0, 0) +
        file.charAt(0).toUpperCase() +
        splitFile.substr(1, splitFile.length - 4);

      return `- [${output}](https://github.com/kndshein/AlgorithmPractice/blob/main/JavaScript/${file})`;
    })
    .join("\n")
);
