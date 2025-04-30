
// confirm password validation

let message = document.getElementById("password-msg");
document.forms[0].onsubmit = function (event) {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  let validPassword = false;
  console.log(document.forms[0].name.value);
  if (password !== "" && password == confirmPassword) {
    validPassword = true;
  } else {
    message.textContent = "passwords do  not match";
    message.style.color = "white";
    message.style.backgroundColor = "red";
  }

  if (validPassword == false) {
    event.preventDefault();
  }
};
