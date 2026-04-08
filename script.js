let display = document.getElementById("display");

    function append(value) {
        if (display.value === "0") display.value = "";
        display.value += value;
    }

    function clearDisplay() {
        display.value = "0";
    }

    function deleteLast() {
        display.value = display.value.slice(0, -1) || "0";
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }


    document.addEventListener("keydown", function(event) {
        let key = event.key;

        if (!isNaN(key) || "+-*/.%".includes(key)) {
            append(key);
        } 
        else if (key === "Enter") {
            calculate();
        } 
        else if (key === "Backspace") {
            deleteLast();
        } 
        else if (key === "Escape") {
            clearDisplay();
        }
    });