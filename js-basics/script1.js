var ages = [10,12,11,16];
console.log(ages);
var b = ages.filter(checkOut);
console.log(b);

function checkOut(aaa){
    return aaa >= 11;
}