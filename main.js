// Add an Event Listener to the button to run the placeOrder function
document.getElementById("btn").addEventListener("click", btnClicked);

// Store order code in a function
function btnClicked() {
    // INPUT
    let num1 = +document.getElementById("num1-in").value;
    let num2 = +document.getElementById("num2-in").value;

    // PROCESS
    let total = num1 + num2;

    // OUTPUT
    document.getElementById("output").innerHTML = total;
}