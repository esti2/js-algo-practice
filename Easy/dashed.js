/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed(str) {

  let tempStr = "";
  let Letter = "aeiouAEIOU"
  for (let index = 0; index < str.length; index++) {
    if (Letter.includes(str[index]))
      tempStr += ('-' + str[index] + '-');
    else
      tempStr += str[index];
  }
  return tempStr;
}

exports.solution = dashed;