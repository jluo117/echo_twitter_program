var handlers = {
    'LaunchRequest': function () {
        this.emit('Getpolitical');
    },
    'GetpoliticalIntent': function () {
        this.emit('Getpolitical');
    },
    'Getpolitical': function () {
        // Get a random space fact from the space facts list
        var politicalIndex = Math.floor(Math.random() * political.length);
        var randompolitical = political[politicalIndex];

        // Create speech output
        var speechOutput = "Here's your digital trends: " + randompolitical;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randompolitical)
    },
