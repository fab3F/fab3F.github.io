function calculateAge() {
    const input = document.getElementById("input");
    const output = document.getElementById("output");

    const birthdate = new Date(input.value);
    const currentDate = new Date();

    birthdate.setHours(currentDate.getHours());

    const ageMilliseconds = currentDate - birthdate;
    const ageYears = ageMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    if (input.value)
        output.innerHTML = "Dein aktuelles Alter in Jahren beträgt: " + formatAgeYears(ageYears);
}

function formatAgeYears(ageYears) {
    const parts = ageYears.toString().split('.');
    const yearPart = parts[0];
    const decimalPart = parts.length > 1 ? '.' + parts[1] : '';
    return `<span style="font-size: larger;">${yearPart}</span>${decimalPart}`;
}

const today = new Date();
const todayString = today.toISOString().split('T')[0];
const birthdateInput = document.getElementById("input");
birthdateInput.max = todayString;

setInterval(calculateAge, 50);