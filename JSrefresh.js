//Let and Const
//let - use for vars
//const - user for contants

//Arrow functions
const myFnc = () => {

}

// one argument
const myFunc = name => {

}

// one return
const multiple = number => number * 2;

// Classes
class Human {
    gender = "male";
}

class Person extends Human {
    name = "Max";
    gender = "female";

    printMyName() {
        console.log(this.name);
    }
}

//Spread / Rest Operators
const newArray = [...oldArray, 1, 2];

const numb = [1, 2, 3];
const newNumbers = [...numbers, 4]; //pulls out the elements ([1,2,3,4]) instead of creating [[1,2,3],4]

//Rest
function fortArgs(...args) {
    return args.sort();
}

const pers = {
    name: "Max"
};

const newPerson = {
    ...person, //copies properties of person above
    age: 28
}

const filter = (...args) => {
    return args.filter(el => el === 1);
}

//Destructuring
// Extract array elements and store them in variables.

[a, b] = ["Hello", "Max"];

const numbers = [1,2,3];
[num1, num2] = numbers;

//Other things
const number = 1;
const num2 = number;

const person = {
    name: "Max"
};

const secondPerson = person;

//Array functions
/*
map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/