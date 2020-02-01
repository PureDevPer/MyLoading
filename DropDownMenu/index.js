const selected = document.querySelector(".selected");
const selectBoxOptions = document.querySelector(".selectBox__options");
const options = document.querySelectorAll(".selectBox__options-option");
const clock = document.querySelector(".clock");
const clockTitle = clock.querySelector("h1");
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const handleSelected = () => {
  selected.addEventListener("click", () =>
    selectBoxOptions.classList.toggle("active")
  );
};

const handleOptions = () => {
  options.forEach(option => {
    option.addEventListener("click", () => {
      selected.innerHTML = option.querySelector("label").innerHTML;
      selectBoxOptions.classList.remove("active");
    });
  });
};

const getTime = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const time = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  const dateOfweek = week[date.getDay()];
  clockTitle.innerText = `${date.getMonth() +
    1}/${date.getDate()}/${date.getFullYear()} ${time} ${dateOfweek}`;
};

const init = () => {
  getTime();
  handleSelected();
  handleOptions();
  setInterval(getTime, 1000);
};

init();
