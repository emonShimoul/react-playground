import {default as yahoo} from "./library.js";

yahoo();

// import * as yahoo from "./library.js";
import { message, test, user } from "./library.js";
// import { message, user as us, test } from "./library.js";

console.log(message);
// console.log(yahoo.message);

console.log(user("Hitesh Vijay"));
// console.log(us("Hitesh Vijay"));
// console.log(yahoo.user("Hitesh Vijay"));

let a = new test();
// let a = new yahoo.test();