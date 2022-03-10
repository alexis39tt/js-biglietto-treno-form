function TicketPrice() {
    document.querySelector(".your-ticket").style.display = "block";
    // INPUT
    let name = document.querySelector("#name").value;
    let eta = document.querySelector("#eta").value;
    let km = document.querySelector("#km").value;


    // OUTPUT
    let ticket_name = document.querySelector("#ticket-name");
    let ticket_type = document.querySelector("#ticket-type");
    let wagon = document.querySelector("#wagon");
    let serial = document.querySelector("#serial");
    let price = document.querySelector("#price");

    ticket_name.innerHTML = name;

    wagon.innerHTML = Math.ceil(Math.random()*10);
    serial.innerHTML = Math.round(Math.random()*100000);

    let finalprice = km * 0.21;

    if (eta == "child") {
        finalprice = finalprice - finalprice * 20 / 100;
        ticket_type.innerHTML = "Biglietto scontato";
    }
    else if (eta == "elderly") {
        finalprice = finalprice - finalprice * 40 / 100;
        ticket_type.innerHTML = "Biglietto scontato";
    }
    else{
        ticket_type.innerHTML = "Biglietto standard";
    }

    finalprice = Math.round(finalprice * 100) / 100;
    price.innerHTML = `${finalprice} €`;
}