const figlet = require("figlet");
const giveMeAJoke = require('give-me-a-joke');
figlet("Welcome Chandan & Chandani", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

  // To get a random dad joke
giveMeAJoke.getRandomDadJoke (function(joke) {
  console.log(joke);
});
