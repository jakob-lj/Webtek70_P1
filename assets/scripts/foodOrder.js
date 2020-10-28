//Navn på rettene addName() - din ordre
function addName(){
  var food = document.createElement("el")
  var rett = document.getElementById("ordre?").value; //id til rettene
  var t = document.createTextNode(rett);
  el.appendChild(t); //navn på rett etter din ordre:
  document.getElementById("myOrder?").prepend(el); //ny id ved h2
}

//Antall retter orderedDishes
function addOrder(){
  var button = document.getElementById("");
  var total = document.getElementById("orderedDishes");
  button.addEventListener("onclick", addOrder);
  button.addEventListener("onclick", function(event) {
    event.preventDefault();
  });
  if (rett === "") {
    total.textContent = +total.textContent + 0;
  }
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
