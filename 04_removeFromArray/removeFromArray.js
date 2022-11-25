const removeFromArray = function(array, num, num2, num3, num4) {
    const result = array.filter(checkNum)
    function checkNum(item) {
        if (item === num || item === num2 || item === num3 || item === num4) {
            return false
        } 
        else {
            return item
        }
    }
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
