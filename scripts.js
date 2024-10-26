const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //resets the color 
  result.style.color = "#000";

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
  //error messages
  if (error.message === 'Non-numeric input provided') {
    console.error(error);
    document.body.innerHTML = '<h1 style="color: red;"> Something critical went wrong. Please reload the page.</h1>';
  }else if (error.message ==='Division by zero is not allowed') {
    console.error(error);
    result.innerText = 'Division not performed. Invalid number provided. Try again';
   result.style.color = "red";
    } else {
      throw error;  // rethrow the error
  }
  }
});