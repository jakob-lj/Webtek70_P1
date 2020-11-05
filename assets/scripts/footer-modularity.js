var footer = document.createElement("footer");

const footerContent = [{
        id: 1,
        content: '<p><a href="privacy.html">Personvernerklæring</a></p><p><a href="covid-19.html">Smitteoppsporing</a></p><p>© 1970 Prietz AS</p>'
    },
    {
        id: 2,
        content: '<a href="#"><img class="footerIcon" src="assets/images/icons/apple.png" alt="Download on App Store"></a><br />'
    },
    {
        id: 3,
        content: '<a href="https://www.restaurantchoice.com.au/contact/"><img class="footerIcon" src="assets/images/icons/resturantchoice.png" alt="The Restaurant Choice"></a><br />'
    },
];

footerContent.forEach((item) => { renderFooter(item) });

function renderFooter(item) {
    var column = document.createElement("div");
    column.className = "footer-col";
    column.innerHTML = item.content;
    footer.appendChild(column);
}

document.getElementById("footer-placeholder").innerHTML = "";
document.getElementById("footer-placeholder").appendChild(footer);