new TomSelect("#country", {
  create: true,
  sortField: {
    field: "text",
    direction: "asc",
  },
});

//Form validation
var profileForm = document.getElementById("profile-form");

// create the pristine instance
var pristine = new Pristine(profileForm, {
  classTo: "input-group",
  errorTextParent: "input-group",
});

var countryEl = document.getElementById("country-ts-control");

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

profileForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // check if the form is valid
  var valid = pristine.validate(); // returns true or false
});
