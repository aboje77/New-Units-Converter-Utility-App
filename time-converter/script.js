function convertTime() {
    let input = parseFloat(document.getElementById("timeInput").value);
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;

    if (isNaN(input)) {
        document.getElementById("result").innerText = "Please enter a valid number";
        return;
    }

    // Convert everything to seconds first
    let seconds;

    switch(from) {
        case "seconds":
            seconds = input;
            break;
        case "minutes":
            seconds = input * 60;
            break;
        case "hours":
            seconds = input * 3600;
            break;
        case "days":
            seconds = input * 86400;
            break;
    }

    // Convert seconds to target unit
    let result;

    switch(to) {
        case "seconds":
            result = seconds;
            break;
        case "minutes":
            result = seconds / 60;
            break;
        case "hours":
            result = seconds / 3600;
            break;
        case "days":
            result = seconds / 86400;
            break;
    }

    document.getElementById("result").innerText =
        input + " " + from + " = " + result + " " + to;
}
