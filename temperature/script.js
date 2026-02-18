
// ===== Temperature Converter =====
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertTempBtn = document.getElementById('convert-temp');

convertTempBtn.addEventListener('click', () => {
    if (celsiusInput.value) {
        fahrenheitInput.value = (celsiusInput.value * 9/5 + 32).toFixed(2);
    } else if (fahrenheitInput.value) {
        celsiusInput.value = ((fahrenheitInput.value - 32) * 5/9).toFixed(2);
    } else {
        alert('Enter a value to convert!');
    }
});
