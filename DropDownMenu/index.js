const selected = document.querySelector(".selected");
const selectBoxOptions = document.querySelector(".selectBox__options");
const options = document.querySelectorAll(".selectBox__options-option");

selected.addEventListener("click", () =>
  selectBoxOptions.classList.toggle("active")
);

options.forEach(option => {
  option.addEventListener("click", () => {
    selected.innerHTML = option.querySelector("label").innerHTML;
    selectBoxOptions.classList.remove("active");
    console.log(selected.innerHTML);
  });
});
