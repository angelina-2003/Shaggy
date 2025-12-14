import {shaggy} from "./state.js";
import {updateUI} from "./ui.js";
import {evaluateMood} from "./logic.js";

updateUI(shaggy);

setInterval(() => {

    shaggy.hunger -= 10;
    shaggy.energy -= 10;
    shaggy.happiness -= 10;

    evaluateMood(shaggy);
    updateUI(shaggy);

}, 3000); 

// Feed action
document.getElementById("feed-button").addEventListener("click", () => {
    shaggy.hunger += 20;
    evaluateMood(shaggy);
    updateUI(shaggy);
});


// Play action
document.getElementById("play-button").addEventListener("click", () => {
    shaggy.happiness += 15;
    evaluateMood(shaggy);
    updateUI(shaggy);
})


// sleep action
document.getElementById("sleep-button").addEventListener("click", () => {
    shaggy.energy += 25;
    evaluateMood(shaggy);
    updateUI(shaggy);
})
