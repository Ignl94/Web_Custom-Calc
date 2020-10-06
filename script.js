import data from "./data.js";
let button = document.getElementsByClassName("fruit_buttons");
let display = document.querySelector("#display");
const fruits_buttons = document.getElementById("fruits");

display.innerHTML = "<p> This is a test for display </p>";

for (let i = 0; i < data.length; i++) {
  let img = document.createElement("img");
  img.src = data[i].img;
  let button = document.createElement("button");
  button.id = data[i].name;
  button.dataset.calories = data[i].calories;
  button.dataset.protein = data[i].protein;
  button.dataset.carbs = data[i].carbs;
  button.dataset.sugar = data[i].sugar;
  button.dataset.fiber = data[i].fiber;
  button.dataset.fat = data[i].fat;

  button.appendChild(img);
  fruits_buttons.appendChild(button);
}
