


function countVowels(str) {

let count = 0;
let vowels = "aeiouAEIOU";

for(let char of str) {// take the value of str , variable char takes letter of the string and 
  if(vowels.includes(char)) {// the iteration checks the condition , if the vowels are in the variable char add to the variable count
    count++;
  }
}
console.log(count);
return count;

}

countVowels("hello world");