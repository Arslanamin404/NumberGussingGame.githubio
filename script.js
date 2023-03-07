let gameNum = Math.floor(Math.random() * 100);    //will generate random nums from 0-100.
console.log(gameNum)
let output = document.getElementById("output")
let totalGuess = 1;
//logic
function submit() {
    
        let guessNum = document.getElementById('guessNum').value
        if (guessNum == gameNum) {
            output.innerHTML = `Congratulations!!! \n You guessed it right in ${totalGuess} guesses.`
            output.style.color = "green"
        }
        else if (guessNum > gameNum) {
            output.innerHTML = `OOPS SORRY!!! \n Try a smaller number.`
            output.style.color = "red"
            output.style.animation = "shake 4s "
            output.style["-webkit-animation"]= "shake 4s"
            totalGuess++
        }
        else {
            output.innerHTML = `Try a greater number.`
            output.style.color = "red"
            output.style.animation = "shake 4s "
            output.style["-webkit-animation"]= "shake 4s "
            totalGuess++
        }
    }
    function clearResult(){
        output.innerHTML = ''
    }
    document.querySelector("input").addEventListener("keydown",clearResult)