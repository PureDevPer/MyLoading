const inputs = document.querySelectorAll(".input");

function addList() {
  const parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function removeList() {
  const parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach(input => {
  input.addEventListener("focus", addList);
  input.addEventListener("blur", removeList);
});
