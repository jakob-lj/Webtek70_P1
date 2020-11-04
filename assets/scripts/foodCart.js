/* Modalen med bestilling */
function modalHouse() {
    var modalHouseElem = document.getElementById("modalHouseElem");
    var span = document.getElementById("closeHouse");
    modalHouseElem.style.display = "block";
    span.onclick = function() {
        modalHouseElem.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modalHouseElem) {
            modalHouseElem.style.display = "none";
        }
    }

    // Viser bestillingen til brukeren
    document.getElementById("finalDishes").innerHTML = document.getElementById("orderedDishes").innerHTML;
    document.getElementById("finalPrice").innerHTML = document.getElementById("totalPrice").innerHTML;
    renderReceipt(dishes, '#orderReceipt');
}


/* Model med lenker til takeaway */
function modalTakeaway() {
    var modalTakeawayElem = document.getElementById("modalTakeawayElem");
    var span = document.getElementById("closeTakeaway");
    modalTakeawayElem.style.display = "block";
    span.onclick = function() {
        modalTakeawayElem.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modalTakeawayElem) {
            modalTakeawayElem.style.display = "none";
        }
    }

    // Viser bestillingen til brukeren
    document.getElementById("finalDishesT").innerHTML = document.getElementById("orderedDishes").innerHTML;
    document.getElementById("finalPriceT").innerHTML = document.getElementById("totalPrice").innerHTML;
    renderReceipt(dishes, '#orderReceiptTakeaway');
}

/* Modalene er basert på kode fra: https://www.cssscript.com/simple-modal-window-with-background-blur-effect/ */

/* Brukeren må ha scrollet ned 300px før ScrollMenu og Cart vises */
window.onscroll = function() {

    // document.body er <body>. document.documentElement er <html>. Velger den lengste av disse to, da forskjellige nettlesere har forskjellig standard
    var userScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    var bodyLength = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    var footerLength = bodyLength - userScroll;
    console.log(footerLength);

    if (userScroll > 300 && footerLength > 1000) {
        document.querySelector(".orderSection").style.visibility = "visible";
        document.querySelector("#scrollMenu").style.visibility = "visible";
    } else {
        document.querySelector(".orderSection").style.visibility = "hidden";
        document.querySelector("#scrollMenu").style.visibility = "hidden";
    }
}