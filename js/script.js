// JavaScript for the Luas Calculator
function hitungLuas() {
    var sisi = document.getElementById("luasSisi").value;
    var luas = sisi * sisi;

    var luasOutput = document.getElementById("luasOutput");
    luasOutput.innerHTML = "Hasil Perhitungan Luas: " + luas + " satuan luas";

    // Display the result container and formula
    document.getElementById("luasContainer").style.display = "block";
}

// JavaScript for the Keliling Calculator
function hitungKeliling() {
    var sisi = document.getElementById("kelilingSisi").value;
    var keliling = 4 * sisi;

    var kelilingOutput = document.getElementById("kelilingOutput");
    kelilingOutput.innerHTML = "Hasil Perhitungan Keliling: " + keliling + " satuan panjang";

    // Display the result container and formula
    document.getElementById("kelilingContainer").style.display = "block";
}

// Add event listeners for the reset buttons to clear the results
document.getElementById("luasReset").addEventListener("click", function () {
    document.getElementById("luasSisi").value = ""; // Clear input
    document.getElementById("luasOutput").innerHTML = ""; // Clear result
    document.getElementById("luasContainer").style.display = "none"; // Hide container
});

document.getElementById("kelilingReset").addEventListener("click", function () {
    document.getElementById("kelilingSisi").value = ""; // Clear input
    document.getElementById("kelilingOutput").innerHTML = ""; // Clear result
    document.getElementById("kelilingContainer").style.display = "none"; // Hide container
});

// Hide result containers on page load
document.getElementById("luasContainer").style.display = "none";
document.getElementById("kelilingContainer").style.display = "none";

// Add this JavaScript code at the end or in a separate script file
document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    var currentYear = new Date().getFullYear();

    // Set the text in the footer
    document.getElementById("footer").innerHTML = "Created by @msyn - " + currentYear;
});
e