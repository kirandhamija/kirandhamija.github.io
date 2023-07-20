/*let email = document.querySelector('[type="email"]');
let password = document.querySelector('[type="[password"]');
let form = document.querySelector("form");
let feedback = document.querySelector(".feedback");

form.addEventListener("submit"), function (feedback) {
    if (email === "Kir@Kir" && password === "@12345") {
        feedback = "You are Authorized";
    }
    else {
        feedback = "You are unauthorized, Access Denied";
    }
    document.getElementById("feedback").innerHTML = feedback;
}*/

document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    let feedback = document.querySelector("#feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.querySelector('input[type="email"]');
        let password = document.querySelector('input[type="password"]');

        if (email.value === "Kir@Kir" && password.value === "@12345") {
            feedback.textContent = "You are Authorized";
        } else {
            feedback.textContent = "You are unauthorized, Access Denied";
        }
    });
});