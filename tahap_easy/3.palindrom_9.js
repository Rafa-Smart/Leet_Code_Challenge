// Given an integer x, return true if x is a palindrome, and false otherwise.
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function (x) {
  tes = String(x);
  te2 = tes.split("");
  let data = [];
  for (let i = 0; i < te2.length; i++) {
    data.push(Number(te2[i]));
  }
  let hasil = [...data]
  let data2 = data.reverse()
  console.log(hasil)
  console.log(data2)

  if(JSON.stringify(hasil) === JSON.stringify(data2)){
    console.log("data sama")
    return
  }

  console.log("data tidak sama")
};


isPalindrome(12177777)

// yang diatas cara kamu sendiri


// ini cara dari ai https://chatgpt.com/c/6829e99a-06d8-8009-9e8b-698768f46e52