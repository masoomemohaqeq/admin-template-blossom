// Toggle Floating Menu
document.body.addEventListener("click", function (event) {
  let isClickInside = [
    ...document.querySelectorAll(".toggle-floating-btn"),
  ].some((el) => el.contains(event.target));
  let allChkTogglers = document.querySelectorAll(".toggle-floating-menu");
  if (isClickInside) {
    let specifiedInput = event.target
      .closest(".floating-menu-container")
      .querySelector(".toggle-floating-menu");

    allChkTogglers.forEach((el) => {
      if (el != specifiedInput) el.checked = false;
    });

    specifiedInput.checked = !specifiedInput.checked;
  } else {
    allChkTogglers.forEach((el) => {
      el.checked = false;
    });
  }
});
