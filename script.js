document.getElementById('convertButton').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitSelect').value;
    let result;

    if (isNaN(temperature)) {
        document.getElementById('output').innerText = 'Please enter a valid number.';
        return;
    }

    if (unit === 'Celsius') {
        result = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)}°F, Kelvin: ${(temperature + 273.15).toFixed(2)}K`;
    } else if (unit === 'Fahrenheit') {
        result = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)}°C, Kelvin: ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)}K`;
    } else if (unit === 'Kelvin') {
        result = `Celsius: ${(temperature - 273.15).toFixed(2)}°C, Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }

    document.getElementById('output').innerText = result;
});
