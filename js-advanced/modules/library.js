export default function(){           // default function. It has no name. The name is declared where it is imported.
    console.log("Hello !!");
}

let message = "ES6 Modules";

function user(name){
    // console.log(`Hello ${name} !!!`);
    return `Hello ${name} !!!`;
}

class test{
    constructor(){
        console.log("Constructor Method");
    }
}

export {message, test, user};

