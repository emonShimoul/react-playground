

var parentElement = document.getElementById("test");
// var parentElement1 = document.getElementById("test1");
var parentElement1 = document.getElementById("test2");
var target = document.getElementById("abc");

var find = parentElement.contains(target);

var findClass = parentElement.hasAttribute("src");

var findChildNodes = parentElement1.hasChildNodes();

console.log(find);
console.log(findClass);
console.log(findChildNodes);
// console.log(target);
// console.log(parentElement);