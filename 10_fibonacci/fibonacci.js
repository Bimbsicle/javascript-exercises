const fibonacci = function(a) {
    if (a < 0) {
        return "OOPS"
    }
    let sequence = [0,1]
    let sum = 1
    for (let i = 1; i < a; i++ ) {  
      sum = sequence[i] + sequence[i-1]
      sequence.push(sum)
    }
    return sum
};

// Do not edit below this line
module.exports = fibonacci;
