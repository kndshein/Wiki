const fileSystem = require("fs");
const files = fileSystem.readdirSync("../AlgorithmPractice/JavaScript");

// files.map((file) => {
//   console.log(
//     file[0].toUpperCase() +
//       file.slice(1, file.length - 3).replace(/([a-z])([A-Z])/g, "$1 $2")
//   );
// });

console.log(
  files
    .sort()
    .map(
      (file) =>
        `- [${
          file[0].toUpperCase() +
          file.slice(1, file.length - 3).replace(/([a-z])([A-Z])/g, "$1 $2")
        }](https://github.com/kndshein/AlgorithmPractice/blob/main/JavaScript/${file})`
    )
    .join("\n")
);
