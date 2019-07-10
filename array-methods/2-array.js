var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
let longestWord = ' ';
findLongestWord = () => {
	words.forEach(item => { 
  longestWord = longestWord.length > item.length ? longestWord : item.length !== longestWord.length ? item : longestWord ;
});
  return longestWord;
};




var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
let sumArray = (numbers1) => {
	return numbers1.reduce((a, b) => a + b);
}




var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
let sum, avg = 0;
let averageNumbers = () => { 
  sum = numbers2.reduce((a, b) => a + b);
  return avg = sum / numbers2.length;
}



var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let averageWordLength = () => {
  let totalWords = words2.reduce((a, b) => a + b);
  let sum = Math.floor(totalWords.length / words2.length);
  return sum;
}