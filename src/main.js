import {shaggy} from "./state.js";
import {updateUI} from "./ui.js";
import {evaluateMood} from "./logic.js";

updateUI(shaggy);

setInterval(() => {

    if (shaggy.hunger > 0) shaggy.hunger -= 5;
    if (shaggy.energy > 0) shaggy.energy -= 5;
    if (shaggy.happiness > 0) shaggy.happiness -= 5;
    
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
