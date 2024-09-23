const Questions = [{
		id: 0,
		q: "What is the capital of India ?",
		a: [{ text: "Kolkata", isCorrect: false },
			{ text: "Surat", isCorrect: false },
			{ text: "Delhi", isCorrect: true },
			{ text: "Mumbai", isCorrect: false }
		]

	},
	{
		id: 1,
		q: "What is the capital of Italy ?",
		a: [{ text: "Egypt", isCorrect: false, isSelected: false },
			{ text: "Rome", isCorrect: true },
			{ text: "Dublin", isCorrect: false },
			{ text: "Bangkok", isCorrect: false }
		]

	},
	{
		id: 2,
		q: "What is the capital of France ?",
		a: [{ text: "Paris", isCorrect: true },
			{ text: "London", isCorrect: false },
			{ text: "Rome", isCorrect: false },
			{ text: "Berlin", isCorrect: false }
		]

	},
	
	{
		id: 3,
		q: "What is the capital of Bangladesh ?",
		a: [{ text: "Hanoi", isCorrect: false },
			{ text: "Bangkok", isCorrect: false },
			{ text: "Dhaka", isCorrect: true },
			{ text: "Kolkata", isCorrect: false }
		]

	},
	
	{
		id: 4,
		q: "What is the capital of Canada ?",
		a: [{ text: "Ottawa", isCorrect: true },
			{ text: "Tokyo", isCorrect: false },
			{ text: "Paris", isCorrect: false },
			{ text: "Moscow", isCorrect: false }
		]

	},
	
	{
		id: 5,
		q: "What is the capital of Iran ?",
		a: [{ text: "Tehran", isCorrect: true },
			{ text: "Tabriz", isCorrect: false },
			{ text: "Egypt", isCorrect: false },
			{ text: "Berlin", isCorrect: false }
		]

	},
	
	{
		id: 6,
		q: "What is the capital of Russia ?",
		a: [{ text: "Vladivostok", isCorrect: false },
			{ text: "Bangkok", isCorrect: false },
			{ text: "St. Petersburg", isCorrect: false },
			{ text: "Moscow", isCorrect: true }
		]

	},
	
	{
		id: 7,
		q: "What is the capital of Australia ?",
		a: [{ text: "Melbourne", isCorrect: false },
			{ text: "Sydney", isCorrect: false },
			{ text: "Canberra", isCorrect: true },
			{ text: "Perth", isCorrect: false }
		]

	},
	{
		id: 8,
		q: "What is the capital of Vietnam ?",
		a: [{ text: "Hanoi", isCorrect: true },
			{ text: "Paris", isCorrect: false },
			{ text: "Egypt", isCorrect: false },
			{ text: "Naypyitaw", isCorrect: false }
		]

	},
	
	{
		id: 9,
		q: "What is the capital of Malaysia ?",
		a: [{ text: "George Town", isCorrect: false },
			{ text: "Lisbon", isCorrect: false },
			{ text: "Kuala Lumpur", isCorrect: true },
			{ text: "Tokyo", isCorrect: false }
		]

	},
	{
		id: 10,
		q: "What is the capital of Afghanistan ?",
		a: [{ text: "Islamabad", isCorrect: false },
			{ text: "Kabul", isCorrect: true },
			{ text: "Jalalabad", isCorrect: false },
			{ text: "Dushanbe", isCorrect: false }
		]

	},
	{
		id: 11,
		q: "What is the capital of Croatia ?",
		a: [{ text: "Zagreb", isCorrect: true },
			{ text: "Perth", isCorrect: false },
			{ text: "Zadar", isCorrect: false },
			{ text: "Kiev", isCorrect: false }
		]

	},
	
	{
		id: 12,
		q: "What is the capital of Nepal ?",
		a: [{ text: "Dhankuta", isCorrect: false },
			{ text: "Pokhara", isCorrect: false },
			{ text: "Dhaka", isCorrect: false },
			{ text: "Katmandu", isCorrect: true }
		]

	},
	
	{
		id: 13,
		q: "What is the capital of Portugal ?",
		a: [{ text: "Madrid", isCorrect: false },
			{ text: "Minho", isCorrect: false },
			{ text: "Berlin", isCorrect: false },
			{ text: "Lisbon", isCorrect: true }
		]

	},
	{
		id: 14,
		q: "What is the capital of Nigeria ?",
		a: [{ text: "Cairo", isCorrect: false },
			{ text: "Abuja", isCorrect: true },
			{ text: "Victoria", isCorrect: false },
			{ text: "Tokyo", isCorrect: false}
		]

	},
	{
		id: 15,
		q: "What is the capital of Jamaica ?",
		a: [{ text: "Kingston", isCorrect: true },
			{ text: "Georgetown", isCorrect: false },
			{ text: "Madrid", isCorrect: false },
			{ text: "Portmore", isCorrect: false}
		]

	},
	{
		id: 16,
		q: "What is the capital of Zimbabwe ?",
		a: [{ text: "Durban", isCorrect: false },
			{ text: "Gaborone", isCorrect: false },
			{ text: "Harare", isCorrect: true },
			{ text: "Gweru", isCorrect: false }
		]

	},
	
	{
		id: 17,
		q: "What is the capital of China ?",
		a: [{ text: "Shanghai", isCorrect: false },
			{ text: "Hong Kong", isCorrect: false },
			{ text: "Beijing", isCorrect: true },
			{ text: "Shanxi", isCorrect: false }
		]

	},
	{
		id: 18,
		q: "What is the capital of Turkey ?",
		a: [{ text: "Abu Dhabi", isCorrect: false },
			{ text: "Istanbul", isCorrect: false },
			{ text: "Colombo", isCorrect: false },
			{ text: "Ankara", isCorrect: true }
		]

	},
	
	{
		id: 19,
		q: "What is the capital of Switzerland ?",
		a: [{ text: "Berne", isCorrect: true },
			{ text: "Doha", isCorrect: false },
			{ text: "Glarus", isCorrect: false },
			{ text: "Vienna", isCorrect: false }
		]

	}
	

]
let score = 0;
let answeredQuestions = [];
var start = true;

function resetButtonColors() {
    document.getElementById('op1').style.backgroundColor = "lightskyblue";
    document.getElementById('op2').style.backgroundColor = "lightskyblue";
    document.getElementById('op3').style.backgroundColor = "lightskyblue";
    document.getElementById('op4').style.backgroundColor = "lightskyblue";
}
function updateScoreDisplay() {
    document.getElementById('score').innerText = `Score: ${score}/100`;
}

function iterate(id) {
    resetButtonColors();
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    const question = document.getElementById("question");
    var selected = "";

    question.innerText = Questions[id].q;

    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    const evaluate = document.getElementsByClassName("evaluate");
    evaluate[0].disabled = false;

    [op1, op2, op3, op4].forEach((option) => {
        option.addEventListener("click", () => {
            resetButtonColors();
            option.style.backgroundColor = "lightgoldenrodyellow";
            selected = option.innerText; // Store the selected text
        });
    });

    evaluate[0].addEventListener("click", () => {
        const correctOption = Questions[id].a.find(option => option.isCorrect).text;
        if (Questions[id].a.find(option => option.text === selected).isCorrect) {
            result[0].innerHTML = "Correct";
            result[0].style.color = "green";
            score=score+5;
			updateScoreDisplay();
        } else {
            result[0].innerHTML = `The correct answer is: ${correctOption}`;
            result[0].style.color = "red";
        }
        evaluate[0].disabled = true;
    });
}

function getNewQuestion() {
    if (answeredQuestions.length === Questions.length) {
        alert("All questions have been answered!");
        return null; // All questions answered
    }

    let newId;
    do {
        newId = Math.floor(Math.random() * Questions.length);
    } while (answeredQuestions.includes(newId)); // Ensure the question hasn't been answered yet

    answeredQuestions.push(newId); // Add to answered questions
    return newId;
}

function getInitialQuestion() {
    const initialId = getNewQuestion();
    if (initialId !== null) {
        iterate(initialId);
    }
}

function nextQuestion() {
    const newId = getNewQuestion();
    if (newId !== null) {
        iterate(newId);
    }
}

// Set up the initial question
if (start) {
    getInitialQuestion();
}

// Next button and method
const next = document.getElementsByClassName('next')[0];

next.addEventListener("click", () => {
    start = false;
    nextQuestion(); // Load the next question
});
