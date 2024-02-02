const quotes = [
  {
    quote: 'In the end, it’s not the years in your life that count. It’s the life in your years.',
    author: 'Abraham Lincoln',
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    quote: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
    author: 'Thomas A. Edison',
  },
  {
    quote: 'Despite the forecast, live like it’s spring',
    author: 'Lilly Pulitzer',
  },
  {
    quote: 'The two most important days in your life are the day you are born and the day you find out why.',
    author: 'Mark Twain',
  },
  {
    quote: 'Success is going from failure to failure without a loss of enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    quote: 'Try not to become a man of success but rather try to become a man of value.',
    author: 'Albert Einstein',
  },
  {
    quote: 'We must believe in luck. For how else can we explain the success of those we don’t like?',
    author: 'Jean Cocteau',
  },
  {
    quote: 'I find that the harder I work, the more luck I seem to have.',
    author: 'Thomas Jefferson',
  },
  {
    quote: 'Don’t be afraid to give up the good to go for the great.',
    author: 'John D. Rockefeller',
  },
  {
    quote:
      'Successful people do what unsuccessful people are not willing to do. Don’t wish it were easier; wish you were better.',
    author: 'Jim Rohn',
  },
  {
    quote: 'All progress takes place outside the comfort zone.',
    author: 'Michael John Bobak',
  },
  {
    quote: 'I never dreamed about success, I worked for it.',
    author: 'Estee Lauder',
  },
  {
    quote: 'Do not try to be original, just try to be good.',
    author: 'Paul Rand',
  },
  {
    quote:
      'If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
    author: 'Martin Luther King Jr.',
  },
  {
    quote:
      'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison',
  },
  {
    quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be.',
    author: 'Reid Hoffman',
  },
  {
    quote:
      'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you ‘re not doing a tour of gas stations.',
    author: 'Tim O’Reilly',
  },
  {
    quote: 'Some people dream of success, while other people get up every morning and make it happen.',
    author: 'Wayne Huizenga',
  },
  {
    quote: 'The only thing worse than starting something and failing … is not starting something.',
    author: 'Seth Godin',
  },
  {
    quote: 'If you really want to do something, you’ll find a way. If you do not, you’ll find an excuse.',
    author: 'Jim Rohn',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
