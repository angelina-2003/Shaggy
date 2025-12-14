export function updateUI(shaggy) {
    document.getElementById("hunger-value").textContent = shaggy.hunger;
    document.getElementById("energy-value").textContent = shaggy.energy;
    document.getElementById("happiness-value").textContent = shaggy.happiness;

    const img = document.getElementById("shaggy-img");
    img.src = `assets/shaggy-${shaggy.mood}.png`;
}

