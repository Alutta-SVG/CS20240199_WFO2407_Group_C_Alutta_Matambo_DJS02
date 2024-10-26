const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

 // catch block to handle any errors
 try {
  // Checks for missing inputs 
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    result.style.color = "red"; // Change color to red for error
    return;
  }

//checks if inputs are numbers 
if (isNaN(dividend) || isNaN(divider)) {
  throw new Error('Non-numeric input provided');
}
//inputs to numbers 
const numDividend = parseFloat(dividend);
const numDivider = parseFloat(divider);

//checks for division by zero
if (numDivider === 0) {
  throw new Error('Division by zero is not allowed');
  }
  // perform division
  const quotient = Math.floor (numDividend / numDivider);
  result.innerText = `Result: ${quotient}`;
 } catch  (error) {
});