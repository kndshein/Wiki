## [Algorithms Practice](https://github.com/kndshein/AlgorithmPractice)

#### Javascript

```mmd
const files = scripts.getFiles

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

- [Count Duplicates in Object](https://github.com/kndshein/AlgorithmPractice/blob/main/Ruby/countDupesinObject.rb)
- [Most Vowel](https://github.com/kndshein/AlgorithmPractice/blob/main/Ruby/mostVowel.rb)
- [Caesar Cipher](https://github.com/kndshein/AlgorithmPractice/blob/main/Ruby/caesarCipher.rb)
