var hiddenForm = document.getElementById('hiddenForm').style;

document.getElementById("hiddenForm").addEventListener("submit", function(event) {
    event.preventDefault()
});

function showForm() { // Vis del: Nyhetsbrevskjema
    if (hiddenForm.display == "none") {
        hiddenForm.display = "";
    } else {
        hiddenForm.display = "none";
    }
}

function submitHiddenForm() {
    var consent = document.getElementById('consent');
    if (!consent.checked) {
        alert("Vennligst godta vår personvernerklæring.");
        consent.focus();
        return false;
    }

    document.getElementById('submitForm').style.display = "none";
    consent.style.display = "none";
    document.getElementsByClassName('form-grid-1')[0].style.display = "none";
    document.getElementsByClassName('form-grid-2')[0].style.display = "none";
    document.getElementById('formReply').style.display = "";
}