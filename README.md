# AlgorithmsProblemsJS

Practice exercise to solve algorithms problems

<!--** FOR LOOP TRADITIONAL -->

is better when you want to have control of index of the elements
you can customize the behavior of the iteration for example : skipping elements , reversing iterations.

<!--** FOR OF -->

its better if you just want to iterate over iterable objects such arrays , strings, maps ... etc.
it will automatically iterate over the elements of the iterable object and assign each element to the variable you specified in the for of loop.
conclusion if you just wokr with values its better to use this.
although it doesn't provide the index directly you can use Array.entries to get index and value.

let arr = ['apple', 'banana', 'cherry'];

for (let [index, value] of arr.entries()) {
console.log(`Index ${index}: ${value}`);
}

BETTER USE FOR ITERATE OVER: STRINGS, ARRAYS,MAPS,SETS
DOES NOT MEAN YOU CAN NOT ITERATE OVER OBJECT BUT YOU HAVE TO USE IT WITH
ANOTHER METHOD Object.Keys or Object.values()

<!--** FOR IN -->

The for...in loop iterates over the keys of the object obj.
In each iteration, key takes the value of the current property name, and obj[key] gives the corresponding value
Using Object.keys(), Object.values(), Object.entries():

Object.keys(obj): Returns an array of the object's keys.
Object.values(obj): Returns an array of the object's values.
Object.entries(obj): Returns an array of the object's key-value pairs as arrays.

let obj = { a: 1, b: 2, c: 3 };

for (let [key, value] of Object.entries(obj)) {
console.log(`${key}: ${value}`);
}

BETTER USE FOR ITERATE OVER: OBJECT KEYS AND VALUES
