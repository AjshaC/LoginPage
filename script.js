const body = document.querySelector("body");
const text = document.querySelector("h1");
const form = document.querySelector(".form");
const nameInput = document.querySelector(".name");
const passWordInput = document.querySelector(".password");
const logIn = document.querySelector(".LoginBtn");
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

//loop inside users

function passWordCheck() {
  for (const us of user) {
    if (nameInput.value === us.name && passWordInput.value === us.password) {
      text.innerHTML = "YEY";
    }
  }
  text.innerHTML = "Wrong Password, please try again";
}

console.log(user[0]);

// new Account function
function newAccount() {}

// log out function.
