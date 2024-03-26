const quiz = [


	{
		question : "Traditionally, which colour are cricket balls?",
		optionA : "White",
		optionB : "Red",
		optionC : "Pink",
		optionD : "Black",
		img : Object.assign(new Image,{
			src: "images/ques1.jpg"                          //https://stackoverflow.com/questions/37103988/is-it-possible-to-set-an-image-source-on-a-javascript-object-property
		}),
		answer : 2,
		answerId : "choiceB"
		
	},
	
	{
		question : "The FIFA Football World Cup in 2022 organized in?",
		optionA : "Qatar",
		optionB : "Russia",
		optionC : "Brazil",
		optionD : "France",
		img : Object.assign(new Image,{
			src: "images/ques2.jpg"
		}),
		answer : 1,
		answerId : "choiceA"
			
	},
	
	{
		question : "In which country did cricket originate?",
		optionA : "India",
		optionB : "Australia",
		optionC : "England",
		optionD : "Sri Lanka",
		img : Object.assign(new Image,{
			src: "images/ques3.jpg"
		}),
		answer : 3,
		answerId : "choiceC"
		
	},
	
	{
		question :"How many players are there on a rugby team?",
		optionA : "7",
		optionB : "11",
		optionC : "15",
		optionD : "16",
		img : Object.assign(new Image,{
			src: "images/ques4.jpeg"
		}),
		answer : 3,
		answerId : "choiceC"
		
	},
	
	{
		question : "Which country has played the maximum number of one day matches?",
		optionA : "Australia",
		optionB : "England",
		optionC : "india",
		optionD : "SriLanka",
		img : Object.assign(new Image,{
			src: "images/ques5.jpeg"
		}),
		answer : 1,
		answerId : "choiceA"
		
	},
	
	{
		question : "Which player holds the record for most goals in World Cup Finals",
		optionA : "Lionel Messi",
		optionB : "Cristiano Ronaldo",
		optionC : "MoroslavKlose",
		optionD : "Kyllian Mbappe",
		img : Object.assign(new Image,{
			src: "images/ques6.jpg"
		}),
		answer : 3,
		answerId : "choiceC"
		
	},
	
	{
		question : " Who is the first batsman to cross 10000 runs in Tests?",
		optionA : "Sachin Tendulkar",
		optionB : "virat Kohli",
		optionC : "Sunil Gavaskar",
		optionD : "kumar Sangakara",
		img : Object.assign(new Image,{
			src: "images/ques7.jpg"
		}),
		answer : 3,
		answerId : "choiceC"
		
	},
	
	{
		question : "FIFA was founded in?",
		optionA : "Germany",
		optionB : "France",
		optionC : "England",
		optionD : "Argentina",
		img : Object.assign(new Image,{
			src: "images/ques8.png"
		}),
		answer : 2,
		answerId : "choiceB"
		
	},
	
	
	{
		question : "How are the refrees called in cricket?",
		optionA : "Refree",
		optionB : "Midfielder",
		optionC : "Judge",
		optionD : "Umpire",
		img : Object.assign(new Image,{
			src: "images/ques9.webp"
		}),
		answer : 4,
		answerId : "choiceD"
		
	},
	
	{
		question : "When was the first FIFA World Cup inaugrated?",
		optionA : "1946",
		optionB : "1886",
		optionC : "1930",
		optionD : "1978",
		img : Object.assign(new Image,{
			src: "images/ques10.jpeg"
		}),
		answer : 3,
		answerId : "choiceC"
		
	}
	
]



let quizIndex;
let score;
let timer;
let allChoices = document.querySelectorAll(".radioButton")
let path;
let interval;



let startButton = document.querySelector("#startbtn") 
startButton.addEventListener("click",beginGame)

let resetButton = document.querySelector("#reset")
resetButton.addEventListener("click",resetGame)

let continueButton = document.querySelector("#continue");
continueButton.addEventListener("click",closeOptionValidatorPane)

let nextButton = document.querySelector("#button")
nextButton.addEventListener("click",quizFlow)

let quizBox = document.querySelector("#quizBox");
quizBox.style.visibility = "hidden"




// This is the function responsible for begining the quiz after the start button is clicked by the player.
function beginGame(){
	
	quizIndex = 0;
	score = 0;
	timer = 0;
	
	document.querySelector("#startPane").style.display = "none"
	quizBox.style.visibility = "visible"
	
	
	setTimeout(()=>{
		questionAllocator()
		interval = setInterval(quizTimer,1000)         // We store the id returned by the setInterval inorder to clear the timer when the quiz is reset by the player.
	},500);
	
}




// Function inserts the questions,choices and the images in the relavant div by getting them from the array defined at the top.
function questionAllocator(){
	
	let quizInProgress = quiz[quizIndex]
	
	document.querySelector("#questionNo").innerText = quizIndex + 1
	document.querySelector("#question").innerText = quizInProgress.question
	document.querySelector("#choiceLabel1").innerText = quizInProgress.optionA
	document.querySelector("#choiceLabel2").innerText = quizInProgress.optionB
	document.querySelector("#choiceLabel3").innerText = quizInProgress.optionC
	document.querySelector("#choiceLabel4").innerText = quizInProgress.optionD
	
	path = quizInProgress.img.src;
	document.querySelector("#picBox img").setAttribute("src",path);
	
}



// Function validates the answer entered by the player and changes the color of the div.For each write answer function increases the score by one.
function answerValidator(){
	
	let quizInProgress = quiz[quizIndex]
	let correctAnswer = quizInProgress.answer
	
	if(allChoices[0].checked == false && allChoices[1].checked == false && allChoices[2].checked == false && allChoices[3].checked == false ){
		document.querySelector("#optionValidator").style.display = "flex"
	}
		
	allChoices.forEach((choice) => {
		if(choice.checked){
			let selectedChoice = choice.value
			let selector = "#divOption" + selectedChoice
			let selectedDiv = document.querySelector(selector)  
			
			if(selectedChoice == correctAnswer){
				selectedDiv.style.backgroundColor = "#39FF14"
				score++
				
				
			}
			
			else{
				selectedDiv.style.backgroundColor = "#FF3131"                
				let correctSelector = "#divOption" + correctAnswer
				let correctDiv = document.querySelector(correctSelector)
				correctDiv.style.backgroundColor = "#39FF14"                
				selectedDiv.style.backgroundColor = "#FF3131"
				
			}
			
			quizIndex++
			
		}
	})
}



// function runs when the continue button on the validator pane is pressed
function closeOptionValidatorPane(){
	document.querySelector("#optionValidator").style.display = "none"
}



// function runs each time when the next button is pressed. This is the function that maintains the flow of the game by calling other functions within them.
function quizFlow(){
	
	answerValidator()
	
	allChoices.forEach((choice) =>{
		choice.checked = false                          // The checked button is unchecked here before the next quiz.
		
	})
	
	setTimeout(()=>{
		
		if(quizIndex < quiz.length){
			
		questionAllocator()
		
		}
		else{
			feedbackDisplay("CONGRATULATIONS: QUIZ COMPLETED")   
		}
		
		// the color changed as per the answer given by the user is changed back to normal before the next question.
		allChoices.forEach((choice)=> {
		let selectedChoice = choice.value
		let selector = "#divOption" + selectedChoice
		let selectedDiv = document.querySelector(selector)  
		selectedDiv.style.backgroundColor = ""
		})
	},1000);
	
}



// responsible for handling the timer that appeared at the top of the quizBox.
function quizTimer(){
	
	document.querySelector("#time").innerText = 120 - timer
	
	if(timer < 120 && quizIndex < quiz.length){
		
		timer++
		document.querySelector("#time").innerText = 120 - timer
	}
	else if(timer == 120){
		
		feedbackDisplay("YOUR TIME IS OVER")
	}
	
}




// Function runs on each time when user presses the reset button.
function resetGame(){
	
	document.querySelector("#feedbackPane").style.display = "none"
	quizBox.style.visibility = "hidden"
	document.querySelector("#startPane").style.display = "flex"
	
	clearInterval(interval)   //we are clearing the timer using the id that is returned by the set interval
	
	
	document.querySelector("#time").innerText = ""
	document.querySelector("#questionNo").innerText = ""
	document.querySelector("#question").innerText = ""
	document.querySelector("#choiceLabel1").innerText = ""
	document.querySelector("#choiceLabel2").innerText = ""
	document.querySelector("#choiceLabel3").innerText = ""
	document.querySelector("#choiceLabel4").innerText = ""
	document.querySelector("#picBox img").setAttribute("src","")
	document.querySelector("#optionValidator").style.display = "none"
	
	allChoices.forEach((choice) => {
		choice.checked = false
	})
	
	
	document.querySelector("#count").style.opacity = "1"
	document.querySelector("#contentBox").style.opacity = "1"
	document.querySelector("#innerContainer").style.opacity = "1"
	
	quizBox.style.visibility = "hidden"
	
}




// function displays text relavant to the score obtained by the player. The message parameter is the text that appears at the top of the feedback pane. 
function feedbackDisplay(message){
	
	document.querySelector("#feedbackPane").style.display = "block"
	let grade = (score / 10) * 100
	
	document.querySelector("#headingfb").innerText = message 
	document.querySelector("#falsefb").innerText = `Wrong Answers : ${10 - score}`
	document.querySelector("#scorefb").innerText = `Score : ${score}`
	document.querySelector("#gradefb").innerText = `Grade : ${grade}%`
	document.querySelector("#timefb").innerText = `time taken : ${timer}`
	
	
	document.querySelector("#count").style.opacity = "0.4"
	document.querySelector("#contentBox").style.opacity = "0.4"
	document.querySelector("#innerContainer").style.opacity = "0.4"
	
	
	feedbackComment = document.querySelector("#commentfb")
	if(score > 7){
		
		feedbackComment.style.color = "#34A853"
		feedbackComment.innerText = "Excellent performance.keep up the good work"
	}
	else if(score > 4){
		feedbackComment.style.color = "#f43a09"
		feedbackComment.innerText = "Average performance.Try better next time"
	}
	else{
		
		feedbackComment.style.color = "#FF3131"
		feedbackComment.innerText = "Poor performace.Try better next time"
	}
}