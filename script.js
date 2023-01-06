// Questions will be asked
const Questions = [{
		id: 0,
		q: "What is capital of India ?",
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

// Set start
var start = true;

// Iterate
function iterate(id) {

	// Getting the result display section
	var result = document.getElementsByClassName("result");
	result[0].innerText = "";

	// Getting the question
	const question = document.getElementById("question");


	// Setting the question text
	question.innerText = Questions[id].q;

	// Getting the options
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');


	// Providing option text
	op1.innerText = Questions[id].a[0].text;
	op2.innerText = Questions[id].a[1].text;
	op3.innerText = Questions[id].a[2].text;
	op4.innerText = Questions[id].a[3].text;

	// Providing the true or false value to the options
	op1.value = Questions[id].a[0].isCorrect;
	op2.value = Questions[id].a[1].isCorrect;
	op3.value = Questions[id].a[2].isCorrect;
	op4.value = Questions[id].a[3].isCorrect;

	var selected = "";

	// Show selection for op1
	op1.addEventListener("click", () => {
		op1.style.backgroundColor = "lightgoldenrodyellow";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightskyblue";
		selected = op1.value;
	})

	// Show selection for op2
	op2.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightgoldenrodyellow";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightskyblue";
		selected = op2.value;
	})

	// Show selection for op3
	op3.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightgoldenrodyellow";
		op4.style.backgroundColor = "lightskyblue";
		selected = op3.value;
	})

	// Show selection for op4
	op4.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightgoldenrodyellow";
		selected = op4.value;
	})

	// Grabbing the evaluate button
	const evaluate = document.getElementsByClassName("evaluate");

	// Evaluate method
	evaluate[0].addEventListener("click", () => {
		if (selected == "true") {
			result[0].innerHTML = "Correct";
			result[0].style.color = "green";
		} else {
			result[0].innerHTML = "Try Again ! ";
			result[0].style.color = "red";
		}
	})
}

if (start) {
	iterate("0");
}

var id = 0;
// Next button and method
const next = document.getElementsByClassName('next')[id];



next.addEventListener("click", () => {
	start = false;
	id=Math.floor(Math.random() * 20)
	if (id) {
		id++;
		iterate(id);
		console.log(id);
	}
	
})
