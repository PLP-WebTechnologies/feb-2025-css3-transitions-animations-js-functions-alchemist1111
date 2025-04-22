// Store the button's background color in localStorage when clicked
document.getElementById("colorButton").addEventListener("click", function() {
    const newColor = "#FF5733"; // New color to set
    localStorage.setItem("buttonColor", newColor);
    document.getElementById("colorButton").style.backgroundColor = newColor;
  
    // Trigger the bounce animation when the button is clicked
    this.classList.add("bounce-animation");
  
    // Remove animation class after it's done to allow for re-triggering
    setTimeout(() => {
      this.classList.remove("bounce-animation");
    }, 500); // Match the duration of the animation
  });
  
  // Retrieve stored background color from localStorage when the page loads
  window.onload = function() {
    const storedColor = localStorage.getItem("buttonColor");
    if (storedColor) {
      document.getElementById("colorButton").style.backgroundColor = storedColor;
    }
  };
  