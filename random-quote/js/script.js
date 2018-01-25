// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// list of object literals
var quotes = [{
  quote: 'Whoever said the pen is mightier than the sword obviously never encountered automatic weapons.',
  source: 'Douglas MacArthur'
},
{
  quote: 'There are no secrets to success. It is the result of preparation, hard work, learning from failure.',
  source: 'Colin Powell'
},
{
  quote: "A leader is the man who has the ability to get other people to do what they don't want to do, and like it.",
  source: 'Harry S. Truman'
},
{
  quote: 'We sleep safely at night because rough men stand ready to visit violence on those who would harm us.',
  source:  'Winston Churchill'
},
{
  quote: 'Engage your brain before you engage your weapon.',
  source:   'General James Mattis'
}];

// function randomly selects quote from the array
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes [randomNumber];
}

// function prints quote to HTML
function printQuote () {
  var randomQuote = getRandomQuote ();
  var message = '';
      message += '<p class="quote">' + randomQuote.quote + '</p>';
      message += '<p class="source">' + randomQuote.source +  '</p>';
      document.getElementById('quote-box').innerHTML = message;
}

// function sets 10 second intervals for a new quote to appear
var intervalID = window.setInterval(myCallback, 10000);
function myCallback() {
  printQuote();
}
