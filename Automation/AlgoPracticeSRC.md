## [Algorithms Practice](https://github.com/kndshein/AlgorithmPractice)

#### Javascript

```mmd
const files = scripts.getJS

return files
    .sort()
    .map((file) => {
      const splitFile = file.replace(
        /([^\p{L}\d]+|(?<=\p{L})(?=\d)|(?<=\d)(?=\p{L})|(?<=[\p{Ll}\d])(?=\p{Lu})|(?<=\p{Lu})(?=\p{Lu}\p{Ll})|(?<=[\p{L}\d])(?=\p{Lu}\p{Ll}))/gu,
        " "
      );

      const output =
        splitFile[0].toUpperCase() +
        splitFile.substr(1, splitFile.length - 4);

      return `1. [${output}](https://github.com/kndshein/AlgorithmPractice/blob/main/JavaScript/${file})`;
    })
    .join("\n")
```

#### Ruby

```mmd
const files = scripts.getRuby

return files
    .sort()
    .map((file) => {
      const splitFile = file.replace(
        /([^\p{L}\d]+|(?<=\p{L})(?=\d)|(?<=\d)(?=\p{L})|(?<=[\p{Ll}\d])(?=\p{Lu})|(?<=\p{Lu})(?=\p{Lu}\p{Ll})|(?<=[\p{L}\d])(?=\p{Lu}\p{Ll}))/gu,
        " "
      );

      const output =
        splitFile[0].toUpperCase() +
        splitFile.substr(1, splitFile.length - 4);

      return `1. [${output}](https://github.com/kndshein/AlgorithmPractice/blob/main/Ruby/${file})`;
    })
    .join("\n")
```
