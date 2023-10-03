// let name0 = prompt("What's you'r name?");
// let gender;
// let array = [];


// function genderfunction() {

// while (gender != "male" || gender != "female") {
//     gender = prompt("What's you'r gender? (Male or Female)");
//     let b = gender.toLocaleLowerCase();
//     if (b == "male") {
//         alert("Welcome Mr " + name0);
//         array.push(name0);
//         array.push(b);
//         break;

//     }
//     else if (b == "female") {
//         alert("Welcome Ms " + name0);
//         array.push(name0);
//         array.push(b);
//         break;

//     }
// }
// }

// genderfunction();
// let age = prompt("How old are you?");

// let type = prompt("Do you want a cold or hot drink?");
// array.push(type);

// let namedrink = prompt("What is the name of the drink you want?");
// array.push(namedrink);
// alert("You'r drink " + namedrink + " is getting prepared");

// console.log(name0 + " ordered a " + type + " " + namedrink);

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// let div = document.getElementById("call");
// let para = document.createElement("p");
// let ul = document.createElement("ul");
// let li = document.createElement("li");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");

// div.appendChild(para);
// div.appendChild(ul);
// div.appendChild(li);
// div.appendChild(li2);
// div.appendChild(li3);

// para.innerHTML = "Name: " + name0;
// li.innerHTML = "Gender: " + gender;
// li2.innerHTML = "Age: " + age;
// li3.innerHTML = "Drink: " + namedrink;


function submitForm() {
    var username = document.getElementById("username").value;
    var age = document.getElementById("age").value;
    var hotCheckbox = document.getElementById("hotCheckbox").checked;
    var coldCheckbox = document.getElementById("coldCheckbox").checked;
    var type = document.getElementById("type").value;

    alert("Name: " + username +
        "\nAge: " + age +
        "\nHot: " + hotCheckbox +
        "\nCold: " + coldCheckbox +
        "\nDrink Type: " + type);
}

