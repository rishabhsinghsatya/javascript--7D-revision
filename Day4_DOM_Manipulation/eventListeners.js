// Click Event
const button = document.querySelector(".button");
button.addEventListener("click", () => {
  alert("Button clicked!");
});

// Mouse Enter Event
const box = document.querySelector(".box");
box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "yellow";
});

// Form Submit Event
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  console.log("Form submitted!");
});
