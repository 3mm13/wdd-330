function getInput() {
  let input = document.querySelector("#input");
  let output = document.querySelector("#output");

  //console.log(input.value);
  output.textContent = input.value;
}
let button = document.querySelector("#button");




function summing() {
  let input = document.querySelector("#input");
  let output = document.querySelector("#output");
  let number = parseInt(input.value);
  let sum = 0;
  if (Number.isInteger(number)) {
    for (let i = 1; i < number + 1; i++) {
      sum += i;
    }
    output.textContent = sum;
  }
  else{
      output.textContent = "That wasn't a number, try again!";
  }
}

//button.addEventListener("click", summing);


function addition() {
    let input = document.querySelector("#input");
    let input2= document.querySelector("#input2");
    let output = document.querySelector("#output");
    let number = parseInt(input.value);
    let number2 = parseInt(input2.value);
    let sum = 0;
    if (Number.isInteger(number) && Number.isInteger(number2)) {
        sum = number + number2;
        output.textContent = sum;
    }
    else{
        output.textContent = "That wasn't a number, try again!";
    }

}
button.addEventListener("click", addition);

let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");


button2.addEventListener("click", () => {
    let input = document.querySelector("#input");
    let input2= document.querySelector("#input2");
    let output = document.querySelector("#output");
    let number = parseInt(input.value);
    let number2 = parseInt(input2.value);
    let product = 0;
    if (Number.isInteger(number) && Number.isInteger(number2)) {
        product = number * number2;
        output.textContent = product;
    }
    else{
        output.textContent = "That wasn't a number, try again!";
    }
});


button3.addEventListener("click", function() {
    let input = document.querySelector("#input");
    let input2= document.querySelector("#input2");
    let output = document.querySelector("#output");
    let number = parseInt(input.value);
    let number2 = parseInt(input2.value);
    let difference = 0;
    if (Number.isInteger(number) && Number.isInteger(number2)) {
        difference = number - number2;
        output.textContent = difference;
    }
    else{
        output.textContent = "That wasn't a number, try again!";
    }
});