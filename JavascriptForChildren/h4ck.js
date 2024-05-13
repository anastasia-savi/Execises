let input = "javascript is awesome";
let output = "";

for (let i = 0; i < input.length; i++) {
  if ("a" === input[i]) {
    output += "4";
  } else if ("e" === input[i]) {
    output += "3";
  } else if ("o" === input[i]) {
    output += "0";
  } else {
    output += input[i];
  }
}
console.log(output);
