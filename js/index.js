const form = document.querySelector("form");
const card_1 = document.querySelector(".container");
const card = document.querySelector(".card");
const mydiv = document.getElementById("mydiv");
const email = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = email.value.trim();

  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "" || !emailRegex.test(emailValue)) {
    // Display error message and change input background color
    mydiv.textContent = "Valid email required";
    email.style.background = "rgb(255 232 230)";
    email.style.color = "var(--Tomato)";
    email.style.borderColor = "var(--Tomato)";
  } else {
    // Clear error message and reset input background color
    mydiv.textContent = "";
    email.style.borderColor = "initial"; // Reset border color
    email.style.color = "initial"; // Reset text color
    email.style.background = "initial"; // Reset background color
    card_1.classList.add("hide");
    card.classList.remove("hide");
  }
});

// Add an event listener to reset styles when the email input changes
email.addEventListener("input", () => {
  mydiv.textContent = ""; // Clear error message
  email.style.borderColor = "initial"; // Reset border color
  email.style.color = "initial"; // Reset text color
  email.style.background = "initial"; // Reset background color
});
