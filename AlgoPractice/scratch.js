// ## [Algorithms Practice](https://github.com/kndshein/AlgorithmPractice)

// #### Javascript

// - [Character Count](https://github.com/kndshein/AlgorithmPractice/blob/main/JavaScript/charCount.js)
// - [Reverse String](https://github.com/kndshein/AlgorithmPractice/blob/main/JavaScript/reverseString.js)
// - [Vowel Count](https://github.com/kndshein/AlgorithmPractice/blob/main/JavaScript/vowelCount.js)

let algos = {
  vowelCount: "Vowel Count",
  charCount: "Character Count",
  reverseString: "Reverse String",
};

return Object.keys(algos)
  .sort()
  .map(
    (file) =>
      `- [${algos[file]}](https://github.com/kndshein/AlgorithmPractice/blob/main/JavaScript/${file}.js)`
  )
  .join("\n");

// function makeFile(string) {
//   return `- [${algos[string]}](https://github.com/kndshein/AlgorithmPractice/blob/main/JavaScript/${string}.js)`;
// }
