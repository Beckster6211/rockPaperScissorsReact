import "./App.css";
import React, { useState } from "react";

function App() {
  let [playerScore, setPlayerScore] = useState(0);
  let [computerScore, setComputerScore] = useState(0);
  let [playerChoice, setPlayerChoice] = useState("❓");
  let [computerChoice, setComputerChoice] = useState("❓");
  let [whatHappens, setWhatHappens] = useState("...");
  let [winner, setWinner] = useState("...");
  // let [name, setName] = useState("You")

  let comMove;
  // let person;
  let choices = ["rock", "paper", "scissors"];

  // function startGame() {
  //   let start = alert("First to 5 wins");
  //   console.log(start);
  //   console.log("5 point win");
  //   let message = alert("You can play past 5");
  //   console.log(message);
  //   console.log("Play past 5");
  //   //   let person = prompt("Enter Name...");
  //   //   console.log(person);
  //   // setName(name = person)
  // }
  // startGame();

  function GameWinner() {
    if (playerScore === 5) {
      console.log("winner is player");
      setWinner((winner = "Player"));
    } else if (computerScore === 5) {
      console.log("winner is computer");
      setWinner((winner = "Computer"));
    }
  }

  function PlayerPoint() {
    setPlayerScore((playerScore = playerScore + 1));
    console.log("add point to player");
    GameWinner();
  }

  function ComputerPoint() {
    setComputerScore((computerScore = computerScore + 1));
    console.log("add point to computer");
    GameWinner();
  }

  function ResetButton() {
    setPlayerScore((playerScore = 0));
    console.log("reset player score to 0");
    setPlayerChoice((playerChoice = "❓"));
    setComputerScore((computerScore = 0));
    console.log("reset computer score to 0");
    setComputerChoice((computerChoice = "❓"));
    setWhatHappens((whatHappens = "..."));
    console.log("reset what happens");
    setWinner((winner = "..."));
    console.log("reset winner info");
  }

  function ComputerMove() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    comMove = choices[randomIndex];
    if (comMove === choices[0]) {
      setComputerChoice((computerChoice = "🌑"));
      console.log({ comMove });
    } else if (comMove === choices[1]) {
      setComputerChoice((computerChoice = "📜"));
      console.log({ comMove });
    } else {
      setComputerChoice((computerChoice = "✂️"));
      console.log({ comMove });
    }
    return comMove;
  }

  function PickRock() {
    console.log("Click rock button");
    let playerMove = choices[0];
    console.log({ playerMove });
    setPlayerChoice((playerChoice = "🌑"));
    ComputerMove();
    if (comMove === choices[0]) {
      setWhatHappens((whatHappens = "Both Rock no point"));
      // setComputerChoice((computerChoice = "🌑"));
      // console.log({ comMove });
    } else if (comMove === choices[1]) {
      setWhatHappens((whatHappens = "Paper wraps rock, computer point"));
      // setComputerChoice((computerChoice = "📜"));
      // console.log({ comMove });
      ComputerPoint();
    } else {
      setWhatHappens((whatHappens = "Rock smashes scissors, player point"));
      // setComputerChoice((computerChoice = "✂️"));
      // console.log({ comMove });
      PlayerPoint();
    }
  }

  function PickPaper() {
    console.log("Click paper button");
    let playerMove = choices[1];
    console.log({ playerMove });
    setPlayerChoice((playerChoice = "📜"));
    ComputerMove();
    if (comMove === choices[0]) {
      setWhatHappens((whatHappens = "Paper wraps rock, player point"));
      PlayerPoint();
    } else if (comMove === choices[1]) {
      setWhatHappens((whatHappens = "Both paper, no point"));
    } else {
      setWhatHappens((whatHappens = "Scissors cuts paper, computer point"));
      ComputerPoint();
    }
  }

  function PickScissors() {
    console.log("Click scissors button");
    let playerMove = choices[2];
    console.log({ playerMove });
    setPlayerChoice((playerChoice = "✂️"));
    ComputerMove();
    if (comMove === choices[0]) {
      setWhatHappens(
        (whatHappens = "Scissors smashed by rock, computer point")
      );
      ComputerPoint();
    } else if (comMove === choices[1]) {
      setWhatHappens((whatHappens = "Scissors cuts paper, player point"));
      PlayerPoint();
    } else {
      setWhatHappens((whatHappens = "Both scissors, no point"));
    }
  }

  return (
    <div className="App">
      <div className="title">
        <h1>Rock Paper Scissors</h1>
      </div>
      <div className="buttons">
        <button id="rockButton" onClick={() => PickRock()}>
          🌑
          <br />
          Rock
          <br />
          🌑
        </button>
        <button id="paperButton" onClick={() => PickPaper()}>
          📜
          <br />
          Paper <br />
          📜
        </button>
        <button id="scissorsButton" onClick={() => PickScissors()}>
          ✂️
          <br />
          Scissors
          <br />
          ✂️
        </button>
      </div>
      <br />
      <div className="results">
        <div className="player">
          {/* can put the score next to the name  */}
          <h3 id="name">You: {playerScore}</h3>
          <p id="playerChoice">{playerChoice}</p>
          <p id="playerScore"></p>
        </div>

        <div className="computer">
          <h3>Computer: {computerScore}</h3>
          <p id="computerChoice">{computerChoice}</p>
          <p id="computerScore"></p>
        </div>
      </div>
      <p id="whatHappens">{whatHappens}</p>
      <h3 id="winner">And the winner is {winner} 🥁</h3>
      <div className="reset">
        {/* <!-- not sure if should have a reset button --> */}
        <button id="reset" onClick={() => ResetButton()}>
          Reset🏁
        </button>
      </div>
    </div>
  );
}

export default App;
