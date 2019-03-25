//SHOW QUESTIONS ONE BY ONE EACH BEING ON A TIMER 
// QUESTIONS AND ANSWERS SHOULD BOTH BE OBJECTS IN AN ARRAY THAT YOU CAN ITERATE AND PULL FROM 
// THESE SHOULD BE HIDDEN AND DISPLAYED TO AND FROM THE DIV THAT THEY ARE IN 
// HAVE ALL QUESTIONS GET MULTIPLE ANSWERS WITH ONLY ONE CORRECT ANSWER FOR EACH Q

    // IF THE ANSWER IS CORRECT CONGRATS TO THEM
        // ELSE YOU SUCK
// SET AN INTERVAL FOR AN IF STATEMENT 
// QUESTION IS ANSWERED CORRECTLY THEN WE CAN MOVE ON ........

$(document).ready(function () {
    

var intervalTime = 30000;

var trivia = [
    qSet1 = {
        question:'By law,  what is banned in Japanese restaurants?',
        badAnswer1:'farting',
        badAnswer2:'kissing',
        correctAnswer:'tipping',
        name:'qSet1'
    },
    qSet2 = {
        question:'According to the 2000 census, in the UK, what is now considered a religion?',
        badAnswer1:'The "Bock"',
        badAnswer2:'Pagan Elitism',
        correctAnswer:'Jedi Knight',
        name:'qSet2'
    },
    qSet3 = {
        question:'Forty three percent of women want to try sadomasochism after smelling what?',
        badAnswer1:'Sweat',
        badAnswer2:'Cologne',
        correctAnswer:'Vanilla Extract',
        name:'qSet3'
    },
    qSet4 = {
        question:'What peoples name means "eaters of raw flesh"?',
        badAnswer1:'Scandanavian',
        badAnswer2:'Navajo',
        correctAnswer:'Eskimo',
        name:'qSet4'
    },
    qSet5 = {
        question:'The city of La Paz in Bolivia is safe from fire because of what?',
        badAnswer1:'No fire allowed in the city',
        badAnswer2:'Near the ocean',
        correctAnswer:'Altitude',
        name:'qSet5'
    }
];

function getQandA() {
    for (let i = 0; i < trivia.length; i++) {
        $('.question').append('<p class="' + trivia[i].name + '"' + '>' + trivia[i].question + '</p>');
        $('.answers').append('<button class="' + trivia[i].name + 'btn btn-warning' + '"' + '>' + trivia[i].badAnswer1 + '</button>');
        $('.answers').append('<button class="' + trivia[i].name + 'btn btn-warning' + '"' + '>' + trivia[i].badAnswer2 + '</button>');
        $('.answers').append('<button class="' + trivia[i].name + 'btn btn-warning' + '"' + '>' + trivia[i].correctAnswer + '</button>');
    }
};

function hideQuestions() {
    $('.question').hide(10);
    $('.answers').hide(10);
}

setTimeout(hideQuestions,10);

getQandA();

});