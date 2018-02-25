// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//function list
function print(message) {
  var div = document.getElementById('quote-box');
  div.innerHTML = message;
}

//variable list
var message = " ";

//print data
print(message);
