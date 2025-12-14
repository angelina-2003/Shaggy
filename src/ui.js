export function updateUI(shaggy) {

    const hungerbar = document.getElementById("hunger-bar");
    const energybar = document.getElementById("energy-bar");
    const happinessbar = document.getElementById("happiness-bar");

    hungerbar.style.width = Math.max(5, shaggy.hunger) + "%";
    energybar.style.width = Math.max(5, shaggy.energy) + "%";
    happinessbar.style.width = Math.max(5, shaggy.happiness) + "%";

    // Hunger colour
    hungerbar.style.backgroundColor =
        shaggy.hunger < 30 ? "red" : shaggy.hunger > 70 ? "green" : "#ff9f68";

    // Energy colour
    energybar.style.backgroundColor =
        shaggy.energy < 25 ? "red" : shaggy.energy > 70 ? "green" : "#ff9f68";

    // Happiness colour
    happinessbar.style.backgroundColor =
        shaggy.happiness < 20 ? "red" : shaggy.happiness > 70 ? "green" : "#ff9f68";

    hungerbar.classList.toggle("pulse", shaggy.hunger < 30);

    energybar.classList.toggle("pulse", shaggy.energy < 25);
    happinessbar.classList.toggle("pulse", shaggy.happiness < 20);


    const img = document.getElementById("shaggy-img");
    img.src = `assets/shaggy-${shaggy.mood}.png`;

    const isInDanger =
    shaggy.hunger < 30 ||
    shaggy.energy < 25 ||
    shaggy.happiness < 20;

    img.classList.toggle("petDanger", isInDanger);
}
