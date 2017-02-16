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
            image: '',
            question: 'What kind of game is Parallax?',
            answers: ['Video Game', 'Role-playing Game', 'Miniatures Game', 'Board Game'],
            correctAnswer: 2,
            userAnswer: null,
            hint: 'You use \'Minatures\''
        },
        {
            image: '',
            question: 'What kind of dice does Parallax use?',
            answers: ['d6', 'd10', 'd20', 'd2'],
            correctAnswer: 1,
            userAnswer: null,
            hint: 'It is more than 10'
        },
        {
            image: '',
            question: 'How many races are currently available to play?',
            answers: ['6', '7', '4', '2'],
            correctAnswer: 0,
            userAnswer: null,
            hint: 'More than 4, but less than 7'
        },
        {
            image: '',
            question: 'Which race served as the royal guard for the Hadjen?',
            answers: ['Tir', 'Devoid', 'Cayad', 'Minotaur'],
            correctAnswer: 3,
            userAnswer: null,
            hint: 'Looks a lot like a bull'
        },
        {
            image: '',
            question: 'Who is the leader of the Tir?',
            answers: ['Damar', 'Marax', 'Kallan', 'Bob'],
            correctAnswer: 1,
            userAnswer: null,
            hint: 'Rhymes with Paxax'
        },
        {
            image: '',
            question: 'Which race uses totems?',
            answers: ['Minotaur', 'Sicarius', 'Hadjen', 'Devoid'],
            correctAnswer: 1,
            userAnswer: null,
            hint: 'The look like cats ---- Sicarius'
        },

        {
            image: '',
            question: 'What is the slang word for the Tir?',
            answers: ['Meat Bag', 'Magic User', 'Firecracker', 'Disposable'],
            correctAnswer: 2,
            userAnswer: null,
            hint: 'They go BOOM'
        },

        {
            image: '',
            question: 'Which race favors Blood Magic?',
            answers: ['Cayad', 'Minotaur', 'Hadjen', 'Tir'],
            correctAnswer: 0,
            userAnswer: null,
            hint: 'They are the dogs --- Cayad'
        },

        {
            image: '',
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
	hintsUsed: 0
};



$(document).ready(function() {
        $("#hint").click(function() {
            $("#hintInfo").fadeToggle();
        });
    });