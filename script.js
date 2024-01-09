function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var inputUnitSelect = document.getElementById("inputUnit");
    var outputUnitSelect = document.getElementById("outputUnit");

    if (isNaN(temperatureInput) || temperatureInput === "") {
        alert("Please enter a valid number for temperature.");
        return;
    }

    var temperature = parseFloat(temperatureInput);
    var convertedTemperature = 0;

    var inputUnit = inputUnitSelect.options[inputUnitSelect.selectedIndex].value;
    var outputUnit = outputUnitSelect.options[outputUnitSelect.selectedIndex].value;

    switch (inputUnit) {
        case "celsius":
            convertedTemperature = convertToCelsius(temperature, outputUnit);
            break;
        case "fahrenheit":
            convertedTemperature = convertToFahrenheit(temperature, outputUnit);
            break;
        case "kelvin":
            convertedTemperature = convertToKelvin(temperature, outputUnit);
            break;
        default:
            break;
    }

    displayResult(convertedTemperature, outputUnit);
}

function convertToCelsius(temperature, outputUnit) {
    switch (outputUnit) {
        case "celsius":
            return temperature;
        case "fahrenheit":
            return (temperature * 9/5) + 32;
        case "kelvin":
            return temperature + 273.15;
        default:
            return 0;
    }
}

function convertToFahrenheit(temperature, outputUnit) {
    switch (outputUnit) {
        case "celsius":
            return (temperature - 32) * 5/9;
        case "fahrenheit":
            return temperature;
        case "kelvin":
            return (temperature - 32) * 5/9 + 273.15;
        default:
            return 0;
    }
}

function convertToKelvin(temperature, outputUnit) {
    switch (outputUnit) {
        case "celsius":
            return temperature - 273.15;
        case "fahrenheit":
            return (temperature - 273.15) * 9/5 + 32;
        case "kelvin":
            return temperature;
        default:
            return 0;
    }
}

function displayResult(convertedTemperature, unit) {
    var resultContainer = document.getElementById("result");
    var convertedTemperatureSpan = document.getElementById("convertedTemperature");
    var convertedUnitSpan = document.getElementById("convertedUnit");

    convertedTemperatureSpan.textContent = convertedTemperature.toFixed(2);
    convertedUnitSpan.textContent = unit;

    resultContainer.style.display = "block";
}

// Remove the duplicate convertTemperature function with background color change
