
const reset1= document.querySelector("#reset");
const ull = document.querySelector("#justul");
function startgame(dif) {
    let maxi, mini, att;
    switch (dif) {
        case 'e':
            mini = 0; maxi = 10; att = 5;
            break;
        case 'n':
            mini = -100; maxi = 100; att = 10;
            break;
        case 'h':
            mini = -1000; maxi = 1000; att = 20;
            break;
    }
    Act(mini, maxi, att);
}
document.querySelector("#btns").addEventListener('click', e=>{
    startgame(e.target.id);
})
/**
 * create
 * @param {*} content 
 * @returns 
 */
function createLi(content) {
    return `<div class="row"><div class="col p-3 "></div><div class="col p-2 "><div class="alert alert-info"><strong>${content}</strong> </div></div><div class="col p-4 "></div></div>`;
  }
function Act(mini, maxi, att) {
    
    let num = Math.floor((Math.random() * (maxi - mini + 1)) + mini)
    while (att--) {
        let guess = prompt(`Enter your guess (${mini} --- ${maxi}):`);
        if (guess === null) {
            alert('Game ended. You cancelled the game.');
            return;
        }
        let parsedGuess = parseInt(guess);
        if (isNaN(parsedGuess) || parsedGuess < mini || parsedGuess > maxi) {
            alert(`Please enter a valid number between ${mini} and ${maxi}.`);
            att++;
            continue;
        }
        if (parsedGuess === num) {
            alert(`Congratulations! You guessed the number ${num} correctly.`);
            ull.innerHTML+=createLi(`the number was ${num} `);
            reset1.innerHTML=`<button type="button" class = "btn btn-secondary" onclick="reset()"> reset</button>`;
            return;
        } else if (parsedGuess < num) {
            alert(`Try a higher number ${num}`);
            ull.innerHTML+=createLi(`the number is higher than ${num} `);
        } else {
            alert(`Try a lower number ${num}`);
            ull.innerHTML+=createLi(`the number is higher than ${num} `);
        }
    }
    reset1.innerHTML =`<button type="button" class = "btn btn-secondary" onclick="reset()"> reset</button>`;

    alert(`Sorry, you've used all attempts. The correct number was ${num}.`);
}
function reset(){
    ull.innerHTML="";
    reset1.innerHTML=""
}