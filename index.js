const form = document.querySelectorAll("form"),
  submitInput = form[0].querySelector('input[type="submit"]');

function getDataForm(e) {
  e.preventDefault();

  var formData = new FormData(form[0]);
  let inputText = formData.get("InputText");
  let font = formData.get("font");
  console.log(formData.get("InputText") + formData.get("font"));

  let displayData = document.querySelector("#display-text");

  displayData.className = " ";
  displayData.innerHTML = inputText;
  displayData.classList.add(font);
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    submitInput.addEventListener("click", getDataForm, false);
  },
  false
);
