const mole = document.getElementById("mole")

const score = document.getElementById("score")

const time = document.getElementById("time")

/*
   Is the game over?
   Number of 100ths of a second left
   Current score
*/

let num = 0

score.innerText = "Score: " + num

let secs = 400

let gamestate = true


/* This function updates the time integer.
   It ends the game if the time is 0.
   It also displays the time on the screen.
*/
function timer() {
	if(secs == 0){
		gamestate = false
		time.innerText = "GAME OVER"
	}
	else {
		secs--;
		time.innerText = secs
	}
}

setInterval(timer, 1)

function relocate() {
	if(gamestate){
		let x = 5 + Math.random() * 90
		let y = 15 + Math.random() * 45
		mole.style.left = x+"%";
		mole.style.top = y+"%";
		let size = 25 + Math.random() * 100
		mole.style.transform = `scale(${size}%, ${size}%`
		num++
		score.innerText = "Score: " + num
		secs = 400
	}
}

mole.addEventListener("click", relocate);