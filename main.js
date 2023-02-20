// //concatenation

// const name = "bongz";
// const age = 28;
// console.log("i am " + name + " " + age);
// //template string
// const hello = `i am ${name} ${age}`;
// console.log(hello);
// //Strings
// const str = "bongz G2";
// console.log(str.split(""));
// //arrays that holds multiple values
// //array constructor method
// const number = new Array(1, 2, 3, 4, 5);
// console.log(number);

// const array = ["bo", "so", "vo"];
// array.push("zo"); //add at the end
// array.unshift("mo"); //add at the begining

// console.log(Array.isArray("so")); //in array true/false
// console.log(array.indexOf("mo"));

// //key vale pairs
// const motho = {
// 	leina: "bongz",
// 	sefane: "gaanabo",
// 	dijara: 28,
// 	hobbies: ["coding", "draw", "rap"],
// };
// console.log(motho.leina);
// console.log(motho.sefane);
// console.log(motho.dijara);
// console.log(motho.hobbies["1"]); //get a certain part of array

// const { leina, sefane } = motho; //destructuring

// console.log(leina);

// motho.emai = "bongz@gmail.com";
// console.log(motho);

// //array of object
// const todos = [
// 	{
// 		id: 1,
// 		text: "take trash out",
// 		isComplete: true,
// 	},
// 	{
// 		id: 2,
// 		text: "take trash ",
// 		isComplete: true,
// 	},
// 	{
// 		id: 3,
// 		text: "take ",
// 		isComplete: false,
// 	},
// ];

// const todoJSON = JSON.stringify(todos); //how to send data to server
// console.log(todoJSON);
// // console.log(todos["1"].text);//logging out specific parts

// //for and while
// let i = 0;
// while (i < 10) {
// 	console.log(`while loop: ${i}`);
// 	i++;
// }
// for (i = 0; i < todos.length; i++) console.log(todos[i]);

// for (let todo of todos) {
// 	console.log(todo.text); //for loop of
// }

// //forEach, map and filter
// todos.forEach(function (todo) {
// 	console.log(todo.text);
// });
// const todoText = todos.filter(function (todo) {
// 	return todo.isComplete === true;

// 	console.log(todo.id);
// });
// // const todoText = todos.map(function (todo) {
// // 	console.log(todo.text);
// // });

// //if statements
// const num = 22;

// if (num === 21) {
// 	console.log(num);
// } else if (num < 22) {
// 	console.log("not it");
// } else {
// 	console.log("cha");
// }

// //conditional statements and tenary operator and switch case

// const x = 9;

// const color = x > 10 ? "red" : "blue";
// switch (color) {
// 	case "red":
// 		console.log("color is red");
// 		break;
// 	case "blue":
// 		console.log("color is blue");
// 		break;
// 	default:
// 		console.log("color is not red or blue");
// }

// //functions

// function addNums(num1, num2) {
// 	console.log(num1 + num2);
// }
// addNums(6, 2);
// //arrow function
// // const addNums = (num1, num2) => {
// // 	console.log(num1 + num2);  //
// // };
// // addNums(6, 2);

// function addNums(num1 = 1, num2 = 2) {
// 	console.log(num1 + num2); //give us 3
// }
// addNums();
// function addNums(num1 = 3, num2 = 4) {
// 	console.log(num1 + num2);
// }
// addNums(6, 2); // override the assignemnt at the top

// function addNums(num1, num2) {
// 	return num1 + num2;
// }
// console.log(addNums(6, 2));

// //oop

// //constructor function

// // function Person(firstNmae, lastName, dob) {
// // 	this.firstNmae = firstNmae;
// // 	this.lastName = lastName;
// // 	this.dob = new Date(dob);
// // }
// // Person.prototype.getBirthYear = function () {
// // 	return this.dob.getFullYear();
// // };
// // Person.prototype.getFullName = function () {
// // 	return `${this.firstNmae} ${this.lastName}`;
// // };
// //Class
// class Person {
// 	constructor(firstNmae, lastName, dob) {
// 		this.firstNmae = firstNmae;
// 		this.lastName = lastName;
// 		this.dob = new Date(dob);
// 	}
// 	getBirthYear() {
// 		return this.dob.getFullYear();
// 	}
// 	getFullName() {
// 		return `${this.firstNmae} ${this.lastName}`;
// 	}
// }

// //instantiate
// const person1 = new Person("bongz", " gaanabo", "03/06/1995");
// // console.log(person1.dob.getFullYear());

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// DOM
//SINGLE ELEMENT
//getelementbyid
//queryselector

//multiple element
//queryselectorall
//getelementbyclassname
//getelementbytagname

const nameEl = document.getElementById("#name");
const emailEl = document.getElementById("email");
const msg = document.getElementById("msg");
const userList = document.getElementById("#users");
const myForm = document.getElementById("#my-form");
if (myForm) {
	myForm.addEventListener("submit", onSubmit);
}

function onSubmit(e) {
	e.preventDefault();
	if (nameEl.value === "" || emailEl.value === "") {
		msg.classList.add("error");
		msg.innerHTML = "pls enter value";
		setTimeout(() => msg.remove(), 3000);
	} else {
		const li = document.createElement("li");
		li.appendChild(document.createTextNode(`${nameEl.value} : ${emailEl}`));
		userList.appendChild(li);

		//clear fields
		nameEl.value = "";
		emailEl.value = "";
	}
}

// emailEl.value = "";
// console.log(nameEl);
// const mForm = document.querySelector("#my-form");

// const btn = document.querySelector(".btn");
// const ul = document.querySelector(".items");

// btn.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	document.querySelector("#my-form").style.background = "pink";
// 	document.querySelector("body").classList.add("bg-dark");
// });

// btn.style.background = "blue";
// ul.firstElementChild.textContent = " heloo";

// ul.children[1].innerText = "bongz";
// ul.lastElementChild.innerHTML = "<h1>bongz</h1>";
