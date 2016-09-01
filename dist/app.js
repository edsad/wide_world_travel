(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strick";
(function(){
  function populatePage (inventory) {
    var output = document.querySelector(".output")
    var results = ""
    inventory.forEach(function(car, i){
      if (i % 3 === 0) {
        results += `<div class="row">`
      }
      results += `
      <div class="col-md-4 carCard" style="border-color: ${car.color}">
        <h3>${car.make}</h3>
        <h3>${car.model}</h3>
        <h3>${car.year}</h3>
        <h3>${car.price}</h3>
        <h3>${car.color}</h3>
        <h3>${car.purchased}</h3>
        <p>${car.description}</p>
        </div>
        `
        if ((i + 1) % 3 === 0) {
      results += `</div>`
    }
   })
    output.innerHTML = results

  // Loop over the inventory and populate the page
  // console.log(inventory)
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
})();

},{}]},{},[1]);
