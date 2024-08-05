const form = document.querySelector(".form");
const buttonDismiss = document.querySelector(".btn--dismiss");
const successMessage = document.querySelector(".success");
const main = document.querySelector(".main");
const formInput = document.querySelector(".form__input");
const invalidInput = document.querySelector(".invalid");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (formInput.value === "") {
    formInput.classList.add("form__input--special");
    invalidInput.style.display = "block";
    return;
  }

  successMessage.classList.add("succesDisplay");
  main.style.display = "none";
  formInput.value = "";
});

buttonDismiss.addEventListener("click", function () {
  successMessage.classList.remove("succesDisplay");
  main.style.display = "flex";
});
