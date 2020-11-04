const nav =
  '<div class="nav-col flex">\
<ul class="noList">\
    <li>\
        <img src="assets/images/icons/location.png" alt="Location">\
        <a href="https://www.google.com/maps/place/Kristiansten+festning/@63.4262262,10.4110418,17z/data=!4m5!3m4!1s0x0:0xaf189e2e4edc5934!8m2!3d63.4269223!4d10.4106094" target="_blank" rel="nofollow">Kristianstensbakken 70, 7014 Trondheim</a>\
    </li>\
    <!--Kilde til ikon: https://toppng.com/show_download/175888/white-directions-icon-location-flat-icon-white/large-->\
    <li>\
        <img src="assets/images/icons/facebook.png" alt="Facebook">\
        <a href="#" target="_blank" rel="nofollow">Følg oss på Facebook</a>\
    </li>\
    <!--Kilde til ikon: https://freepikpsd.com/fb-white-png-transparent-images/787586/-->\
    <li>\
        <img src="assets/images/icons/mail.png" alt="Mail">\
        <a href="mailto:post@prietzeria.xyz">post@prietzeria.xyz</a>\
    </li>\
    <!--Kilde til ikon: https://toppng.com/show_download/182525/mail-white-icon/large-->\
    <li>\
        <img src="assets/images/icons/language.png" alt="Language">\
        <a href="#">Bytt språk</a>\
    </li>\
    <!--Kilde til ikon: https://toppng.com/show_download/17636/settings-icon-android-kitkat/large-->\
</ul>\
<div class="hamburger-container" onclick="toggleNav(this)">\
    <div class="bar1"></div>\
    <div class="bar2"></div>\
    <div class="bar3"></div>\
</div>\
<nav id="navigation" class="hide">\
    <ul class="nav-items">\
        <li class="nav-active">\
            <a href="index.html">Hjem</a>\
        </li>\
        <li>\
            <a href="menu.html">Meny</a>\
        </li>\
        <li>\
            <a href="booking.html">Book bord</a>\
        </li>\
        <li>\
            <a href="contact.html">Kontakt oss</a>\
        </li>\
    </ul>\
</nav>\
</div>';

document.getElementById("nav-placeholder").innerHTML = nav;
