const eyePass = document.querySelector(".eye-pass");
let password = document.querySelector("#password");

if (eyePass) {
  eyePass.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
    }
    password.type = "password";
  });
}

console.log(password.type);
