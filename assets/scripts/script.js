function TicketPrice() {

    // INPUT
    let name = document.querySelector("#name").value;
    
    let km = document.querySelector("#km").value;


    // OUTPUT
    let ticket_name = document.querySelector("#ticket-name");
    let ticket_type = document.querySelector("#ticket-type");
    let wagon = document.querySelector("#wagon");
    let serial = document.querySelector("#serial");
    let price = document.querySelector("#price");


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