
emailjs.init({
    publicKey: "ixJD719czlchbhO9U",
});

const success = document.querySelector(".success");
const error = document.querySelectorAll(".error");

const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const general = document.getElementById("general");
const support = document.getElementById("support");
const message = document.getElementById("message");
const confirm = document.getElementById("confirm");
const button = document.getElementById("card_button");

const radio = document.querySelectorAll(".radio_icon");
const check = document.querySelector(".check_icon");

function isValidEmail(emailValue) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailValue);
}

firstName.addEventListener("input", function () {
    if (firstName.value.trim() === "") {
        error[0].style.display = "block";
        firstName.classList.add("error_input");

    } else error[0].style.display = "none";
})

lastName.addEventListener("input", function () {
    if (lastName.value.trim() === "") {
        error[1].style.display = "block";
        lastName.classList.add("error_input");
    } else error[1].style.display = "none";
})

email.addEventListener("input", function () {
    if (email.value.trim() === "") {
        error[2].style.display = "block";
        email.classList.add("error_input");
    } else if (!isValidEmail(email.value)) {
        error[2].style.display = "block";
        email.classList.add("error_input");
    } else {
        error[2].style.display = "none";
    }
})

general.addEventListener("input", function () {
    if (general.checked || support.checked) {
        error[3].style.display = "none";
        radio[0].style.display = "block";
        radio[1].style.display = "none";

    } else {

        error[3].style.display = "block";
    }
})

support.addEventListener("input", function () {
    if (support.checked || general.checked) {
        error[3].style.display = "none";
        radio[1].style.display = "block";
        radio[0].style.display = "none";
    } else {
        error[3].style.display = "block";
    }
})

message.addEventListener("input", function () {
    if (message.value.trim() === "") {
        error[4].style.display = "block";
        message.classList.add("error_input");

    } else { error[4].style.display = "none" };
})


confirm.addEventListener("change", function () {
    if (confirm.checked) {
        error[5].style.display = "none";
        check.style.display = "block"

    } else {
        error[5].style.display = "block";
        check.style.display = "none"

    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (
        error[0].style.display === "none" &&
        error[1].style.display === "none" &&
        error[2].style.display === "none" &&
        error[3].style.display === "none" &&
        error[4].style.display === "none" &&
        error[5].style.display === "none"
    ) {
        success.style.display = "block";
        emailjs.sendForm("service_hgt251b", "template_ff9rakl", form)
            .then(() => {
                console.log(form);
                form.reset();

            })
            .catch((error) => {
                console.log("Email göndərilmədi:", error);

            });
    }

    setTimeout(function set() {
        success.style.display = "none";
    }, 5000);

});




// function sendMail () {
// let params = {
//     name: firstName.value,
//     lastName : lastName.value,
//     email : email.value,
//     message: message.value,

// };
// }
const service = service_hgt251b;
const template = template_ff9rakl;

