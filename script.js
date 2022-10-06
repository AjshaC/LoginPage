const body = document.querySelector("body");
const text = document.querySelector("h1");
const form = document.querySelector(".form");
const nameInput = document.querySelector(".name");
const passWordInput = document.querySelector(".password");
const logIn = document.querySelector(".LoginBtn");
const NewAcc = document.querySelector(".NewAccount");
const LogaOutBtn = document.querySelector(".Out");
LogaOutBtn.style.display = "none";
//pick up from html

logIn.addEventListener("click", passWordCheck);
NewAcc.addEventListener("click", AddNew);
//btnLogout.addEventListener("click", LogOut);
LogaOutBtn.addEventListener("click", LogOut);

function init() {
  if (localStorage.getItem("isLoggedIn")) {
    LogdIn();
  }
}

init();

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
      const userLogin = us.name;
      localStorage.setItem("isLoggedIn", userLogin);
      LogdIn();
      //localStorage.setItem("isLoggedIn", JSON.stringify(true));
      return;
    }
  }

  tryAgain();
}

// function for LogdIN
//text.innerHTML = userLocalStorage.getItem("nameInput.value");

function LogdIn() {
  const logIn = localStorage.getItem("isLoggedIn");
  text.innerHTML = "Hii " + logIn;
  form.style.display = "none";
  LogaOutBtn.style.display = "block";

  // localStorage.setItem("User", JSON.stringify(nameInput.value));
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
  LogaOutBtn.style.display = "none";
  localStorage.removeItem("isLoggedIn");

  //localStorage.removeItem("User");
}

// log out function.
