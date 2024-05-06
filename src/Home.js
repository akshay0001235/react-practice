import React from "react";

const Home = () => {
  const profile = {
    username: "Akshay",
    isFollow: false,
    followers: 123,
    following: 123,
  };
  console.log(profile.followers);

  let score = prompt("Enter your score between (0-100):");
  let grade;

  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 70 && score <= 89) {
    grade = "B";
  } else if (score >= 60 && score <= 69) {
    grade = "C";
  } else if (score >= 50 && score <= 59) {
    grade = "D";
  } else if (score >= 0 && score <= 49) {
    grade = "E";
  }
  console.log("accordingly to your scores, your grade was:", grade);

  function changecolor() {
    var colore = document.getElementById("colors").value;

    document.getElementById("error").innerHTML = ""; // remove existing error

    if (colore === "yellow") {
      document.body.style.backgroundColor = "yellow";
    } else if (colore === "blue") {
      document.body.style.backgroundColor = "blue";
    } else if (colore === "green") {
      document.body.style.backgroundColor = "green";
    } else if (colore === "black") {
      document.body.style.backgroundColor = "black";
    } else {
      document.getElementById("error").innerHTML = "Enter a Valid Color";
    }
  }

  const firstBowl = ["pawpaw", "cucumber", "watermelon"];
  const secondBowl = ["Pineapple", "Apple", "banana"];
  const thirdBowl = ["cashew nut", "Date", "Strawberry"];

  const fruitMix = [...firstBowl, ...secondBowl, ...thirdBowl];

  console.log(fruitMix);

  return (
    <div>
      <input id="colors" type="text" />
      <button onClick={changecolor()}>Change</button>
      <p id="error"></p>
    </div>
  );
};

export default Home;
