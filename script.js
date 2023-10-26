


//--cel to fah
document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius2");
    const fahrenheitInput = document.getElementById("fahrenheit2");
    const convertButton = document.getElementById("convertButton2");

    
    convertButton.addEventListener("click", function () {
        const celsiusValue = parseFloat(celsiusInput.value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
        } else {
            alert("Please enter a valid temperature in Celsius.");
        }
    });
});

//--fah to cel

document.addEventListener("DOMContentLoaded", function () {
    const fahrenheitInput = document.getElementById("celsius");
    const celsiusInput = document.getElementById("fahrenheit");
    const convertButton = document.getElementById("convertButton");

    
    convertButton.addEventListener("click", function () {
        const celsiusValue = parseFloat(fahrenheitInput.value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = ((celsiusValue -32)*5/9);
            celsiusInput.value = fahrenheitValue.toFixed(2);
        } else {
            alert("Please enter a valid temperature in Fahrenheit.");
        }
    });
});




