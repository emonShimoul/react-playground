
// var newElement = document.createElement("h2");

// var newText = document.createTextNode("This is just text.");

// newElement.appendChild(newText);

var target = document.getElementById("test");

// var newElement = "<h2>This is Heading</h2>"; // for insertAdjacentHTML() method

var newText = "This is AdjacentText";

// target.insertAdjacentElement("beforeend", newElement);

// target.insertAdjacentHTML("beforeend", newElement);

target.insertAdjacentText("afterend", newText);