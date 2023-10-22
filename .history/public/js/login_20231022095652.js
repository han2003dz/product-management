const eyePass = document.querySelector(".eye-pass");
const password = document.querySelector("#password");

if (eyePass) {
  eyePass.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
      eyePass.classList.remove("bi-eye-fill");
      eyePass.classList.add("")
    } else {
      password.type = "password";
    }
  });
}

console.log(password.type);
