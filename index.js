let count = 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const message = document.getElementById("message");

incrementBtn.addEventListener("click", () => {
    if (count < 10) {
        count++;
        message.textContent = "";
    } else {
        message.textContent = "Maximum limit reached (10)";
    }
    countDisplay.textContent = count;
});

decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        message.textContent = "";
    } else {
        message.textContent = "Minimum limit reached (0)";
    }
    countDisplay.textContent = count;
});
