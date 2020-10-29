//Måten jeg hadde gjort det på er å ha en onChange som søker etter retten i items.js listen basert på ID, og deretter kan du finne prisen og navnet
//I items.js filen så har hver enkelt rett en id property. Hver input på siden blir så merket med #item_[id]:

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
      return item_name[i].("name") //orderedDishes
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

//Totalsummen totalPrice  -  #item_[id] paste osv .price
function totalPrice(){
  var retter = [];
  //console.log(retter.reduce((a, b,osv) => a + b, 0));
}

//for (var i = 0; i < order_ammount.length; i++) {
  //order_ammount[i]
  //return "order_ammount" in document.createElement}
