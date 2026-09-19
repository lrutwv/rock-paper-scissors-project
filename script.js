const choices = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;
let currentRound = 1;
let totalRounds = 5;
let gameOver = false;

const resultMessage = document.querySelector(".result-message");
const gameResultMessage = document.querySelector(".game-result-message");
const gameResult = document.querySelector(".game-result");

const musicAudio = document.querySelector(".music-audio");
const playButton = document.querySelector(".play-button");

const songs = [
    "public/sounds/Lease - Takeshi Abo.mp3",
    "public/sounds/Brasilians Skies - Masayoshi Takanaka [1978 ].m4a",
    "public/sounds/Tokyo Reggie - Masayoshi Takanaka.m4a"
];

const songTitles = [
    "Lease - Takeshi Abo",
    "Brasilians Skies - Masayoshi Takanaka [1978 ]",
    "Tokyo Reggie - Masayoshi Takanaka [1979]"

];

const songCovers = [
    "public/images/summer.jfif",
    "public/images/BELEZA PULA.jfif",
    "public/images/Masayoshi Takanaka - Seychelles.jfif"
];

let currentSong = 0;

const nextButton = document.querySelector(".next-button");
const previousButton = document.querySelector(".previous-button");
const musicTitle = document.querySelector(".music-title");
const musicCover = document.querySelector(".music-cover");



const computerImage = document.querySelector(".secondimg");
const playerImage = document.querySelector(".firstimg");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score")
const roundDisplay = document.querySelector(".round-display");

const gameOverlay = document.querySelector(".game-over-overlay");
const gameOverBox = document.querySelector(".game-over-box");
const gameOverTitle = document.querySelector(".game-over-title");
const clapImage = document.querySelector(".clap-image");
const fishAvatar = document.querySelector(".fish-avatar");
const loseAvatar = document.querySelector(".lose-avatar");
const playAgainButton = document.querySelector(".play-again-button");
const restartButton = document.querySelector(".restart-button");

roundDisplay.textContent = currentRound + " / " + totalRounds;

const roundButtons = document.querySelectorAll(".round-buttons button");
roundButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.textContent === "5 Rounds") {
            totalRounds = 5;
        }

        if (button.textContent === "7 Rounds") {
            totalRounds = 7;
        }

        roundDisplay.textContent = currentRound + " / " + totalRounds;

        console.log("Total rounds:", totalRounds);

    });

});

function getComputerChoice() {

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];

}

function updateComputerImage(computerChoice) {

    if (computerChoice === "Rock") {
        computerImage.src = "public/images/rob-rock.png";
    }

    if (computerChoice === "Paper") {
        computerImage.src = "public/images/rob-paper.png";
    }

    if (computerChoice === "Scissors") {
        computerImage.src = "public/images/rob-scissor.png";
    }

}

function updatePlayerImage(playerChoice) {

    if (playerChoice === "Rock") {
        playerImage.src = "public/images/han-rock.png";
    }

    if (playerChoice === "Paper") {
        playerImage.src = "public/images/han-paper.png";
    }

    if (playerChoice === "Scissors") {
        playerImage.src = "public/images/han-scissor.png";
    }


}

function checkWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "Draw";
    }

    if (
        playerChoice === "Rock" &&
        computerChoice === "Scissors"
    ) {
        return "You Win";
    }

    if (
        playerChoice === "Paper" &&
        computerChoice === "Rock"
    ) {
        return "You Win";
    }

    if (
        playerChoice === "Scissors" &&
        computerChoice === "Paper"
    ) {
        return "You Win";
    }

    return "You Lose";
}


const choiceButtons = document.querySelectorAll(".choice-buttons button");


choiceButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (gameOver) {
          return;
        }

       const playerChoice = button.textContent;

       updatePlayerImage(playerChoice);

       const computerChoice = getComputerChoice();

       updateComputerImage(computerChoice);
       
       const result = checkWinner(playerChoice, computerChoice);
       
       if (result === "You Win") {
          playerScore = playerScore + 1;
       }
       if (result === "You Lose") {
         computerScore = computerScore + 1;
       }

       console.log("Player chose:", playerChoice);
       console.log("Robot chose:", computerChoice);
       console.log("Result:", result);

       gameResultMessage.textContent = result;
       gameResult.style.display = "block";

       gameResult.classList.remove(
           "win-animation",
           "lose-animation",
           "draw-animation"
       );

       if (result === "You Win") {
           gameResult.classList.add("win-animation");
       }

       if (result === "You Lose") {
           gameResult.classList.add("lose-animation");
       }

       if (result === "Draw") {
           gameResult.classList.add("draw-animation");
       }
       playerScoreDisplay.textContent = playerScore;
       computerScoreDisplay.textContent = computerScore;

       currentRound = currentRound + 1;
       
      if (currentRound > totalRounds) {
          gameOver = true;

           gameOverBox.classList.remove(
             "win-game",
             "lose-game",
             "draw-game"
            );

          if (playerScore > computerScore) {
              gameOverTitle.textContent = "YOU WIN!";
              gameOverBox.classList.add("win-game");
              clapImage.style.display = "block";
              fishAvatar.style.display = "block";
              loseAvatar.style.display = "none";

          } else if (computerScore > playerScore) {
              gameOverTitle.textContent = "YOU LOSE :(";
              gameOverBox.classList.add("lose-game");
              clapImage.style.display = "none";
              fishAvatar.style.display = "none";
              loseAvatar.style.display = "block";


          } else {
              gameOverTitle.textContent = "DRAW!";
              gameOverBox.classList.add("draw-game");
              clapImage.style.display = "none";
              fishAvatar.style.display = "block";
              loseAvatar.style.display = "none";

          }

          gameOverlay.style.display = "flex";

          console.log("Game Over");

      } else {
          roundDisplay.textContent = currentRound + " / " + totalRounds;
      }

    });

});


console.log(checkWinner("Rock", "Scissors"));
console.log(checkWinner("Rock", "Paper"));
console.log(checkWinner("Rock", "Rock"));

playAgainButton.addEventListener("click", function() {

    playerScore = 0;
    computerScore = 0;
    currentRound = 1;
    gameOver = false;

    playerImage.src = "public/images/han-rock.png";
    computerImage.src = "public/images/rob-rock.png";

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    roundDisplay.textContent = currentRound + " / " + totalRounds;

    gameResultMessage.textContent = "You Win!";

    gameOverlay.style.display = "none";
    gameResult.style.display = "none";

});

restartButton.addEventListener("click", function() {

    playerScore = 0;
    computerScore = 0;
    currentRound = 1;
    gameOver = false;

    playerImage.src = "public/images/han-rock.png";
    computerImage.src = "public/images/rob-rock.png";

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    roundDisplay.textContent = currentRound + " / " + totalRounds;

    gameResultMessage.textContent = "You Win!";

    gameOverlay.style.display = "none";
    gameResult.style.display = "none";

});


playButton.addEventListener("click", function() {

    if (musicAudio.paused) {
        musicAudio.play();
        playButton.querySelector("img").src="public/icons/pause-signs-svgrepo-com.svg"
    } else {
        musicAudio.pause();
        playButton.querySelector("img").src="public/icons/play-button-arrows-svgrepo-com.svg"
    }

});

nextButton.addEventListener("click", function() {

    currentSong = currentSong + 1;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    musicAudio.src = songs[currentSong];
    musicTitle.textContent = songTitles[currentSong];
    musicCover.src = songCovers[currentSong];
    musicAudio.play();

});

previousButton.addEventListener("click", function() {

    currentSong = currentSong - 1;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    musicAudio.src = songs[currentSong];
    musicTitle.textContent = songTitles[currentSong];
    musicCover.src = songCovers[currentSong];
    musicAudio.play();

});