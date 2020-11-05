/* Header */
var header = document.createElement("header");



let a = document.createElement("a")
a.href = "index.html";
let img = document.createElement("img");
img.alt = "Prietzeria";
img.src = "assets/images/logo.png";
a.appendChild(img);
header.appendChild(a);


/* Navbar */
var navbar = document.createElement("div");
navbar.className = "nav-col flex";


/* Left Navigation */
var leftUl = document.createElement("ul");
leftUl.className = "noList";

const shortcuts = [{
        id: "Lokasjon",
        icon: "assets/images/icons/location.png",
        text: "Kristianstensbakken 70",
        link: "https://goo.gl/maps/fQFEHHWGHkY93RY37"
    },
    {
        id: "Facebook",
        icon: "assets/images/icons/facebook.png",
        text: "Følg oss på Facebook",
        link: "#"
    },
    {
        id: "E-post",
        icon: "assets/images/icons/mail.png",
        text: "post@prietzeria.xyz",
        link: "mailto:post@prietzeria.xyz"
    }
]

shortcuts.forEach((item) => { renderShort(item) });

function renderShort(item) {
    let li = document.createElement("li");

    let img = document.createElement("img");
    img.src = item.icon;
    img.alt = item.id;
    li.appendChild(img);

    let a = document.createElement("a");
    let aText = document.createTextNode(item.text);
    a.appendChild(aText);
    a.href = item.link;
    a.target = "_blank";
    a.rel = "nofollow";
    li.appendChild(a);

    leftUl.appendChild(li);
}
navbar.appendChild(leftUl);



/* Right Navigation */

/* Right Navigation: Hamburger */
let hamburger = document.createElement("div");
hamburger.className = "hamburger-container";
hamburger.setAttribute("onclick", "toggleNav(this)");

for (let i = 1; i <= 3; i++) {
    let bar = document.createElement("div");
    bar.className = "bar" + i;
    hamburger.appendChild(bar);
}
navbar.appendChild(hamburger);

/* Right Navigation: Links */
let rightNav = document.createElement("nav");
rightNav.id = "navigation";
rightNav.className = "hide";

let navLinksUl = document.createElement("ul");
navLinksUl.className = "nav-items";

const navLinks = [{
        id: "homeLink",
        text: "Hjem",
        file: "index.html"
    },
    {
        id: "menuLink",
        text: "Meny",
        file: "menu.html"
    },
    {
        id: "bookingLink",
        text: "Book bord",
        file: "booking.html"
    },
    {
        id: "contactLink",
        text: "Om oss",
        file: "contact.html"
    }
]
navLinks.forEach((item) => { renderNav(item) });

function renderNav(item) {
    let li = document.createElement("li");
    li.id = item.id;

    let a = document.createElement("a");
    let aText = document.createTextNode(item.text);
    a.appendChild(aText);
    a.href = item.file;
    li.appendChild(a);

    // Hvis brukeren er på siden som vises i menyen, får den class nav-active
    let url = window.location.pathname;
    let file = "/" + item.file;
    if (url === file) {
        li.className = "nav-active";
    } else if (item.id === "homeLink" && url === "/") { // Hvis brukeren kun er på domenet, ikke index.html
        li.className = "nav-active";
    }

    navLinksUl.appendChild(li);
}
rightNav.appendChild(navLinksUl);
navbar.appendChild(rightNav);


document.getElementById("top-placeholder").innerHTML = ""; // Fjerner teksten om at navigasjonsinnlastning feilet
document.getElementById("top-placeholder").appendChild(header);
document.getElementById("top-placeholder").appendChild(navbar);