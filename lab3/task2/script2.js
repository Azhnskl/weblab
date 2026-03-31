const input_1 = document.getElementById("input1");
const input_2 = document.getElementById("input2");
const subm = document.getElementById("subbtn");
const resultContainer = document.getElementById("result"); // a div to show result

function plus() {
    const num1 = Number(input_1.value);
    const num2 = Number(input_2.value);
    // const p = document.createElement("p"); // create p each time
    // p.textContent = num1 + num2;
    // resultContainer.appendChild(p);
    alert(num1+num2);
}

subm.addEventListener("click", plus);
