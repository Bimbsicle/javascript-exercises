const findTheOldest = function(obj) {
    for (let i = 0; i < obj.length; i++) {
        if ('yearOfDeath' in obj[i] != true) {
            obj[i].yearOfDeath = 2022
        }  
    }
    let oldest = obj.sort(function(a,b) {
        let firstPerson = a.yearOfDeath - a.yearOfBirth
        let secondPerson = b.yearOfDeath - b.yearOfBirth
        return firstPerson - secondPerson
    })
    return oldest[oldest.length-1]
};

// Do not edit below this line
module.exports = findTheOldest;
