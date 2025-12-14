
export function evaluateMood(shaggy) {
    if (shaggy.hunger < 30) {
        shaggy.mood = "hungry";
    } else if (shaggy.energy < 25) {
        shaggy.mood = "sleepy";
    } else if (shaggy.happiness < 20) {
        shaggy.mood = "sad";
    } else {
        shaggy.mood = "happy";
    }
}
