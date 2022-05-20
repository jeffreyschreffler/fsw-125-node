
//add

function add(num1,num2) {
    return num1 + num2;
}

//sub

const sub = (num1,num2) => num1 - num2;

// mult

const mult = (num1,num2) => num1 * num2;

//div

function div(num1,num2) {
    return num1 / num2;
}

module.exports.add = add;
module.exports.sub = sub;
module.exports.mult = mult;
module.exports.div = div;