// Assign input element to value
var inp = document.getElementById("txt_test");
// Assign input element to value
var inpLabel = document.getElementById("label");
// Assign input element to value
let inpVal = document.getElementById("txt_test").value;
// Assign inital value to input element
inpVal = "Patrick";
// Instantiate boolean to track change in value
change = false;

inp.addEventListener('click', function (e) {
    // Console log inputs current value upon focus
    console.log(inpVal);
    inp.addEventListener('keydown', function (e) {
        // change boolean upon user input
        change = true;
        // If new input value, console log said value upon element blur
        inp.onblur = function() {
            if (change == true) {
                console.log(inp.value);
                // assign new value as input value if change took place
                inpVal = inp.value;
            }
            // restore boolean to continue tracking change
            change = false;
        };
    });
});

// Checks for empty input value upon blur of input element
function outFunction () {
    if (inp.value == "") {
        inp.style.color = 'red';
        inpLabel.style.color = 'red';
    };
};