const add = function(a,b) {
  let answer = a + b
  return answer
};

const subtract = function(a,b) {
	let answer = a - b
  return answer
};

const sum = function(a) {
  let answer = 0
  for (let i = 0; i < a.length; i++){
   answer += a[i]
  }
  return answer
};

const multiply = function(a) {
  let answer = 1
  for (let i = 0; i < a.length; i++){
  answer *= a[i]
  }
  return answer
};

const power = function(a,b) {
	let answer = a ** b
  return answer
};

const factorial = function(a) {
  let i = a
  let answer = 1
  while (i > 0) {
    answer *= i
    i--
  }
  return answer
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
