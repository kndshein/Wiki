## [Algorithms Practice](https://github.com/kndshein/AlgorithmPractice)

#### Javascript

```mmd
const files = scripts.getFiles

return files
  .sort()
  .map(
    (file) =>
      `- [${file[0].toUpperCase() +
      file.slice(1, file.length - 3).replace(/([a-z])([A-Z])/g, "$1 $2")}](https://github.com/kndshein/AlgorithmPractice/blob/main/JavaScript/${file})`
  )
  .join("\n");
```

#### Ruby

- [Count Duplicates in Object](https://github.com/kndshein/AlgorithmPractice/blob/main/Ruby/countDupesinObject.rb)
- [Most Vowel](https://github.com/kndshein/AlgorithmPractice/blob/main/Ruby/mostVowel.rb)
- [Caesar Cipher](https://github.com/kndshein/AlgorithmPractice/blob/main/Ruby/caesarCipher.rb)
