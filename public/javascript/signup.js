const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameE1 = document.querySelector("#username-input-signup");
  const passwordE1 = document.querySelector("#password-input-signup");
  fetch("api/user", {
    method: "post",
    body: JSON.stringify({
      username: usernameE1.value,
      password: passwordE1.value,
    }),
    headerrs: { "Content-Type": "application/json" },
  })
    .then(function () {
      document.location.replace("/dashboard");
    })
    .catch((err) => console.log(err));

  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);
};
