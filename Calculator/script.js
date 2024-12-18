const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let inputString = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "AC") {
      inputString = "";
    } else if (button.textContent === "DEL") {
      inputString = inputString.slice(0, -1);
    } else if (button.textContent === "=") {
      try {
        inputString = eval(inputString).toString();
      } catch (error) {
        inputString = "Error";
      }
    } else {
      inputString += button.textContent;
    }
    inputBox.value = inputString;
  });
});
