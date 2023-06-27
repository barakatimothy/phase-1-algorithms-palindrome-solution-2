function isPalindrome(word) {
  for(let i=0;i<word.length/2;i++){
    const j = word.length -1 - i;
    const startChar = word[i]
    const endChar = word[j]
    if (startChar !== endChar){
      return false 
    }
  }
return true
}

/* 
  Add your pseudocode here
*/

/*
> I need to make an `isPalindrome` function that returns either `true` or
> `false`. When the input string is the same forwards and backwards, I should
> return `true`. That means if the **first letter** is the same as the **last
> letter**, and the **second letter** is the same as the **second to last**
> letter, and so on (until the middle of the word), the function should return
> `true`.
>
> For the word `"racecar"`, the first and last letter is "r", the second and
> second to last is "a", the third and third to last is "c", and the middle is
> "e", so I should return `true`. For the word "robot", the first letter is "r"
> and the last letter is "t", so I should return `false`.

Note that this description of the problem still highlights the inputs and
outputs, but compared to our last description of "reversing the word", the way
we understand the problem is significantly different, and will impact our
approach when it's time to write the co
*/


if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
