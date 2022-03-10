function TicketPrice() {
    let age = document.querySelector("#age").value;
    let km = document.querySelector("#km").value;
    let price = document.querySelector("#price");
    let total = document.querySelector("#total");

    price.style.display = "block";

    finalprice = km * 0.21;
    if (age < 18) {
        finalprice = finalprice - finalprice * 20 / 100;
    }
    else if (age >= 65) {
        finalprice = finalprice - finalprice * 40 / 100;
    }

    finalprice = Math.round(finalprice * 100) / 100;
    total.innerHTML = `${finalprice} €`;
}