let closeTestBTN = document.querySelector("#closeTestBTN");
closeTestBTN.addEventListener("click", (e) => {
	//
	e.preventDefault();
	window.location.href = "../";
	exit();
});

stage1 = document.querySelector("#cbtStage1");
stage2 = document.querySelector("#cbtStage2");
stage3 = document.querySelector("#cbtStage3");
stage1BTN = document.querySelector("#stage1BTN");
stage2BTN = document.querySelector("#stage2BTN");
stage3BTN = document.querySelector("#stage3BTN");

// Current question index
var currentQuestion = 0;

// Timer variables
var hours = 0;
var minutes = 0;
var seconds = 0;

let questionContainer = document.querySelector("#questionContainer");// functions to switch the stages 

function startCBT(){
	// 
	stage1.style.display = "none";
	stage2.style.display = "block";
	stage2.classList.remove("hide");
	stage3.style.display = "none";

	// Initialize timer
	setInterval(startTimer(), 1000); // Update timer every second
	updateQuestion();
	// disableEnableOptions();
}

function goToStage3(){
	// 
	stage1.style.display = "none";
	stage2.style.display = "none";
	stage3.style.display = "block";
	stage3.classList.remove("hide");

	clearInterval(stopTimer());

	document.getElementById("questionCount").innerHTML = 0;

	let nextQuestionBtn = document.querySelector("#next-question");
	let prevQuestionBtn = document.querySelector("#prev-question");
	let stage3BTN = document.querySelector("#stage3BTN");

	nextQuestionBtn.style.display = "none";
	prevQuestionBtn.style.display = "none";
	stage3BTN.style.display = "block";

	//call another function to submit the exam automatically here and another to refresh the cbt system
		let question = questions[currentQuestion];

  // to select all checkboxes inside of any element with a .form-group bootstrap class
	let options = document.querySelectorAll("#questionContainer .option");
	let selectedOption = Array.from(options).find((option) => option.checked);

	if(selectedOption){
		// save to answers array
		question.selectedAns = selectedOption.value;
		question.attempted = true;

		if (selectedOption.value === question.answer) {
			question.mark = 10;

				// prepare the question array key for the next question to be asked
		 	currentQuestion + 1;
		  	if (currentQuestion >= questions.length) {
		    	currentQuestion = 0;
		  	}

		}else{
			question.mark = 0;

				// prepare the question array key for the next question to be asked
		 	currentQuestion + 1;
		  	if (currentQuestion >= questions.length) {
		    	currentQuestion = 0;
		  	}
		}


	}else{
		Toastify({
			  text: "You didn't select any option in the last question",
			  duration: 5000,
			  // destination: "https://github.com/apvarun/toastify-js",
			  newWindow: false,
			  close: true,
			  gravity: "top", // `top` or `bottom`
			  position: "right", // `left`, `center` or `right`
			  stopOnFocus: true, // Prevents dismissing of toast on hover
			  style: {
			    background: "blue",
			    color: "#fff", //"linear-gradient(to right, #00b09b, #96c93d)",
			  },
			  onClick: function(){}, // Callback after click
			  offset: {
			    x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
			    y: 100 // vertical axis - can be a number or a string indicating unity. eg: '2em'
			  },
			}).showToast();

	}


// submit to server to save user test
let test_params = [];		
// test_params[...school, ...test_id, ...user_id, ...ans_questions, ...learners];

test_params.push(school);
test_params.push(test_id);
test_params.push(user_id);
test_params.push(questions);
test_params.push(learners);
// test_params.push(score);

let testScore = document.querySelector("#testScore");
let submit = insertQuery('../../../../Engine/cbt/submit_test.php', test_params);

					submit.then(res => {
						// display score
						let allMarks = 0;
						let totalMarks = questions.length * 10;
						let score = `You scored <b>${res.score}</b> out of <b>${totalMarks}</b>`;
						testScore.innerHTML = score;
						// notify success
						Toastify({
						  text: res.message,
						  duration: 5000,
						  // destination: "https://github.com/apvarun/toastify-js",
						  newWindow: false,
						  close: true,
						  gravity: "top", // `top` or `bottom`
						  position: "right", // `left`, `center` or `right`
						  stopOnFocus: true, // Prevents dismissing of toast on hover
						  style: {
						    background: "blue",
						    color: "#fff", //"linear-gradient(to right, #00b09b, #96c93d)",
						  },
						  onClick: function(){}, // Callback after click
						  offset: {
						    x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
						    y: 100 // vertical axis - can be a number or a string indicating unity. eg: '2em'
						  },
						}).showToast();


					});


}


// Function to update question and options
function updateQuestion() {
  generateQuestion();

}

// function to generate and display question inside of the question container

function generateQuestion(){
  var question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question.question;

  if (question.attempted != false) {
  		  // values
		  document.getElementById("option-1-value").value = question.options[0];
		  document.getElementById("option-2-value").value = question.options[1];
		  document.getElementById("option-3-value").value = question.options[2];
		  document.getElementById("option-4-value").value = question.options[3];
		  // labels
		  document.getElementById("option-1-label").innerHTML = question.options[0];
		  document.getElementById("option-2-label").innerHTML = question.options[1];
		  document.getElementById("option-3-label").innerHTML = question.options[2];
		  document.getElementById("option-4-label").innerHTML = question.options[3];
		  let options = document.querySelectorAll("#questionContainer .option");

		  // Enable all options
			options.forEach(function(option) {
				if (question.selectedAns === option.value) {
					// Deselect the option
					option.classList.add("selected");
					option.checked = true;
					option.disabled = false;
				}else{
					// Deselect the option
					option.classList.remove("selected");
					option.checked = false;
					option.disabled = true;
				}
			});		  			

  }else{
  		  // values
		  document.getElementById("option-1-value").value = question.options[0];
		  document.getElementById("option-2-value").value = question.options[1];
		  document.getElementById("option-3-value").value = question.options[2];
		  document.getElementById("option-4-value").value = question.options[3];
		  // labels
		  document.getElementById("option-1-label").innerHTML = question.options[0];
		  document.getElementById("option-2-label").innerHTML = question.options[1];
		  document.getElementById("option-3-label").innerHTML = question.options[2];
		  document.getElementById("option-4-label").innerHTML = question.options[3];

		  let options = document.querySelectorAll("#questionContainer .option");

		  //Enable all options
			options.forEach(function(option) {
				// Deselect the option
				option.classList.remove("selected");
				option.checked = false;
				option.disabled = false;
			});	  
  }

	document.getElementById("questionCount").innerHTML = (currentQuestion + 1) + " / " + questions.length;

}
// disable options buttons once one has been selected and re-enable them once the selected option has been deselected
// Get all option elements
	var options = document.querySelectorAll(".option");

	// 

	options.forEach(function(option) {
	  option.addEventListener("click", function() {
	    // If the option is selected
	    if (option.classList.contains("selected")) {
	      // Deselect the option
	      option.classList.remove("selected");
	      // Enable all options
	      options.forEach(function(otherOption) {
	        otherOption.disabled = false;
	      });
	    } else {
	      // Select the option
	      option.classList.add("selected");
	      // Disable all other options
	      options.forEach(function(otherOption) {
	        if (otherOption !== option) {
	          otherOption.disabled = true;
	        }
	      });
	    }
	  });
	});



function saveAnswer(currentQuestion){
	// 

	let options = document.querySelectorAll(".option");

	let selectedAns = options.checked;

}

// function to disable other options or enable them once one is click

// Next button click handler
document.getElementById("next-question").addEventListener("click", function() {

	let question = questions[currentQuestion];


  // to select all checkboxes inside of any element with a .form-group bootstrap class
	let options = document.querySelectorAll("#questionContainer .option");

	let selectedOption = Array.from(options).find((option) => option.checked);

	if(selectedOption){

		question.selectedAns = selectedOption.value;
		question.attempted = true;

		if (selectedOption.value === question.answer) {
			question.mark = 10;

				// prepare the question array key for the next question to be asked
		 	currentQuestion + 1;
		  	if (currentQuestion >= questions.length) {
		    	currentQuestion = 0;
		  	}

		}else{
			question.mark = 0;


				// prepare the question array key for the next question to be asked
		 	currentQuestion + 1;
		  	if (currentQuestion >= questions.length) {
		    	currentQuestion = 0;
		  	}
		}


	}else{
		Toastify({
			  text: "You didn't select any option in the last question",
			  duration: 5000,
			  // destination: "https://github.com/apvarun/toastify-js",
			  newWindow: false,
			  close: true,
			  gravity: "top", // `top` or `bottom`
			  position: "right", // `left`, `center` or `right`
			  stopOnFocus: true, // Prevents dismissing of toast on hover
			  style: {
			    background: "blue",
			    color: "#fff", //"linear-gradient(to right, #00b09b, #96c93d)",
			  },
			  onClick: function(){}, // Callback after click
			  offset: {
			    x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
			    y: 100 // vertical axis - can be a number or a string indicating unity. eg: '2em'
			  },
			}).showToast();

	}

  // uncheck all options  
	// Enable all options
	options.forEach(function(option) {
		// Deselect the option
		option.classList.remove("selected");
		option.checked = false;
		option.disabled = false;
	});


  // saveAnswer(currentQuestion);
  updateQuestion();
  displayOrHideNextOrPrevButtons();
  displayOrHideSubmitButton();
});

// Previous button click handler
document.getElementById("prev-question").addEventListener("click", function() {
  currentQuestion--;
  if (currentQuestion < 0) {
    currentQuestion = questions.length - 1;
  }
  updateQuestion();
  displayOrHideNextOrPrevButtons();
  displayOrHideSubmitButton();
});


// function to hide or diplay next or prev buttons 
function displayOrHideNextOrPrevButtons(){
	let nextQuestionBtn = document.querySelector("#next-question");
	let prevQuestionBtn = document.querySelector("#prev-question");
	let stage3BTN = document.querySelector("#stage3BTN");

	if (currentQuestion <= 0 ) {
		prevQuestionBtn.style.display = "none";
	}else{
		prevQuestionBtn.style.display = "block";
	}

	if (currentQuestion + 1 >= questions.length) {
		nextQuestionBtn.style.display = "none";
	}else{
		nextQuestionBtn.style.display = "block";
	}
}

// function to display submit button

function displayOrHideSubmitButton(){
	if (currentQuestion + 1 >= questions.length) {
		stage3BTN.style.display = "block";
		stage3BTN.classList.remove("hide");
	}else{
		stage3BTN.style.display = "none";
	}
}


// Function to update timer
function startTimer() {
	let timer = setInterval(() => {
		seconds++;
	  if (seconds >= 60) {
	    seconds = 0;
	    minutes++;
	  }
	  if (minutes >= 60) {
	    minutes = 0;
	    hours++;
	  }
	  document.getElementById("timer").innerHTML = hours + " : " + minutes + " : " + seconds ;
		}, 1000);
}

function stopTimer() {
	seconds = 0;
	minutes = 0;
	hours = 0;
  document.getElementById("timer").innerHTML = hours + " : " + minutes + " : " + seconds ;
  clearInterval(timer);
}


//function to end and submit test
function endTest(){

	document.getElementById("questionCount").innerHTML = 0;

	goToStage3();

	//call another function to submit the exam automatically here and another to refresh the cbt system
}

// add event listener to stage 1 button so that it goes to stage 2

stage1BTN.addEventListener("click", (e) => {
	e.preventDefault();
	startCBT();
});



// 

stage3BTN.addEventListener("click", (e) => {
	e.preventDefault();


	stopTimer();
	goToStage3();
});


// i may use a templating code to automatically generate options and display them using innerHTML method


// Add event listener to each option

function disableEnableOptions(){
	// // Get all option elements
	var options = document.querySelectorAll(".option");

	// 

	options.forEach(function(option) {
	  option.addEventListener("click", function() {
	    // If the option is selected
	    if (option.classList.contains("selected")) {
	      // Deselect the option
	      option.classList.remove("selected");
	      // Enable all options
	      options.forEach(function(otherOption) {
	        otherOption.disabled = false;
	      });
	    } else {
	      // Select the option
	      option.classList.add("selected");
	      // Disable all other options
	      options.forEach(function(otherOption) {
	        if (otherOption !== option) {
	          otherOption.disabled = true;
	        }
	      });
	    }
	  });
	});


	// alert("I am about working")
}


// function to disable other options or enable them once one is click

// Next button click handler
document.getElementById("next-question").addEventListener("click", function() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    currentQuestion = 0;
  }

  let question = questions[currentQuestion];

  // saveAnswer();
  updateQuestion();
  displayOrHideNextOrPrevButtons();
  displayOrHideSubmitButton();
});

// Previous button click handler
document.getElementById("prev-question").addEventListener("click", function() {
  // currentQuestion--;
  if (currentQuestion < 0) {
    currentQuestion = questions.length - 1;
  }

  updateQuestion();
  displayOrHideNextOrPrevButtons();
  displayOrHideSubmitButton();
});


// Function to get previously answered questions from the answers array:

function getPreviousAnswer(currentQuestion) {
  if (answers[currentQuestion] !== undefined) {
    const previousAnswer = answers[currentQuestion];
    // Select the previously chosen option and disable the other options
    $(`#option-${previousAnswer}`).prop('selected', true);
    $(`#option-${previousAnswer}`).siblings().prop('disabled', true);
  }
}

function submitTest(){
	// 



}


// initialize activities 
	


window.addEventListener("DOMContentLoaded", () => {
	displayOrHideNextOrPrevButtons();
});


