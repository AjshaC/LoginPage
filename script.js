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

function passWordCheck() {
  if (
    nameInput.value === user[0].name &&
    passWordInput.value === user[0].password
  ) {
    text.innerHTML = "YEY";
  } else {
    text.innerHTML = "try again";
  }
}

//loop inside users

// log out function.
