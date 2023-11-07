function submitForm() {
    let receipt = document.getElementById('receipt');
    receipt.style.display = "block";

    date_res.innerText = document.getElementById('date').value
    name_res.innerText = document.getElementById('name').value
    summ_res.innerText = document.getElementById('suggestions').value

    return false;
}
