var element;

// element = document.body;
// element = document.baseURI;
// element = document.URL;
// element = document.domain;
// element = document.images;


// element = document.getElementById("header");
// element = document.getElementsByClassName("list");
// element = document.getElementsByClassName("list")[0];
// element = document.getElementsByTagName("ul");
// element = document.getElementsByTagName("ul")[2];

// element = document.getElementById("header").innerText;
// element = document.getElementById("content").innerText;
// element = document.getElementById("content").innerHTML;
// element = document.getElementById("header").getAttribute("class");
// element = document.getElementById("header").getAttributeNode("style");
// element = document.getElementById("header").attributes;
// element = document.getElementById("header").attributes[2];
// element = document.getElementById("header").attributes[2].value;
// element = document.getElementById("header").attributes[2].name;

// document.getElementById("header").innerHTML = "<h1>JavaScript</h1>";
// document.querySelector("#header").innerHTML = "<h1>JS</h1>";

// document.getElementById("header").setAttribute("class", "xyz");
// document.getElementById("header").attributes[1].value = "xyz";

document.getElementById("header").setAttribute("style", "border: 1px solid green");

// document.getElementById("header").removeAttribute("class");

// element = document.querySelector(".list");
// element = document.querySelectorAll(".list");
// element = document.querySelectorAll(".list")[1];
// element = document.querySelectorAll("ul")[0].innerHTML;
// element = document.querySelectorAll("#header h1");
element = document.querySelectorAll("#header h1")[1].innerHTML;

document.querySelector("#header").style.backgroundColor = "tan";
document.querySelector("#header").style.color = "#fff";

document.querySelector("#header").addEventListener("mouseenter", abc);
document.querySelector("#header").addEventListener("click", function(){
    document.querySelector("#header").style.border = "10px solid green";
});
function abc(){
    document.querySelector("#header").style.background = "crimson";
}


console.log(element);