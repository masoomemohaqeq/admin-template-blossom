document.getElementById("showPassword").addEventListener("click", () => {
  var passwordElement = document.getElementById("password");
  if (passwordElement.type == "password") {
    passwordElement.type = "text";
  } else {
    passwordElement.type = "password";
  }
});
