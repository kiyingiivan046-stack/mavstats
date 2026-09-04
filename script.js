// MaveriQuant Analytics
// Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    console.log("MaveriQuant Analytics website loaded successfully.");

});
fetch("header.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load header.html");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch(error => {
        console.error("Header loading error:", error);
    });