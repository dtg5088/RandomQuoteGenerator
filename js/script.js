// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//variable list
var message = " ";



//function list
function getRandomQuote(){
  var randomQuoteNum = Math.floor( Math.random() * quotes.length);
  return quotes[randomQuoteNum];
}

function printQuote() {
  var readQuote = getRandomQuote();
  var colorChange = randNumColor ();
  var quotePara = '<p class="quote">' + readQuote.quote + '</p>' + '<p class="source">' + readQuote.source + '</p>';
  document.getElementById('quote-box').innerHTML = quotePara;
}

function randNumColor (){
  var letters = ['841a36','261a84','2243b7','d8b61c','0b5922','5f868e','3f49d3','8225ce'];
  var backgroundColor = "#" + letters[Math.floor(Math.random() * letters.length)];
  document.getElementById('quote-box').style.background = backgroundColor;
}

//defining array list of objects
var quotes = [
  {
    quote: "Never be limited by other people’s limited imaginations.",
    source: "Dr. Mae Jemison, first African-American female astronaut",
    citation: "",
    year: ""
  },
  {
    quote: "The cost of liberty is less than the price of repression.",
    source: "W.E.B. Du Bois",
    citation: "",
    year: ""
  },
  {
    quote: "In recognizing the humanity of our fellow beings, we pay ourselves the highest tribute.",
    source: "Thurgood Marshall, first African American U.S. Supreme Court member",
    citation: "",
    year: ""
  },
  {
    quote: "Have a vision. Be demanding.",
    source: "Colin Powell",
    citation: "",
    year: ""
  },
  {
    quote: "If there is no struggle, there is no progress.",
    source: "Frederick Douglass",
    citation: "",
    year: ""
  },
  {
    quote: "Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly.",
    source: "Langston Hughes",
    citation: "",
    year: ""
  },
  {
    quote: "The time is always right to do what is right.",
    source: "Dr. Martin Luther King, Jr.",
    citation: "",
    year: ""
  }
]

//print data
printQuote();
