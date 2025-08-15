const buttonValues = [
    "AC", "+/-", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];
const rightSymbols = ["+", "*", "-", "+", "=", "/"];
const topSymbols = ["AC", "+/-", "%"];

const display = document.getElementById("display");
let A = 0;
let operator = null;
let B = null;
for (let i = 0; i < buttonValues.length; i++){
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;


    if (value == "="){
        button.style.width = "200px";
        button.style.gridColumn ="span 2";
    }
    if (rightSymbols.includes(value)){
        button.style.backgroundColor ="hotpink";
        button.style.color = "white";
    }
    else if (topSymbols.includes(value)){
        button.style.backgroundColor = "white";
        button.style.color = "black";
    }
    button.addEventListener("click", function(){
       if (rightSymbols.includes(value)){
          if (value == "AC"){

          }
          else if (value == "+/-"){
             if (display.value != "" && display.value != "0"){
                
             }
          }
          else if (value == "%"){
            display.value = Number(display.value)/100;
          }
       }
       else if (topSymbols.includes(value)){
  
       }
       else {
        if (value == "."){
             if (display.value != "" && !display.value.includes(value)){

             }
        }
        else if (display.value == "0"){
            display = value;
        }
        else {
            display.value += value;
        }
       }
    });
    document.getElementById("buttons").appendChild(button);
}