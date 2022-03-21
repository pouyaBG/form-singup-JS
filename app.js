const password = document.querySelector(".userpass");
const confirmPassword = document.querySelector(".userConfirmPass");

const loginButton = document.querySelector(".btn-log");

loginButton.addEventListener("click", showEror)


function showEror() {
  // check null fild
  const username = document.querySelector(".username").value;
  const useremail = document.querySelector(".useremail").value;
  const userpass = document.querySelector(".userpass").value;
  const userConfirmPass = document.querySelector(".userConfirmPass").value;

  if (username == "" || useremail == "" || userpass == "" || userConfirmPass == "") {
    const alert = document.querySelector(".alert-null");
    alert.style.display = "flex"
    window.scroll(0, 0);
    setTimeout(() => {
      alert.style.display = "none"
    }, 3000)
  }
  // password
  const erore1 = document.querySelector(".eror-pass");

  if (password.value.length < 8) {
    erore1.style.display = "block";
    setTimeout(() => {
      erore1.style.display = "none";
    }, 3000)
  }
  // check
  const erore3 = document.querySelector(".eror-check");
  if (password.value != confirmPassword.value) {
    erore3.style.display = "block"
    setTimeout(() => {
      erore3.style.display = "none"
    }, 3000)
  }
  // ceck anser security 
  const inputUser = document.querySelector("#user-anser");
  const erorSecurity = document.querySelector(".eror-security")
  if (inputUser.value == randomNumber.innerHTML - result.innerHTML) {
  } else {
    erorSecurity.style.display = "block";
    result.innerHTML = Math.floor(Math.random() * 10 + 1);
    randomNumber.innerHTML = Math.floor(Math.random() * 100 + 10);
    inputUser.value = '';
    setTimeout(() => {
      erorSecurity.style.display = "none";
    }, 3000)
  }
}

// security check
const result = document.querySelector("#random-result");
const randomNumber = document.querySelector("#random-number");
result.innerHTML = Math.floor(Math.random() * 10 + 1);
randomNumber.innerHTML = Math.floor(Math.random() * 100 + 10);

// clear password and confirm password
const buttonClear = document.querySelector("#visiblity-toggle");
buttonClear.addEventListener("click", clearPassword)
function clearPassword() {
  password.value = "";
}
const buttonClearTwo = document.querySelector("#visiblity-toggle-two");
buttonClearTwo.addEventListener("click", clearConfirmPassworld)
function clearConfirmPassworld() {
  confirmPassword.value = "";
}

// show pass
const buttonShowPasswords = document.querySelector("#show-pass");
buttonShowPasswords.addEventListener("click", showPassword);
function showPassword() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password"
  }
}
// confirem show password
const buttonShowConfiremPasswords = document.querySelector("#show-pass-two");
buttonShowConfiremPasswords.addEventListener("click", showConfiremPassword);
function showConfiremPassword() {
  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
  } else {
    confirmPassword.type = "password"
  }
}


// hover
const inputGroup = document.querySelector(".input-group");
const divInput = document.querySelector(".hover")
inputGroup.addEventListener("focusin", () => {
  inputGroup.classList.add("input-group-hover");
  divInput.classList.add("input-bgc")
});
inputGroup.addEventListener("focusout", () => {
  inputGroup.classList.remove("input-group-hover")
  divInput.classList.remove("input-bgc")
});
const inputGroupTwo = document.querySelector(".input-group-two");
const divInputTwo = document.querySelector(".hover-two")
inputGroupTwo.addEventListener("focusin", () => {
  inputGroupTwo.classList.add("input-group-hover")
  divInputTwo.classList.add("input-bgc")
});
inputGroupTwo.addEventListener("focusout", () => {
  inputGroupTwo.classList.remove("input-group-hover")
  divInputTwo.classList.remove("input-bgc")
});
const inputGroupThree = document.querySelector(".input-group-three");
const divIputThreee = document.querySelector(".hover-three");
inputGroupThree.addEventListener("focusin", () => {
  inputGroupThree.classList.add("input-group-hover");
  divIputThreee.classList.add("input-bgc")
});
inputGroupThree.addEventListener("focusout", () => {
  inputGroupThree.classList.remove("input-group-hover");
  divIputThreee.classList.remove("input-bgc")
});
