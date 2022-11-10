
let playerWinCount = 0, computerWinCount = 0, count = 1;
let finalResultTxt = "";
play();


function play ()
{   
    let roundDone = false;
    const selectionButtons = document.querySelectorAll('[data-selection]')
    selectionButtons.forEach(selectionButton => {
        selectionButton.addEventListener('click', e => {
        let selectionName = selectionButton.dataset.selection
        let robotSelectionName = getComputerchoice();
        playRound(selectionName, robotSelectionName );
        changeWeaponIcons(selectionName, robotSelectionName);
        if (playerWinCount == 5)
        {
            finalResultTxt = "Congrats, You win!🥳\nRefresh to play again.";
            roundDone = true;
        }
        if (computerWinCount == 5)
        {
            finalResultTxt = "Robots had taken over!!!🤖\nRefresh to play agian.";
            roundDone = true;
        }
        if (roundDone)
            console.log(finalResultTxt);
            endGamePopup();
        })
    });
}


//Function to change the icon
function changeWeaponIcons (playerWeaponTxt, robotWeaponTxt)
{
    const playerChosenWeapon = document.querySelector("#playerWeapon");
    const robotChosenWeapon = document.querySelector("#robotWeapon");
    let playerWeaponIcon = "", robotWeaponIcon = "";
    switch (playerWeaponTxt.toLowerCase())
    {
        case "rock": playerWeaponIcon = "🪨"; break;
        case "paper": playerWeaponIcon = "📄"; break;
        case "scissor": playerWeaponIcon = "✂️"; break;
    }
    switch (robotWeaponTxt.toLowerCase())
    {
        case "rock": robotWeaponIcon = "🪨"; break;
        case "paper": robotWeaponIcon = "📄"; break;
        case "scissor": robotWeaponIcon = "✂️"; break;
    }
    playerChosenWeapon.textContent = playerWeaponIcon;
    robotChosenWeapon.textContent = robotWeaponIcon;
    

}


//Random computer choice
function getComputerchoice ()
{
    var ran = Math.floor(Math.random() * (4-1) +1);
    switch (ran)
    {
        case 1: return "Rock"; break;
        case 2: return "Paper"; break;
        case 3: return "Scissor"; break;
    }
}

//Finding Winner
function playRound (playerSelection, computerSelection)
{
    var player = playerSelection.toLowerCase();
    var computer = computerSelection.toLowerCase();


        
    if (player === "rock" && computer === "paper")
        computerWinCount++;
    else if (player == "rock" && computer === "scissor")
        playerWinCount++;
    else if (player === "paper" && computer === "rock")
        playerWinCount++;
    else if (player === "paper" && computer === "scissor")
        computerWinCount++;
    else if (player === "scissor" && computer === "rock")
        computerWinCount++;
    else if (player === "scissor" && computer === "paper")
        playerWinCount++;

    scoreTracking(playerWinCount, computerWinCount);
}

//End of the game popup
function endGamePopup ()
{
    
        const popup = document.createElement('div');
        popup.classList.add("popup");
        //const resetButton = document.createElement("button");
        //resetButton = "Play again";
        document.querySelector('body').appendChild(popup);
        const paraForPopup = document.createElement('p');
        paraForPopup.classList.add("result");
        paraForPopup.textContent = finalResultTxt;
        document.querySelector(".popup").appendChild(paraForPopup);
        //paraForPopup.appendChild(resetButton);


        popup.style.cssText = 
        "position: absolute;margin-left: auto;margin-right: auto;left: 0;right: 0;text-align: center; top: 60%;heigh: 200px;width: 800px;";
        paraForPopup.style.cssText =
        "background-color: blue; margin-right: 10%;margin-left: 10%;font-size: 45px;border-radius: 5%; background-color: rgba(250, 235, 215, 0.9); color: black;";
        count++;
    
}

//Updating the points
function scoreTracking (userScore, compScore)
{
    const playerScore = document.querySelector("#playerScore");
    playerScore.textContent = userScore;
    const robotScore = document.querySelector("#robotScore");
    robotScore.textContent = compScore;
}
