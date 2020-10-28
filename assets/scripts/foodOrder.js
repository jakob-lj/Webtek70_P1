//Måten jeg hadde gjort det på er å ha en onChange som søker etter retten i items.js listen basert på ID, og deretter kan du finne prisen og navnet
//I items.js filen så har hver enkelt rett en id property. Hver input på siden blir så merket med #item_[id]:

//Navn på rettene addName() - din ordre #item_[id]
function addName(){
  var food = document.createElement("el")
  var rett = document.getElementById("ordre?").value; //id til rettene
  var t = document.createTextNode(rett);
  el.appendChild(t); //navn på rett etter din ordre:
  document.getElementById("myOrder?").prepend(el); //ny id ved h2
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
  //hva skriver man hcis man tar vekk en rett?
  else {
    total.textContent = +total.textContent + 1;
  }
}
//Totalsummen totalPrice
function totalPrice(){
  var retter = [];
  //console.log(retter.reduce((a, b,osv) => a + b, 0));
}

//for (var i = 0; i < order_ammount.length; i++) {
  //order_ammount[i]
  //return "order_ammount" in document.createElement}
