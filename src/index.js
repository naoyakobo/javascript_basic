// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// const val3 = 1;

// const val4 = {
//   name: "直也",
//   age: "23"
// };
// val4.name = "直人"
// console.log(val4);

// const name = "なおや";
// const age = "23";
// const message = `私の名前は${name}です。`;
// console.log(message);

// const func1 = (value) => {
//   return value;
// };
// console.log(func1("直也"));

// const func1 = (value) => {
//   return value;
// };
// console.log(func1("直也"));

// const func2 = (value, value2) => {
//   return value + value2;
// };
// // console.log(func2(10, 20));

// const myprofile = {
//   name: "なおや",
//   age: 23
// };

// // const message = myprofile;
// // console.log(message);

// const { name, age } = myprofile;
// const message2 = name + age;
// console.log(message2);

// const sayHello = (name = "konnnitiha") => console.log(name);
// sayHello();

// const arr1 = [1, 2];
// const sumFunc = (value1, value2) => console.log(value1 + value2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const [num1, num2, ...arr3] = arr;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
