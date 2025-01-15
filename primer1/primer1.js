function temperatureConversion(temperature, fromScale, toScale){
    if (temperature === null || temperature === undefined || typeof temperature === 'string' && isNaN(temperature)) {
        throw new Error(' Invalid Temperature. Please provide a numeric value.'); // Assuring that temperature is a number nothing else
    }

    const numTemp = Number(temperature); // Convert the temperature to a number
    fromScale = String(fromScale).toUpperCase(); // Making sure the scales are uppercase
    toScale = String(toScale).toUpperCase();

    const validScales = ['C', 'F', 'K'];
    if (!validScales.includes(fromScale) || !validScales.includes(toScale)) { // Bang operator is opposite of whats true
        throw new Error('Invalid scale. Use "C" for Celsius, "F" for Fahrenheit, or "K" for Kelvin.');
    }

    // Convert the temperature based on the scales
    if (fromScale === 'C') {
        if (toScale === 'F') {
            return (numTemp * 9/5) + 32; // Celsius to Fahrenheit
        } else if (toScale === 'K') {
            return numTemp + 273.15; // Celsius to Kelvin
        }
    } else if (fromScale === 'F') {
        if (toScale === 'C') {
            return (numTemp - 32) * 5/9; // Fahrenheit to Celsius
        } else if (toScale === 'K') {
            return (numTemp - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
        }
    } else if (fromScale === 'K') {
        if (toScale === 'C') {
            return numTemp - 273.15; // Kelvin to Celsius
        } else if (toScale === 'F') {
            return (numTemp - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
        }
    }

    return numTemp; // If the original scale and desired scale are the same, Return the original temperature
}

export default temperatureConversion;




