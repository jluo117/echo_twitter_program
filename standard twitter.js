'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'News time';

/**
 * Array containing space facts.
 */
var textintro[
    "bang bang",
    "tweet tweet birdy",
    "O My God",
    "What just happen",
    "Oh no no no"
]
var digitaltrends = [
    "Dept of Homeland Security is reportedly investigating the D DoS attack which the White House calls a “criminal act.”",
    "Galaxy Note 7 are exploding all over the world",
    "Beautiful Battlefield 1 gives the War to End All Wars its due respect",
    "Nintendo unveils the Nintendo Switch, a hybrid console/handheld system",
    "Sony PlayStation 4 Pro coming Nov. 10 for $400",



];
var political =[
  "While in Gettysburg, Pennsylvania, the Republican nominee discussed the steps he'll take his first 100 days in office, as well as his plans to sue the women who have accused him of sexual misconduct.",
  "Many praised the Fox News anchor’s moderating skills in Wednesday’s debate, citing his ability to fact-check, control the crowd and direct more policy-focused dialogue out of the candidates.",
  "Singer performs national anthem while kneeling. Before a preseason NBA game between the Miami Heat and Philadelphia 76ers, singer Denasia Lawrence knelt to perform the Star-Spangled Banner. Another singer, Leah Tysse, took a knee while performing at a preseason game earlier this month.",
]
var money=[
  "Russia is in big debt",
  "Americans makes a lot of dollar bills"
]
var sports=[
"Josh Brown, the New York Giants kicker, was suspended in week one when allegations of domestic abuse surfaced. This week, sheriff's documents detailing Brown's admission of the abuse went public. The NFL responded by placing Brown on the commissioner's exempt list. Players like Steve Smith, Torrey Smith and more felt this was a double standard.",
"It's win or go home for the Dodgers, as they look to push the NLCS to a game seven. The Cubs hope to wrap things up tonight and advance to the World Series to face the Indians. Stay tuned here for scoring updates, highlights and analysis from game 6 of the NLCS.",
"The san francisco Giants looks to recoup after that horrible performance in the post-season",
"College sports is growing at a very fast rate"
]
var toptweet= [
  "Josh Brown, the New York Giants kicker, was suspended in week one when allegations of domestic abuse surfaced. This week, sheriff's documents detailing Brown's admission of the abuse went public. The NFL responded by placing Brown on the commissioner's exempt list. Players like Steve Smith, Torrey Smith and more felt this was a double standard.",
  "It's win or go home for the Dodgers, as they look to push the NLCS to a game seven. The Cubs hope to wrap things up tonight and advance to the World Series to face the Indians. Stay tuned here for scoring updates, highlights and analysis from game 6 of the NLCS.",
  "The san francisco Giants looks to recoup after that horrible performance in the post-season",
  "College sports is growing at a very fast rate",
  "Russia is in big debt",
  "Americans makes a lot of dollar bills",
  "While in Gettysburg, Pennsylvania, the Republican nominee discussed the steps he'll take his first 100 days in office, as well as his plans to sue the women who have accused him of sexual misconduct.",
  "Many praised the Fox News anchor’s moderating skills in Wednesday’s debate, citing his ability to fact-check, control the crowd and direct more policy-focused dialogue out of the candidates.",
  "Singer performs national anthem while kneeling. Before a preseason NBA game between the Miami Heat and Philadelphia 76ers, singer Denasia Lawrence knelt to perform the Star-Spangled Banner. Another singer, Leah Tysse, took a knee while performing at a preseason game earlier this month.",
  "Dept of Homeland Security is reportedly investigating the D DoS attack which the White House calls a “criminal act.”",
  "Galaxy Note 7 are exploding all over the world",
  "Beautiful Battlefield 1 gives the War to End All Wars its due respect",
  "Nintendo unveils the Nintendo Switch, a hybrid console/handheld system",
  "Sony PlayStation 4 Pro coming Nov. 10 for $400",
]

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {

    'LaunchRequest': function () {
        this.emit('Getdigitaltrends');
    },
    'GetdigitaltrendsIntent': function () {
        this.emit('Getdigitaltrends');
    },
    'Getdigitaltrends': function () {
        // Get a random space fact from the space facts list
        var digitaltrendsIndex = Math.floor(Math.random() * digitaltrends.length);
        var randomdigitaltrends = digitaltrends[digitaltrendsIndex];

        // Create speech output
        var speechOutput = "tweet tweet! Here's your digital trends: " + randomdigitaltrends;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomdigitaltrends)
    },

        'GetpoliticalIntent': function () {
            this.emit('Getpolitical');
        },
        'Getpolitical': function () {
            // Get a random space fact from the space facts list
            var politicalIndex = Math.floor(Math.random() * political.length);
            var randompolitical = political[politicalIndex];

            // Create speech output
            var speechOutput = "tweet tweet! Here's your political trends according to twitter: " + randompolitical;

            this.emit(':tellWithCard', speechOutput, SKILL_NAME, randompolitical)
        },
        'GetmoneyIntent': function () {
            this.emit('Getmoney');
        },
        'Getmoney': function () {
            // Get a random space fact from the space facts list
            var moneyIndex = Math.floor(Math.random() * money.length);
            var randommoney = money[moneyIndex];

            // Create speech output
            var speechOutput = "tweet tweet! Here's your money trends according to twitter: " + randommoney;

            this.emit(':tellWithCard', speechOutput, SKILL_NAME, randommoney)
        },
        'GetsportsIntent': function () {
            this.emit('Getsports');
        },
        'Getsports': function () {
            // Get a random space fact from the space facts list
            var sportsIndex = Math.floor(Math.random() * sports.length);
            var randomsports = sports[sportsIndex];

            // Create speech output
            var speechOutput = "tweet tweet! Here's your sports trends: according to twitter" + randomsports;

            this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomsports)
        },
        'GettopTweetIntent': function () {
            this.emit('GettopTweet');
        },
        'GettopTweet': function () {
            var textintroIndex = Math.floor(Math.random() * textintro.length);
        var randomtextintro = textintro[textintroIndex];
            // Get a random space fact from the space facts list
            var toptweetIndex = Math.floor(Math.random() * toptweet.length);
            var randomtoptweet = toptweet[toptweetIndex];

            // Create speech output
            var speechOutput = randomtextintro+ "Here's your top Tweet trends: " + randomtoptweet;

            this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomtoptweet)
        },
'optionIntent': function () {
        var speechOutput = "You can say tell me sports, money, political,technological or top tweets, and i will go on twitter and look it up for you ";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },

    
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
