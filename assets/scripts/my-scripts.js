// initialize order count (Worksheet Part 1: Step 9a)
orderCount = 0;
/* array of drink objects (Worksheet Part 2: Step 1)
   each object has a value key with a camelCase drink name value
   and a label key with the display text for the drink */
var cocktails = [
    {
        "id": "focusedlady",
        "label": "Focused Lady"
    },
    {
        "id": "strongLady",
        "label": "Strong Lady"
    },
    {
        "id": "frontendpunch",
        "label": "Front-End Punch"
    },
    {
        "id": "cachedout",
        "label": "Cached Out"
    }
];
// loadMenu function to add the drinks from the array to the page (Worksheet Part 2: Step 2)
    var loadMenu = function() {
        for (var i = 0; i < cocktails.length; i++) {
            console.log(cocktails);
            $('.radio-group').append('<br><label class=”radio” for="' + cocktails[i].id + '"> <input type="radio" id="' + cocktails[i].id + '" name="drink" value="' + cocktails[i].label + '"> ' + cocktails[i].label + '</label>');
        }
    }

/* submitOrder function that increments orderCount, gathers and displays order details.
   (Worksheet Part 1: Step 3) */
  var submitOrder = function() {
      var orderName =  $("#order-form-input").val();
      var drinkName = $("input[type='radio']:checked").val();
      if (orderCount <= 5) {
          if (orderName == "") {
              alert("Please add your name to the field below");
          }
          else if (drinkName == undefined) {
              alert("Please select a drink!");
          }
          else {
              $("#order-details").append("<h1>" + orderName + " would like a " + drinkName + "</h1>");
              orderCount++;
              updateOrderCount(orderCount);
          }
      }
      else {
          alert("Too many orders at this time! Please try again later!");
      }
  }
  // only add orders if there is room left on the order queue (Worksheet Part 1: Step 9g)

  // add order display (Worksheet Part 1: Step 7)

  // call funciton to update drink order count (Worksheet Part 1: Step 9e)

// updateOrderCount function with a parameter passed to it (Worksheet Part 1: Step 9c)

var updateOrderCount = function(count) {
    $('#drink-count').html("Drinks Ordered: " + count);
}

$(document).ready(function() {
  // call loadMenu function (Worksheet Part 2: Step 2d)
  loadMenu();

  $('#order-btn').click(function() {
    // call submitOrder function when order button is clicked (Worksheet Part 1: Step 5b)
    submitOrder();
  });
});
