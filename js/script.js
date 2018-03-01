// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//variable list
var message = " ";
var intervalID = setInterval(printQuote, 10000);


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
  var colors = ['841a36','261a84','2243b7','d8b61c','0b5922','5f868e','3f49d3','8225ce','bf7220','910f05','1f319b'];//list of hexidecimals to build list of colors
  var backgroundColor = "#" + colors[Math.floor(Math.random() * colors.length)];//creates a random number that in return changes background color
  document.getElementById('color').style.background = backgroundColor; // calls background to HTML
}

//defining array list of objects
var quotes = [
  {
    quote: "Never be limited by other people’s limited imaginations.",
    source: "Dr. Mae Jemison",
    citation: "",
    year: "",
    tag: "Inspirational"
  },
  {
    quote: "The cost of liberty is less than the price of repression.",
    source: "W.E.B. Du Bois",
    citation: "",
    year: "",
    tag: "Philisophical"
  },
  {
    quote: "In recognizing the humanity of our fellow beings, we pay ourselves the highest tribute.",
    source: "Thurgood Marshall, first African American U.S. Supreme Court member",
    citation: "",
    year: "political"
  },
  {
    quote: "Have a vision. Be demanding.",
    source: "Colin Powell",
    citation: "",
    year: "",
    tag: "political"
  },
  {
    quote: "If there is no struggle, there is no progress.",
    source: "Frederick Douglass",
    citation: "",
    year: "",
    tag: "inspirational"
  },
  {
    quote: "Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly.",
    source: "Langston Hughes",
    citation: "",
    year: "",
    tag: "inspirational"
  },
  {
    quote: "The time is always right to do what is right.",
    source: "Dr. Martin Luther King, Jr.",
    citation: "",
    year: "",
    tag: "political"
  },
  {
    quote: "My lord, Increase me in knowledge.",
    source: "Prophet Muhammad (PBUH)",
    citation: "",
    year: "",
    tag: "Religious"
  },
  {
    quote: "Indeed, The patient will be given their reward without account.",
    source: "The Holy Quran",
    citation: "",
    year: "",
    tag: "Religious"
  },
  {
    quote: "Richness is not having many possessions, but richness is being oneself.",
    source: "Prophet Muhammad (PBUH)",
    citation: "",
    year: "",
    tag: "Religious"
  },
  {
    quote: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    source: "The Holy Bible",
    citation: "Psalm 23:4",
    year: "",
    tag: "Religious"
  },
  {
    quote: "For what shall it profit a man, if he gain the whole world, and suffer the loss of his soul.",
    source: "Jesus Christ",
    citation: "",
    year: "",
    tag: "Religious"
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: "Mahatma Gandhi",
    citation: "",
    year: "",
    tag: "inspirational"
  },
  {
    quote: "A nation's culture resides in the hearts and in the soul of its people.",
    source: "Mahatma Gandhi",
    citation: "",
    year: "",
    tag: "political"
  },
  {
    quote: "Those who say religion has nothing to do with politics do not know what religion is.",
    source: "Mahatma Gandhi",
    citation: "",
    year: "",
    tag: "political"
  },
]

//print data
printQuote();
