const data = [
  { name: "Здание А", left: 1.424, top: 8.9, mark: "blue" },
  { name: "Здание Б", left: 3.4, top: 7.1, mark: "blue" },
  { name: "ЖД-1", left: 1.7, top: 4.8, mark: "green" },
  { name: "ЖД-2", left: 1.387, top: 4.11, mark: "blue" },
  { name: "Стадион", left: 2.9, top: 4.0, mark: "green" },
  { name: "Кассы", left: 1.81, top: 3.09, mark: "blue" },
  { name: "Мемориал", left: 4.38, top: 2.74, mark: "blue" },
  { name: "Комплекс-1", left: 1.501, top: 2.9, mark: "green" },
  { name: "Комплекс-2", left: 1.232, top: 2.76, mark: "blue" },
  { name: "Отель", left: 1.789, top: 2.455, mark: "green" },
];

const addButtons = () => {
  buttons.innerHTML = "";
  data.forEach((item) => {
    let newButton = document.createElement("button");
    newButton.classList.add("map__button");
    newButton.classList.add(`map__button_${item.mark}`);
    newButton.innerHTML = `<span>${item.name}</span>`;

    newButton.style.left = Math.floor(window.innerWidth / item.left) + "px";
    newButton.style.top = Math.floor(window.innerWidth / item.top) + "px";

    buttons.append(newButton);
  });
};

const buttons = document.querySelector(".map__buttons");

buttons.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.classList.toggle("map__button_open");
    return;
  }

  const buttonsList = document.querySelectorAll(".map__button");
  buttonsList.forEach((button) => button.classList.remove("map__button_open"));
});

window.addEventListener("resize", addButtons);
window.addEventListener("load", addButtons);
