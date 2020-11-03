function modalHouse() {
    document.querySelectorAll("body > :not(#modalHouseElem)").forEach(element => element.style.filter = "blur(5px)");
    // Get the modal
    var modalHouseElem = document.getElementById("modalHouseElem");
    // Get the <span> element that closes the modal
    var span = document.getElementById("closeHouse");
    // When the user clicks the button, open the modal
    modalHouseElem.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
            modalHouseElem.style.display = "none";
            document.querySelectorAll("body > :not(#modalHouseElem)").forEach(element => element.style.filter = "blur(0)");
        }
        // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modalHouseElem) {
            modalHouseElem.style.display = "none";
            document.querySelectorAll("body > :not(#modalHouseElem)").forEach(element => element.style.filter = "blur(0)");
        }
    }

    document.getElementById("finalDishes").innerHTML = document.getElementById("orderedDishes").innerHTML;
    document.getElementById("finalPrice").innerHTML = document.getElementById("totalPrice").innerHTML;
}

function modalTakeaway() {
    document.querySelectorAll("body > :not(#modalTakeawayElem)").forEach(element => element.style.filter = "blur(5px)");
    // Get the modal
    var modalTakeawayElem = document.getElementById("modalTakeawayElem");
    // Get the <span> element that closes the modal
    var span = document.getElementById("closeTakeaway");
    // When the user clicks the button, open the modal
    modalTakeawayElem.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
            document.querySelectorAll("body > :not(#modalTakeawayElem)").forEach(element => element.style.filter = "blur()");
            modalTakeawayElem.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modalTakeawayElem) {
            document.querySelectorAll("body > :not(#modalTakeawayElem)").forEach(element => element.style.filter = "blur(0)");
            modalTakeawayElem.style.display = "none";
        }
    }
}