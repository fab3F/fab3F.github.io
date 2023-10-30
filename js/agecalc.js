function calculateAge() {
    const input = document.getElementById("input");
    const output = document.getElementById("output");

    const birthdate = new Date(input.value);
    const currentDate = new Date();

    const ageMilliseconds = currentDate - birthdate;
    const ageYears = ageMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    output.innerHTML = "Dein aktuelle Alter beträgt " + ageYears.toFixed(10) + " Jahre."
}

// Set max attribute to today's date
const today = new Date();
const todayString = today.toISOString().split('T')[0];
const birthdateInput = document.getElementById("input");
birthdateInput.max = todayString;

// Update age on input change
birthdateInput.addEventListener("input", setInterval(calculateAge, 10));