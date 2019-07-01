var data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Pochi',
    age: 3,
    type: 'dog'
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year
// Solution is 105
let sum = 0;
for (let k = 0; k < data.length; k++) {
  if (data[k].type === 'dog') {
    sum = sum + data[k].age;
  }
}
sum *= 7;


// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.
// Solution 105
function filter(type) {
  return data.filter(item => item.type === type);
}

function convertToDogAge(humanAge) {
  return data.map(item => item.type === 'dog' ? item.age = 7 * humanAge : item.age);
}

function totalAge() {
  return data.reduce((acc, item) => {
    if(item.type === "dog"){
      acc = acc + item.age;
    }
    return acc; 
  }, 0);
};