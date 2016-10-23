'GettopTweetIntent': function () {
    this.emit('GettopTweet');
},
'GettopTweet': function () {
    // Get a random space fact from the space facts list
    var topTweetIndex = Math.floor(Math.random() * topTweet.length);
    var randomtopTweet = topTweet[topTweetIndex];

    // Create speech output
    var speechOutput = "Here's your topTweet trends: " + randomtopTweet;

    this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomtopTweet)
},
