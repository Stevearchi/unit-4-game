// other vars
var wins = 0;
var losses = 0;
var randTotal;
var sum = 0;
var lannisters;
var playGame = true;
// function which creates random values for each lannister each time a game starts
// and adds image tags
function generator() {
    randomTotal();
    sum = 0;
    lannisters = {
        jamie: {
            url: 'assets/images/jamie.jpg',
            value: randNum()
        },
        tywin: {
            url: 'assets/images/tywin.jpg',
            value: randNum()
        },
        cersi: {
            url: 'assets/images/cersi.jpg',
            value: randNum()
        },
        joffrey: {
            url: 'assets/images/joffrey.jpg',
            value: randNum()
        }
    };

    //testing
    console.log('Jamie: ' + lannisters.jamie.value);
    console.log('Tywin: ' + lannisters.tywin.value);
    console.log('Cersi: ' + lannisters.cersi.value);
    console.log('Joffrey: ' + lannisters.joffrey.value);
    //end testing

}

    //function which generates random value to be given to a lannister
    function randNum() {
        return Math.ceil(Math.random() * 12);
    }

    // function which generates a value for randTotal
    function randomTotal() {
        randTotal = Math.floor(Math.random() * 102) + 19
    }

    function display() {
        $('#randTotal').text('Try to get to: ' + randTotal);
        $('#sum').text('Current score: ' + sum);
        $('#wins').text('Wins: ' + wins);
        $('#losses').text('Losses: ' + losses);
    }

    function check() {
        if (sum === randTotal) {
            wins++;
        } else if (sum > randTotal) {
            losses++;
        }
        if (sum >= randTotal) {
           generator();
        }
    };
    
    while (playGame) {
        generator();
        $('#images').append('<img id = "jamie" alt = "Jamie Lannister" src="' + lannisters.jamie.url + '">');
        $('#images').append('<img id = "tywin" alt = "Tywin Lannister" src="' + lannisters.tywin.url + '">');
        $('#images2').append('<img id = "cersi" alt = "Cersi Lannister" src="' + lannisters.cersi.url + '">');
        $('#images2').append('<img id = "joffrey" alt = "Joffrey Lannister "src="' + lannisters.joffrey.url + '">');
        display();
        //click events
        $('#jamie').on('click', function () {
            sum += lannisters.jamie.value;
            check();
            display();
        });
        $('#cersi').on('click', function () {
            sum += lannisters.cersi.value;
            check();
            display();
        });
        $('#tywin').on('click', function () {
            sum += lannisters.tywin.value;
            check();
            display();
        });
        $('#joffrey').on('click', function () {
            sum += lannisters.joffrey.value;
            check();
            display();
        });



        playGame = false;
    }