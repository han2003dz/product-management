let eyePass = document.querySelector(".eye-pass");
let password = document.querySelector("#password");

if (eyePass) {
  eyePass.addEventListener("click", () => {
    password.type = "text";
  });

  
}

console.log(password.type);
