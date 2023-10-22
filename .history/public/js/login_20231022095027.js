let eyePass = document.querySelector(".eye-pass");
let password = document.querySelector("#password");

if (eyePass) {
  eyePass.addEventListener("click", () => {
    if (password.type === "text") {
      password.type = "password";
    }
    password.type == "text"
  });
}

console.log(password.type);
