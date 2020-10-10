import data from "./data.js";
let display = document.querySelector("#display");
let smoothie_output = document.querySelector("#smoothie");
const fruits_buttons = document.getElementById("fruits");

display.innerHTML = "<h2>Smoothie Stats: </h2> \n";

for (let i = 0; i < data.length; i++) {
  let img = document.createElement("img");
  img.src = data[i].img;
  let button = document.createElement("button");
  button.id = data[i].name;
  button.class = "fruits";
  button.dataset.calories = data[i].calories;
  button.dataset.protein = data[i].protein;
  button.dataset.carbs = data[i].carbs;
  button.dataset.sugar = data[i].sugar;
  button.dataset.fiber = data[i].fiber;
  button.dataset.fat = data[i].fat;
  button.dataset.img = img.src;

  button.appendChild(img);
  fruits_buttons.appendChild(button);
}
const blend_button_div = document.getElementById("blend");
let blend_button = document.createElement("input");
blend_button.type = "button";
blend_button.value = "Blend!";
blend_button_div.appendChild(blend_button);

const all_fruits_button = Array.from(document.querySelectorAll("button"));
all_fruits_button.forEach((elt) =>
  elt.addEventListener("click", () => {
    fruit_count(
      elt.getAttribute("id"),
      elt.getAttribute("data-calories"),
      elt.getAttribute("data-protein"),
      elt.getAttribute("data-carbs"),
      elt.getAttribute("data-sugar"),
      elt.getAttribute("data-fiber"),
      elt.getAttribute("data-fat"),
      elt.getAttribute("data-img")
    );
  })
);

blend_button.addEventListener("click", blend);

// Smoothie stats and function //

const smoothie_stats = {
  calories: 0,
  protein: 0,
  carbs: 0,
  sugar: 0,
  fiber: 0,
  fat: 0,
};

function fruit_count(name, calories, protein, carbs, sugar, fiber, fat, img) {
  // display.innerHTML += `${name} Total Serving: ${serving_prompt}`;

  smoothie_stats.calories =
    parseInt(smoothie_stats.calories) + parseInt(calories);
  smoothie_stats.protein = parseInt(smoothie_stats.protein) + parseInt(protein);
  smoothie_stats.carbs = parseInt(smoothie_stats.carbs) + parseInt(carbs);
  smoothie_stats.sugar = parseInt(smoothie_stats.sugar) + parseInt(sugar);
  smoothie_stats.fiber = parseInt(smoothie_stats.fiber) + parseInt(fiber);
  smoothie_stats.fat = parseInt(smoothie_stats.fat) + parseInt(fat);
  display.innerHTML += `<img src = "${img}" width = "40px" height = "40px" /> `;
  console.log(smoothie_stats);
}

function blend() {
  smoothie_output.innerHTML = "";
  smoothie_output.innerHTML = `Calories: ${smoothie_stats.calories}, \n Carbs: ${smoothie_stats.carbs}, \n 
  Protein: ${smoothie_stats.protein}, 
  Sugar: ${smoothie_stats.sugar}, \n Fiber: ${smoothie_stats.fiber}, \n
  Fat: ${smoothie_stats.fat}`;
  // ---------------- CLEAR SMOOTHIE STATS --------------------------------- //
  smoothie_stats.calories = 0;
  smoothie_stats.protein = 0;
  smoothie_stats.carbs = 0;
  smoothie_stats.sugar = 0;
  smoothie_stats.fiber = 0;
  smoothie_stats.fat = 0;
}
