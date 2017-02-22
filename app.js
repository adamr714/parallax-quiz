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
            hint: 'Between 4 &amp; 6'
        }
    ],
    ranking: {
        0: {
            rank: 'Slave in the Hadjen’s Pit',
            image: 'images/d10.png'
        },
        1: {
            rank: 'Slave in the Hadjen’s Pit',
            image: 'images/d10.png'
        },
        2: {
            rank: 'Sicarius Scratching Pole',
            image: 'images/d10.png'
        },
        3: {
            rank: 'Sicarius Scratching Pole',
            image: 'images/d10.png'
        },
        4: {
            rank: 'Nharmyth Bait!',
            image: 'images/d10.png'
        },
        5: {
            rank: 'Nharmyth Bait!',
            image: 'images/d10.png'
        },
        6: {
            rank: 'Minotaur Sage',
            image: 'images/d10.png'
        },
        7: {
            rank: 'Minotaur Sage',
            image: 'images/d10.png'
        },
        8: {
            rank: 'Devoid Warlord',
            image: 'images/d10.png'
        },
        9: {
            rank: 'Devoid Warlord',
            image: 'images/d10.png'
        },
        10: {
            rank: 'Master of Parallax<',
            image: 'images/d10.png'
        }
    },
    currentQuestion: 0,
    correctAnswers: 0,
    score: 0,
    hintsUsed: 0
};


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

    $('#quizStart').click(function() {
        $('#quizStart').fadeOut(1000, function() {
            $('#quizParts').removeClass('hintClueBox');
        });
    });

    $("#hint").click(function() {
        $("#hintInfo").fadeToggle();
    });

    $("#hint").click(function() {
        ++quiz.hintsUsed;
    });

    $('#answer1, #answer2, #answer3, #answer4').click(function() {
        var question = quiz.state[quiz.currentQuestion];
        question.userAnswer = parseInt(this.id[this.id.length - 1]) - 1;

        if (question.userAnswer == question.correctAnswer) {
            quiz.score++
        }

        quiz.currentQuestion++;

        quizScore();
    });
}

function quizScore() {
    if (quiz.currentQuestion >= Object.keys(quiz.state).length) {

        $('#quizParts').fadeOut(400, function() {
            $('#quizScore').removeClass('hintClueBox');
            $('#quizScore').show();
        });

        $('#finalScore').replaceWith('<p>Your score is: <strong>' + quiz.score + '</strong> out of 10!</p>');
        $('#hintsUsed').replaceWith('<p>You used: <strong>' + quiz.hintsUsed + '</strong> hints.</p>');

        var ranking = quiz.ranking[quiz.score];

        $('#ranking').replaceWith('<p>You earned the ranking of: <br /><strong>' + ranking.rank + '</strong></p>');
        $('#imgPlaceholder').replaceWith('<img clas="image" src="' + ranking.image + '" />');
    }

    displayCurrentQuestion();
}

function resetQuiz() {
    quiz.currentQuestion = 0;
    quiz.correctAnswers = 0;
    quiz.score = 0;
    quiz.hintsUsed = 0;
    $('#quizScore').fadeOut(400, function() {
        $('#quizParts').show();
        displayCurrentQuestion();
    });
}


$(document).ready(function() {
    displayCurrentQuestion();
});