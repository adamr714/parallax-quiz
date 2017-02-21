// 5. Show the correct answer if wrong

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
            image: 'images/d10.png',
            question: 'What kind of dice does Parallax use?',
            answers: ['d6', 'd10', 'd20', 'd2'],
            correctAnswer: 1,
            userAnswer: null,
            hint: 'You\'ll always be a 10 to me'
        },
        {
            image: 'images/races.png',
            question: 'How many races are currently available to play?',
            answers: ['6', '7', '4', '2'],
            correctAnswer: 0,
            userAnswer: null,
            hint: 'More than 4, but less than 7'
        },
        {
            image: 'images/minotaur.png',
            question: 'Which race served as the royal guard for the Hadjen?',
            answers: ['Tir', 'Devoid', 'Cayad', 'Minotaur'],
            correctAnswer: 3,
            userAnswer: null,
            hint: 'Looks a lot like a bull'
        },
        {
            image: 'images/marax.png',
            question: 'Who is the leader of the Tir?',
            answers: ['Damar', 'Marax', 'Kallan', 'Bob'],
            correctAnswer: 1,
            userAnswer: null,
            hint: 'Rhymes with Parax'
        },
        {
            image: 'images/sicarius.png',
            question: 'Which race uses totems?',
            answers: ['Minotaur', 'Sicarius', 'Hadjen', 'Devoid'],
            correctAnswer: 1,
            userAnswer: null,
            hint: 'The look like cats ---- Sicarius'
        },

        {
            image: 'images/marax.png',
            question: 'What is the slang word for the Tir?',
            answers: ['Meat Bag', 'Magic User', 'Firecracker', 'Disposable'],
            correctAnswer: 2,
            userAnswer: null,
            hint: 'They go BOOM'
        },

        {
            image: 'images/cayad.png',
            question: 'Which race favors Blood Magic?',
            answers: ['Cayad', 'Minotaur', 'Hadjen', 'Tir'],
            correctAnswer: 0,
            userAnswer: null,
            hint: 'They are the dogs --- Cayad'
        },

        {
            image: 'images/magic.png',
            question: 'What is the range of the Heal magic spell?',
            answers: ['Range of the Melee Weapon', 'Half-inch', 'One-inch', 'Depends on who is casting it'],
            correctAnswer: 0,
            userAnswer: null,
            hint: 'It\'s all about the melee weapon',
        },

        {
            image: 'images/paths.png',
            question: 'How many paths (classes) are currently available to choose from as a primary path?',
            answers: ['4', '5', '6', '7'],
            correctAnswer: 1,
            userAnswer: null,
            hint: 'Between 5 &amp; 7'
        }
        // {
        //     image: 'images/intro_image.png',
        //     question: 'Thank you for playing.  Your final score is: " quiz.score',
        //     answers: ['', '', '', ''],
        //     correctAnswer: null,
        //     userAnswer: null,
        //     hint: null
        // }
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

    $("#hint").click(function() {
           ++quiz.hintsUsed;
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
        
        //Quiz Score
        if (question.userAnswer == question.correctAnswer) {
            ++quiz.score 
        } else {
            // alert('Close...but the correct answer is: ' + question.correctAnswer);
        }



        quiz.currentQuestion++;

        if(quiz.currentQuestion >= Object.keys(quiz.state).length) {
            $('#quizParts').fadeOut(400, function() {
                $('#quizScore').removeClass('hintClueBox');
            });

            $('#finalScore').replaceWith('<p>Your score is: <strong>' + quiz.score + '</strong> out of 10!</p>');
            $('#hintsUsed').replaceWith('<p>You used: <strong>' + quiz.hintsUsed + '</strong> hints.</p>');

            switch (quiz.score) {
                case 0:
                case 1: 
                    $('#ranking').replaceWith('<p>You earned the ranking of: <br /><strong>Slave in the Hadjen’s Pit</strong></p>');
                    $('#imgPlaceholder').replaceWith('<img clas="image" src="images/d10.png" />');
                    break;
                case 2:
                case 3:
                     $('#ranking').replaceWith('<p>You earned the ranking of: <br /><strong>Lost in the world of Parallax</strong></p>');
                    break; 
                case 4:
                case 5:
                     $('#ranking').replaceWith('<p>You earned the ranking of: <br /><strong>Nharmyth Bait!</strong></p>');
                    break;
                case 6:
                case 7:
                     $('#ranking').replaceWith('<p>You earned the ranking of: <br /><strong>Minotaur Sage</strong></p>');
                    break;
                case 8:
                case 9:
                     $('#ranking').replaceWith('<p>You earned the ranking of: <br /><strong>Devoid Warlord</strong></p>');                
                     break;
                case 10:
                     $('#ranking').replaceWith('<p>You earned the ranking of: <br /><strong>Master of Parallax</strong></p>');
                     break;
                default: 
                    text = "Quiz is over";
            }
        }

        console.log("Current Question: " + quiz.currentQuestion);
        console.log("Number of Question: " + Object.keys(quiz.state).length);
        console.log("Hints Used: " + quiz.hintsUsed);


        displayCurrentQuestion();
        
    });
}

$(document).ready(function() {
    displayCurrentQuestion();
});




