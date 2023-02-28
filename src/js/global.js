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

  // Form select
  new TomSelect("#product-tags", {
    plugins: {
      remove_button: {
        title: "Remove this item",
      },
    },
    persist: false,
    createOnBlur: true,
    create: true,
    onDelete: function (values) {
      return confirm(
        values.length > 1
          ? "Are you sure you want to remove these " + values.length + " items?"
          : 'Are you sure you want to remove "' + values[0] + '"?'
      );
    },
  });
  new TomSelect("#category", {
    create: true,
    sortField: {
      field: "text",
      direction: "asc",
    },
  });

  // Form Ckeditor
  ClassicEditor.create(document.querySelector("#editor")).catch((error) => {
    console.error(error);
  });
});
