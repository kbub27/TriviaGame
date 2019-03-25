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
        answers:['tipping','farting','kissing'],
        name:'qSet1'
    },
    qSet2 = {
        question:'According to the 2000 census, in the UK, what is now considered a religion?',
        answers:['Jedi Knight', 'The "Bock"', 'Pagan Elitism'],
        name:'qSet2'
    },
    qSet3 = {
        question:'Forty three percent of women want to try sadomasochism after smelling what?',
        answers:['Vanilla Extract','Mens sweat', 'Cologne'],
        name:'qSet3'
    },
    qSet4 = {
        question:'What peoples name means "eaters of raw flesh"?',
        answers:['Scandanavian', 'Navajo', 'Eskimo'],
        name:'qSet4'
    },
    qSet5 = {
        question:'The city of La Paz in Bolivia is safe from fire because of what?',
        answers:['Altitude', 'Near the ocean', 'Fire is not allowed'],
        name:'qSet5'
    }
];

function getQ() {
    for (let i = 0; i < trivia.length; i++) {
        $('.question').append('<p class="' + trivia[i].name + '"' + '>' + trivia[i].question + '</p>')   
    }
};



getQ();

});