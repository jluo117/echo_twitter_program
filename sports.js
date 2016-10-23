'GetsportsIntent': function () {
    this.emit('Getsports');
},
'Getsports': function () {
    // Get a random space fact from the space facts list
    var sportsIndex = Math.floor(Math.random() * sports.length);
    var randomsports = sports[sportsIndex];

    // Create speech output
    var speechOutput = "Here's your sports trends: " + randomsports;

    this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomsports)
},
