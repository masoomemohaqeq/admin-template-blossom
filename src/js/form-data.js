var productForm = document.getElementById("product-form");

// create the pristine instance
var pristine = new Pristine(productForm, {
  classTo: "input-group",
  errorTextParent: "input-group",
});

// Form select
new TomSelect("#tags", {
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

// Form Dropzone
Dropzone.autoDiscover = false;
let myDropzone = new Dropzone("div#productDropzone", { url: "/file/post" });

// create the pristine instance
var pristine = new Pristine(form, {
  classTo: "input-group",
  errorTextParent: "input-group",
});

var profileForm = document.getElementById("product-form");

var countryEl = document.getElementById("category-ts-control");

pristine.addValidator(
  countryEl,
  function (value) {
    if (value.length) {
      return true;
    }
    return false;
  },
  "This field is required",
  2,
  false
);

var tagsEl = document.getElementById("tags-ts-control");

pristine.addValidator(
  tagsEl,
  function (value) {
    if (value.length) {
      return true;
    }
    return false;
  },
  "This field is required",
  2,
  false
);

profileForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // check if the form is valid
  var valid = pristine.validate(); // returns true or false
});
