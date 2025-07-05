let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let btn = e.target.innerHTML;

        if(btn == '=') {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch {
                document.querySelector('input').value = "Error";
                string = "";
            }
        } 

        else if(btn == 'C') {
            string ="";
            document.querySelector('input').value = string;
        }

        else if(btn == 'M+') {
            try {
                memory += parseFloat(eval(string || "0"));
                string = "";
                document.querySelector('input').value = "";
                console.log("Memory: " + memory);
            } catch {
                document.querySelector('input').value = "Error";
                string = "";
            }
        }

        else if(btn == 'M-') {
            try {
                memory -= parseFloat(eval(string || "0"));
                string = "";
                document.querySelector('input').value = "";
                console.log("Memory: " + memory);
            } catch {
                document.querySelector('input').value = "Error";
                string = "";
            }
        }

        else {
            string = string + btn;
            document.querySelector('input').value = string;
        }
    });
});
