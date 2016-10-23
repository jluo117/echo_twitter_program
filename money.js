'GetmoneyIntent': function () {
    this.emit('Getmoney');
},
'Getmoney': function () {
    // Get a random space fact from the space facts list
    var moneyIndex = Math.floor(Math.random() * money.length);
    var randommoney = money[moneyIndex];

    // Create speech output
    var speechOutput = "Here's your money trends: " + randommoney;

    this.emit(':tellWithCard', speechOutput, SKILL_NAME, randommoney)
},
