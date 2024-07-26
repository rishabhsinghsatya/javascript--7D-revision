// Create and Append Elements
const newDiv = document.createElement("div");
newDiv.textContent = "I am a dynamically created div!";
document.body.appendChild(newDiv);

// Remove Elements
const elementToRemove = document.querySelector(".remove-me");
if (elementToRemove) {
  elementToRemove.remove();
}
