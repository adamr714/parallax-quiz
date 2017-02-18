// 1. Show Question and Answers
// 2. SHow images
// 3. Answers Should be in the form of a button
// 3. Calculate Results
// 4. Show Results during the quiz
// 5. Show the correct answer if wrong
// 6. Create a hint section
// 7. Track the score
// 8. At the end give the Results with a message (e.g. 100 point equals master of Parallax, 10 points equals a slave to the Hadjen masters)
// 9. Give the ability to restart the quiz
var quiz = {
    state: [{
            image: 'images/intro_image.png',
            question: 'What kind of game is Parallax?',
            answers: ['Video Game', 'Role-playing Game', 'Miniatures Game', 'Board Game'],
            correctAnswer: 2,
            userAnswer: null,
            hint: 'You use \'Minatures\''
        },
        {
            image: 'images/intro_image.png',
            question: 'What kind of dice does Parallax use?',
            answers: ['d6', 'd10', 'd20', 'd2'],
            correctAnswer: 1,
            userAnswer: null,
            hint: 'It is more than 10'
        },
        {
            image: 'images/intro_image.png',
            question: 'How many races are currently available to play?',
            answers: ['6', '7', '4', '2'],
            correctAnswer: 0,
            userAnswer: null,
            hint: 'More than 4, but less than 7'
        },
        {
            image: 'images/intro_image.png',
            question: 'Which race served as the royal guard for the Hadjen?',
            answers: ['Tir', 'Devoid', 'Cayad', 'Minotaur'],
            correctAnswer: 3,
            userAnswer: null,
            hint: 'Looks a lot like a bull'
        },
        {
            image: 'images/intro_image.png',
            question: 'Who is the leader of the Tir?',
            answers: ['Damar', 'Marax', 'Kallan', 'Bob'],
            correctAnswer: 1,
            userAnswer: null,
            hint: 'Rhymes with Paxax'
        },
        {
            image: 'images/intro_image.png',
            question: 'Which race uses totems?',
            answers: ['Minotaur', 'Sicarius', 'Hadjen', 'Devoid'],
            correctAnswer: 1,
            userAnswer: null,
            hint: 'The look like cats ---- Sicarius'
        },

        {
            image: 'images/intro_image.png',
            question: 'What is the slang word for the Tir?',
            answers: ['Meat Bag', 'Magic User', 'Firecracker', 'Disposable'],
            correctAnswer: 2,
            userAnswer: null,
            hint: 'They go BOOM'
        },

        {
            image: 'images/intro_image.png',
            question: 'Which race favors Blood Magic?',
            answers: ['Cayad', 'Minotaur', 'Hadjen', 'Tir'],
            correctAnswer: 0,
            userAnswer: null,
            hint: 'They are the dogs --- Cayad'
        },

        {
            image: 'images/intro_image.png',
            question: 'What is the range of the Heal magic spell?',
            answers: ['Range of the Melee Weapon', 'Half-inch', 'One-inch', 'Depends on who is casting it'],
            correctAnswer: 0,
            userAnswer: null,
            hint: 'It\'s all about the melee weapon',
        },

        {
            image: '',
            question: 'How many paths (classes) are currently available to choose from as a primary path?',
            answers: ['4', '5', '6', '7'],
            correctAnswer: 2,
            userAnswer: null,
            hint: 'Between 5 &amp; 7'
        },
    ],
    currentQuestion: 0,
	correctAnswers: 0,
    score: 0,
	hintsUsed: 0
};


// State modification functions


// Render functions
var renderList = function(element) {
    // debugger;
    var question = quiz.state[quiz.currentQuestion];

    var quizParameters = $('#quiz-item').html()
        .replace('{{id}}', quiz.currentQuestion)
        .replace('{{image}}', question.image)
        .replace('{{question}}', question.question)
        .replace('{{answer1}}', question.answers[0])
        .replace('{{answer2}}', question.answers[1])
        .replace('{{answer3}}', question.answers[2])
        .replace('{{answer4}}', question.answers[3]) 
        .replace('{{score}}', quiz.score)                              
        .replace('{{hint}}', question.hint);  
    element.html(quizParameters);
};



// Event listeners
function displayCurrentQuestion() {
    renderList($('#quizParts'))
    
    $("#hint").click(function() {
            $("#hintInfo").fadeToggle();
    });



    $('#answer1, #answer2, #answer3, #answer4').click(function () {
        var question = quiz.state[quiz.currentQuestion];

       if (this.id == 'answer1') {
          question.userAnswer = 0;
        } 
        else if (this.id == 'answer2') {
          question.userAnswer = 1;
        } 
        else if (this.id == 'answer3') {
          question.userAnswer = 2;
        }
        else if (this.id == 'answer4') {
          question.userAnswer = 3;
        }


        console.log(question.userAnswer);
        console.log(question.correctAnswer);
        
        if (question.userAnswer == question.correctAnswer) {
            quiz.score = quiz.score +=1
        }


        // if(question.userAnswer == question.correctAnswer) {
            // return quiz.score++
        // };
        console.log(quiz.score);
    
        quiz.currentQuestion++;
        displayCurrentQuestion();
        
    });
}


$(document).ready(function() {
    displayCurrentQuestion();
});




