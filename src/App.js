import "../src/app.css";
import { useState } from "react";
import Card from "./components/Card";
import pikachu from "../src/img/pikachu.png";
import pikatwo from "../src/img/pikatwo.png";
import pikathree from "../src/img/pikathree.png";
import pikafour from "../src/img/pikafour.png";
import pikafive from "../src/img/pikafive.png";
import pikasix from "../src/img/pikasix.webp";
import pikasev from "../src/img/pikasev.webp";
import pikaeig from "../src/img/pikaeig.webp";
import pikanin from "../src/img/pikanin.png";
import pikaten from "../src/img/pikaten.png";
import pikaele from "../src/img/pikaele.png";
import pikatwe from "../src/img/pikatwe.png";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [picArray, setPicArray] = useState([
    pikachu,
    pikatwo,
    pikathree,
    pikafour,
    pikafive,
    pikasix,
    pikasev,
    pikaeig,
    pikanin,
    pikaten,
    pikaele,
    pikatwe,
  ]);
  const [playsArray, setplaysArray] = useState([0]);
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  shuffle(picArray);
  function gameOver() {
    setScore(0);
    setplaysArray([0]);
    alert("You Lost! HAHAHAHAH");
  }

  function engine(index) {
    if (playsArray.indexOf(index) >= 0) {
      gameOver();
    } else {
      setplaysArray([...playsArray, index]);
      scoreKeeper();
      shuffle(picArray);
    }
  }
  function scoreKeeper() {
    setScore(score + 1);
    if (score >= highScore) {
      setHighScore(score + 1);
    }
  }
  const newList = picArray.map(function (index) {
    return <Card name={index} onClick={() => engine(index)} />;
  });
  console.log(newList);
  return (
    <div className="App">
      <div className="header">
        <div className="headerleft">
          <h2 id="maintitle">Pokemon Memory Game</h2>
          <h3>
            <i>
              Get points by cliking on an image, but don't click on any more
              than once! Game resets if you make a mistake.
            </i>
          </h3>
        </div>
        <div className="headerright">
          <p>Score: {score}</p>
          <p>High Score: {highScore}</p>
        </div>
      </div>
      <div className="main">{newList}</div>
    </div>
  );
}

export default App;
