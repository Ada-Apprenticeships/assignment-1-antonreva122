function temperatureConversion(temperature, fromScale, toScale){
    if (temperature === null || temperature === undefined || isNaN(temperature)) {
        throw new Error(' Invalid Temperature. Please provide a numeric value.');
    }

    fromScale = fromScale.toUpperCase();
    toScale = toScale.toUpperCase();

    const validScales = ['C', 'F', 'K'];
    if (!validScales.includes(fromScale) || !validScales.includes(toScale)) {
        throw new Error('Invalid scale. Use "C" for Celsius, "F" for Fahrenheit, or "K" for Kelvin.');
    }

    // Convert the temperature based on the scales
    if (fromScale === 'C') {
        if (toScale === 'F') {
            return (temperature * 9/5) + 32; // Celsius to Fahrenheit
        } else if (toScale === 'K') {
            return temperature + 273.15; // Celsius to Kelvin
        }
    } else if (fromScale === 'F') {
        if (toScale === 'C') {
            return (temperature - 32) * 5/9; // Fahrenheit to Celsius
        } else if (toScale === 'K') {
            return (temperature - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
        }
    } else if (fromScale === 'K') {
        if (toScale === 'C') {
            return temperature - 273.15; // Kelvin to Celsius
        } else if (toScale === 'F') {
            return (temperature - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
        }
    }

    return temperature; // If the original scale and desired scale are the same, Return the original temperature
}

export default temperatureConversion;




