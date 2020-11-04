// Dette er en global variabel som til enhver tid har alle retter i bestillingen.
var dishes = [];

//Henter navnene på rettene - #orderedDishes.name
function addName() {
    var li = document.createElement("li")
    var rett = document.getElementById(dishes).name;
    var t = document.createTextNode(rett);
    var rett = li.appendChild(t);
    //document.getElementById("dishes").prepend(li); //item_name item_name[i].name
    document.querySelector("#dishes").innerHTML = rett;
}
//let name = event.target.name addName();

//Henter totalprisen basert på dishes[]
function setTotalPrice() {
    let sum = 0;
    for (d of dishes) {
        sum += d.price;
    }
    document.querySelector("#totalPrice").innerHTML = sum;
}

function setNumDishes() {
    let num = dishes.length;
    document.querySelector("#orderedDishes").innerHTML = num;
}

// Denne funksjonen må kalles hver gang vi rendrer rettene
// Oppdater handlekurv i eventlistner funksjonen.
function queryInput() {
    document.querySelectorAll('.orderInput').forEach(item => {
        item.addEventListener('change', event => {
            let val = event.target.value;
            let id = event.target.id.replace(/^\D+/g, '');
            updateDishes(id, val);
            setTotalPrice();
            setNumDishes();
        })
    })
}

function updateDishes(id, ammount) {
    let pop_i = []
        // Finner indecies til retter i dishes med samme id
    for (i = 0; i < dishes.length; i++) {
        if (dishes[i].id == id) {
            pop_i.push(i);
        }
    }
    // Fjerner eksisterende retter fra listen
    for (i = pop_i.length - 1; i >= 0; i--) {
        dishes.splice(pop_i[i], 1);
    }
    // Legger til riktig antall retter i listen
    for (i = 0; i < ammount; i++) {
        dishes.push(getFoodById(id));
    }
    console.log(dishes);
}

function getFoodById(id) {
    for (food of antipasti) {
        if (food.id == id) {
            return food
        }
    }
    for (food of paste) {
        if (food.id == id) {
            return food
        }
    }
    for (food of dolci) {
        if (food.id == id) {
            return food
        }
    }
    for (food of pizze) {
        if (food.id == id) {
            return food
        }
    }
}
