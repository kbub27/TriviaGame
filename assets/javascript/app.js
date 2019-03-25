//SHOW QUESTIONS ONE BY ONE EACH BEING ON A TIMER 
// QUESTIONS AND ANSWERS SHOULD BOTH BE OBJECTS IN AN ARRAY THAT YOU CAN ITERATE AND PULL FROM 
// THESE SHOULD BE HIDDEN AND DISPLAYED TO AND FROM THE DIV THAT THEY ARE IN 
// HAVE ALL QUESTIONS GET MULTIPLE ANSWERS WITH ONLY ONE CORRECT ANSWER FOR EACH Q

// IF THE ANSWER IS CORRECT CONGRATS TO THEM
// ELSE YOU SUCK
// SET AN INTERVAL FOR AN IF STATEMENT 
// QUESTION IS ANSWERED CORRECTLY THEN WE CAN MOVE ON ........

$(document).ready(function () {


    var timer = 30;
    var qSet = 1;
    var timerId;

    var trivia = [
        qSet1 = {
            question: 'By law,  what is banned in Japanese restaurants?',
            badAnswer1: 'Farting',
            badAnswer2: 'Kissing',
            correctAnswer: 'Tipping',
            name: 'qSet1'
        },
        qSet2 = {
            question: 'According to the 2000 census, in the UK, what is now considered a religion?',
            badAnswer1: 'The "Bock"',
            badAnswer2: 'Pagan Elitism',
            correctAnswer: 'Jedi Knight',
            name: 'qSet2'
        },
        qSet3 = {
            question: 'Forty three percent of women want to try sadomasochism after smelling what?',
            badAnswer1: 'Sweat',
            badAnswer2: 'Cologne',
            correctAnswer: 'Vanilla Extract',
            name: 'qSet3'
        },
        qSet4 = {
            question: 'What peoples name means "eaters of raw flesh"?',
            badAnswer1: 'Scandanavian',
            badAnswer2: 'Navajo',
            correctAnswer: 'Eskimo',
            name: 'qSet4'
        },
        qSet5 = {
            question: 'The city of La Paz in Bolivia is safe from fire because of what?',
            badAnswer1: 'No fire allowed in the city',
            badAnswer2: 'Near the ocean',
            correctAnswer: 'Altitude',
            name: 'qSet5'
        }
    ];

    //SET UP A TIMER 
    function run() {
        timerId = setInterval(timeLeft, 1000);
    };

    function timeLeft() {

        timer--;
        console.log(timer);
        if (timer === 0) {
            qSet++;
            stop();
            alert("Times Up!");
            hideQuestions();
            nextQuestion();
            $('h3').show();
            run();
        }
    };

    function stop() {
        timer = 30;
        clearInterval(timerId);
    };


    function getQandA() {
        for (let i = 0; i < trivia.length; i++) {
            $('.question').append('<p class="' + trivia[i].name + '"' + '>' + trivia[i].question + '</p>');
            $('.answers').append('<button class="' + trivia[i].name + ' bad btn btn-warning' + '"' + '>' + trivia[i].badAnswer1 + '</button>');
            $('.answers').append('<button class="' + trivia[i].name + ' bad btn btn-warning' + '"' + '>' + trivia[i].badAnswer2 + '</button>');
            $('.answers').append('<button class="' + trivia[i].name + ' correct btn btn-warning' + '"' + '>' + trivia[i].correctAnswer + '</button>');
        }
    };

    function hideQuestions() {
        $('.qSet1').hide();
        $('.qSet2').hide();
        $('.qSet3').hide();
        $('.qSet4').hide();
        $('.qSet5').hide();
        $('h3').hide();
    };

    function nextQuestion() {
        if (qSet === 2) {
            $('.qSet2').show();
        } else if (qSet === 3) {
            $('.qSet3').show();
        } else if (qSet == 4) {
            $('.qSet4').show();
        } else if (qSet === 5) {
            $('.qSet5').show();
        } else {
            alert('Game over');
            hideQuestions();
            stop();
        }
    };

    function show() {
        getQandA();
        hideQuestions();
        $('.qSet1').show();
        $('h3').show();
        $('.correct').click(function () {
            hideQuestions();
            alert('Correct');
            qSet++;
            nextQuestion();
            $('h3').show();
            stop();
            run();
            if (qSet > 5) {
                stop();
            }
        });
        $('.bad').click(function () {
            hideQuestions();
            alert('Wrong Answer! Now you must wait in timeout!');
            if (qSet > 5) {
                stop();
            }
        })
    }

    show();
    run();

});