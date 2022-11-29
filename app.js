/* Update the calculator display when pressing number and operation buttons. If
*  the display is 0, set a new display unless the entered number is 0.
*  Otherwise, append the new operation/number to the display.
*/
function addToDisplay(btn) {
    let display = document.getElementById("display"), 
    val = display.getAttribute("value"), 
    btnVal = btn.getAttribute("value");
    if (val == "0") {
        display.setAttribute("value", btnVal);
        display.innerHTML = btn.innerHTML;
    } else {
        display.setAttribute("value", val + btnVal);
        display.innerHTML += btn.innerHTML;
    }
}

/* Reset calculator display fater clicking the "CLEAR button" */
function resetDisplay() {
    document.getElementById("display").setAttribute("value", "0");
    document.getElementById("display").innerHTML = "0";
}

/* Compute equation from user input. Uses the eval function for simplicity and to avoid writing my own parser. */
function compute() {
    let display = document.getElementById("display"),
    val = display.getAttribute("value");
    var res = eval(val);
    // Check if number isn't an integer and round to 10 decimal places if needed
    if (!Number.isInteger(res)) {
        res = res.toFixed(10);
    }
    // Limit number to 12 digits if necessary
    if (res >= 10 ** 12) {
        
    }
    display.setAttribute("value", res);
    display.innerHTML = res;
}