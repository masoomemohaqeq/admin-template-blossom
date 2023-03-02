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

document.addEventListener("DOMContentLoaded", () => {
  // Toggle dark mode
  themeChktoggler = document.querySelector("#toggle-dark-mode");

  let theme = "light";

  if (localStorage.getItem("theme")) theme = localStorage.getItem("theme");
  else localStorage.setItem("theme", "light");

  document.documentElement.dataset.mode = theme;
  themeChktoggler.checked = theme == "dark";
  themeChktoggler.addEventListener("change", (e) => {
    if (e.target.checked) {
      e.target.checked = true;
      document.documentElement.dataset.mode = "dark";

      localStorage.setItem("theme", "dark");
    } else {
      e.target.checked = false;
      document.documentElement.dataset.mode = "light";

      localStorage.setItem("theme", "light");
    }
  });

  // Tab

  [...document.querySelectorAll(".chk-tab")].forEach((chkEl) => {
    chkEl.addEventListener("change", (e) => {
      [
        ...document.querySelectorAll(`.label-tab[data-tab="${e.target.name}"]`),
      ].forEach((labelEl) => {
        labelEl.classList.remove("active-tab");
      });
      document
        .querySelector(`.label-tab[for="${e.target.id}"]`)
        .classList.add("active-tab");
    });
  });
});
