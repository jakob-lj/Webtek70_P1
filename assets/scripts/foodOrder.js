// Dette er en global variabel som til enhver tid har alle retter i bestillingen.
var dishes = [];

//Navn på rettene addName() - din ordre #item_[id]
function addName(){ // sette denne ved ordre?
  var liOrder = document.createElement("li")
  var rett = document.getElementById("item_[id]????").name; //id til rettene
  var t = document.createTextNode(rett);
  liOrder.appendChild(t); //navn på rett
  document.getElementById("orderedDishes").prepend(liOrder); //ny id ved h2

  for (var i = 0; i < item_name.length; i++) { //#item_[id] ? antipasti paste dolci pizze
    item_name[i]
    if (order_ammount > 0) {
      return item_name[i].name //orderedDishes
    }
  }
}

//Antall retter orderedDishes
function addOrder(){
  var button = document.getElementById("order_ammount"); //ved trykk på pil
  var total = document.getElementById("orderedDishes");
  button.addEventListener("onclick", addOrder);
  button.addEventListener("onclick", function(event) {
    event.preventDefault();
  });
  if (rett === "") {
    total.textContent = +total.textContent + 0;
  }
  //hva skriver man hvis man tar vekk en rett?
  else {
    total.textContent = +total.textContent + 1;
  }
}

//Henter totalprisen basert på dishes[]
function setTotalPrice(){
  let sum = 0;
  for (d of dishes){
    sum+= d.price;
  }
  document.querySelector("#totalPrice").innerHTML = sum;
}

function setNumDishes(){
  let num = dishes.length;
  document.querySelector("#orderedDishes").innerHTML = num;
}

// Denne funksjonen må kalles hver gang vi rendrer rettene
// Oppdater handlekurv i eventlistner funksjonen.
function queryInput(){
  document.querySelectorAll('.orderInput').forEach(item => {
    item.addEventListener('change', event => {
      let val = event.target.value;
      let id =  event.target.id.replace( /^\D+/g, '');
      updateDishes(id,val);
      setTotalPrice();
      setNumDishes();
    })
  })
}

function updateDishes(id,ammount){
  let pop_i = []
  // Finner indecies til retter i dishes med samme id
  for (i = 0; i<dishes.length;i++){
    if(dishes[i].id == id){
      pop_i.push(i);
    }
  }
  // Fjerner eksisterende retter fra listen
  for (i = pop_i.length-1; i >= 0; i--){
    dishes.splice(pop_i[i],1);
  }
  // Legger til riktig antall retter i listen
  for(i = 0; i<ammount;i++){
    dishes.push(getFoodById(id));
  }
  console.log(dishes);
}

function getFoodById(id){
  for (food of antipasti){
    if (food.id == id){
      return food
    }
  }
  for (food of paste){
    if (food.id == id){
      return food
    }
  }
  for (food of dolci){
    if (food.id == id){
      return food
    }
  }
  for (food of pizze){
    if (food.id == id){
      return food
    }
  }
}


//for (var i = 0; i < order_ammount.length; i++) {
  //order_ammount[i]
  //return "order_ammount" in document.createElement}
