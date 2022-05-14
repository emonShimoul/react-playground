function hello() {
    console.log("Hello Khulna!!");
}

function names(fname = "Vijay", lname = "Devrakonda"){
    console.log("Hii " + fname + " " + lname);
} 

names("Emon", "Shimul");
names();

hello();

function sum(math, eng, sc){
    var s = math + eng + sc;
    return s;
}

function percentage(tt){
    var per = tt/300 * 100;
    console.log(per);
}

total = sum(60,60,60);
percentage(total);