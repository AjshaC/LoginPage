const body = document.querySelector("body");
const text = document.querySelector("h1");
const form = document.querySelector(".form");
const nameInput = document.querySelector(".name");
const passWordInput = document.querySelector(".password");
const logIn = document.querySelector(".LoginBtn");
const NewAcc = document.querySelector(".NewAccount");
//pick up from html
let btnLogout = document.createElement("button");
let btnText = document.createTextNode("Log out");

logIn.addEventListener("click", passWordCheck);
NewAcc.addEventListener("click", AddNew);
btnLogout.addEventListener("click", LogOut);

//array inside object with userse name and password.

const user = [
  {
    name: "Fredrik",
    password: "12345",
  },

  {
    name: "Maja",
    password: "23456",
  },

  {
    name: "Calle",
    password: "34567",
  },
];

//localStorege test
// localStorage.setItem("User", JSON.stringify(user));
// const userLocalStorage = JSON.parse(localStorage.getItem(user));
//localStorege end
// function to check if it is correct password

function passWordCheck() {
  for (const us of user) {
    if (nameInput.value === us.name && passWordInput.value === us.password) {
      LogdIn();
      return;
    }
  }

  tryAgain();
}

// function for LogdIN
//text.innerHTML = userLocalStorage.getItem("nameInput.value");

function LogdIn() {
  // text.innerHTML = "Yey " + nameInput.value;
  form.style.display = "none";

  localStorage.setItem("User", JSON.stringify(nameInput.value));
  //const userLocalStorage = JSON.parse(localStorage.getItem(nameInput.value));

  OutBth();
}

//funtion for tryAgain
function tryAgain() {
  text.innerHTML = "Wrong Password, please try again";
}

// new Account function
function AddNew(name, pass) {
  name = nameInput.value;
  pass = passWordInput.value;
  user.push({ name: name, password: pass });
  // userLocalStorage.push(name, pass);
}

//function for logOut
function LogOut() {
  text.innerHTML = "Please enter your password";
  form.style.display = "block";
  form.style.display = "flex";
  nameInput.value = "";
  passWordInput.value = "";
  btnLogout.style.display = "none";
}

function OutBth() {
  btnLogout.appendChild(btnText);
  body.appendChild(btnLogout);
}

// log out function.
