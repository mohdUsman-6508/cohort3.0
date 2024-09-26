// simple function

const arr = [1, -2, 3, 4, -5];
getPositives(arr);

function getPositives(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) newArr.push(arr[i]);
  }
  console.log(newArr);
  return newArr;
}

//arrow function
const getDouble = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  console.log(newArr);
  return newArr;
};

getDouble(arr);

// map
// whenever you want to transform an array just use map, cleaner
// console.log(arr);

// const a = arr.map(function (item) {
//   return item * 3;
// });

const a = arr.map((item, index, arr) => {
  return item + 10;
});

const user = [
  {
    id: "1",
    name: "user1",
  },
  {
    id: "2",
    name: "user2",
  },
  {
    id: "3",
    name: "user3",
  },
];

user.map((item) => {
  console.log(`User id is ${item.id} and your name is ${item.name}`);
});

// filter
const b = arr.filter(function (item) {
  return item % 2 == 0;
});
console.log(b);

const c = user.filter((user) => {
  return user.id != 1;
});
console.log(c);
