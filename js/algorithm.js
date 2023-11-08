

function calculate() {
    let a = parseFloat(document.getElementById('numberInput').value);
    let x;

    if (a < 10) {
        x = Math.pow(a, 4);
    } else if (a > 61) {
        x = a;
    } else {
        x = a - Math.sin(Math.pow(a, 2));
    }

    document.getElementById('result').innerText = x;
}
