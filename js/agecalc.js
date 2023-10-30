function calculateAge() {
    const input = document.getElementById("input");
    const output = document.getElementById("output");

    const birthdate = new Date(input.value);
    const currentDate = new Date();

    const ageMilliseconds = currentDate - birthdate;
    const ageYears = ageMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    if(input.value)
        output.innerHTML = "Dein aktuelles Alter in Jahren beträgt: " + ageYears.toFixed(10);
}

const today = new Date();
const todayString = today.toISOString().split('T')[0];
const birthdateInput = document.getElementById("input");
birthdateInput.max = todayString;

setInterval(calculateAge, 50);