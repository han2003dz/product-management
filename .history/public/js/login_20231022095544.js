const eyePass = document.querySelector(".eye-pass");
const password = document.querySelector("#password");

if (eyePass) {
  eyePass.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
    }else{

    }
    
  });
}

console.log(password.type);
