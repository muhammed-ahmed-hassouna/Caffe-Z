let ask = prompt("What's you'r name?");
let ask2 = prompt("What's you'r gender? (Male or Female)");

if (ask2 == "Male") {
    alert("Welcome Mr " + ask);
}
else if (ask2 == "Female") {
    alert("Welcome Ms " + ask);
}
else {
    alert("Welcome");
}
let ask3 = prompt("Do you want a cold or hot drink?");
let ask4 = prompt("What is the name of the drink you want?");
alert("You'r drink " + ask4 + "is getting prepared")

console.log(ask +" Ordered a " +ask3 + " " +ask4)

