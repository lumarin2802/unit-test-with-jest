console.log("Hello World")

const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 3))

let fromDollarToYen = (dollar) => {
    return parseFloat(((dollar / 1.2) * 127.9).toFixed(2));
};

let fromEuroToDollar = (euro) => {
    let result = euro * 1.2;
    return result
};

let fromYenToPound = (yen) => {
    return parseFloat(((yen / 127.9) * 0.8).toFixed(2));
};



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };