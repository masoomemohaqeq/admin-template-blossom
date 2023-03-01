document.addEventListener("DOMContentLoaded", () => {
  const showPasswordBtn = document.getElementById("showPassword");
  showPasswordBtn.addEventListener("click", () => {
    var passwordElement = document.getElementById("password");
    if (passwordElement.type == "password") {
      passwordElement.type = "text";

      showPasswordBtn.classList.add("fa-eye-slash");
      showPasswordBtn.classList.remove("fa-eye");
    } else {
      passwordElement.type = "password";

      showPasswordBtn.classList.remove("fa-eye-slash");
      showPasswordBtn.classList.add("fa-eye");
    }
  });
});
