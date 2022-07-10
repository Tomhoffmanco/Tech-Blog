const { json } = require("sequelize/types");

const loginFormHandler = async function(event) {}
event.preventDefault();

const usernameE1 = document.querySelector("#username-input-login")
const passwordE1 = document.querySelector("#password-input-login")
fetch("api/user/login", {
    method: "post",
    body: JSON.stringify({
    username: usernameE1.value,
    password: passwordE1.value
}),
    headerrs: { "Content-Type": "application/json"}
})
    .then(function() {
        document.location.replace("/dashboard");
    }) 
    .catch(err => console.log(err));

    document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);