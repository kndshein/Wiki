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

let fileNames = Object.keys(algos).sort();

// fileNames.map((file) => console.log(makeFile(file)));

for (let file of fileNames) {
  console.log(makeFile(file));
}

function makeFile(string) {
  return `- [${algos[string]}](https://github.com/kndshein/AlgorithmPractice/blob/main/JavaScript/${string}.js)`;
}

console.log(fileNames);
