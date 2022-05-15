var day = 70;

switch (day) {
    case 1:
        console.log("This is 1");
        break;
    case 2:
        console.log("This is 2");
        break;
    case 3:
        console.log("This is 3");
        break;
    case 4:
        console.log("This is 4");
        break;
    case 5: case 6: case 7:
        console.log("This is 5/6/7");
        console.log("This is multiple numbers option");
        break;

    default:
        console.log("This is a number");
        break;
}

// With comparison operator
age = 28;
switch (true) {
    case (age >= 15 && age <= 20):
        console.log("You are eligible");
        break;
    case (age >= 21 && age <= 28):
        console.log("You are not eligible");
        break;

    default:
        console.log("Enter a valid age");
        break;
}