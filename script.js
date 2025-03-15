// List of motivational quotes
const quotes = [
    "Believe in yourself! You are capable of amazing things. 💪",
    "Small steps every day lead to big results! 🚀",
    "Your only limit is your mind. Keep pushing! 🏆",
    "Success is the sum of small efforts, repeated daily. ✨",
    "Every day is a new opportunity to grow and improve! 🌟"
];

// Function to get a random motivational quote
function getMotivation() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("motivation-text").innerText = quotes[randomIndex];
}

// Function to add a new habit to the list
function addHabit() {
    let habitInput = document.getElementById("habit-input");
    let habitText = habitInput.value.trim();
    
    if (habitText === "") {
        alert("Please enter a habit!");
        return;
    }

    let habitList = document.getElementById("habit-list");
    let li = document.createElement("li");
    li.innerHTML = `${habitText} <button onclick="removeHabit(this)">❌</button>`;
    
    habitList.appendChild(li);
    habitInput.value = "";
}

// Function to remove a habit
function removeHabit(button) {
    let li = button.parentElement;
    li.remove();
}
