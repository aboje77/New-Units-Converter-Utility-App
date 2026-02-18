function convertToFeet() {
    const meters = document.getElementById("meters").value;
    const result = document.getElementById("result");
// conversion //
    if (meters === "" || isNaN(meters)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    const feet = meters * 3.28084;
    result.textContent = `${meters} meter(s) = ${feet.toFixed(2)} feet`;
}