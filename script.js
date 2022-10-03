const body = document.querySelector("body");
const text = document.querySelector("h1");
const form = document.querySelector(".form");
const nameInput = document.querySelector(".name");
const passWordInput = document.querySelector(".password");
const logIn = document.querySelector(".LoginBtn");
const NewAcc = document.querySelector(".NewAccount");
//pick up from html

//array inside object with userse name and password.

const user = [
  {
    name: "fredrik",
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

// function to check if it is correct password
//if not correct try again.

logIn.addEventListener("click", passWordCheck);
NewAcc.addEventListener("click", AddNew);
//LogOut.addEventListener("click", passWordCheck);

//loop inside users

function passWordCheck() {
  for (const us of user) {
    if (nameInput.value === us.name && passWordInput.value === us.password) {
      // text.innerHTML = "YEY";
      // logIn.style.display = "none";
      // NewAcc.style.display = "none";
      // LogOut();
      LogdIn();
    }
  }
  // text.innerHTML = "Wrong Password, please try again";
}

// function for LogdIN

function LogdIn() {
  text.innerHTML = "Yey";
  form.style.display = "none";

  LogOut();
}

// funtion for tryAgain
function tryAgain() {
  text.innerHTML = "Wrong Password, please try again";
}

// new Account function
function AddNew() {}

//function for logOut
function LogOut() {
  let btnLogout = document.createElement("button");
  let btnText = document.createTextNode("Log out");

  btnLogout.appendChild(btnText);
  body.appendChild(btnLogout);
}

console.log(cont);

// log out function.
