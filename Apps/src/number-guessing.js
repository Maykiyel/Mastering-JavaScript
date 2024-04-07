const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

document.getElementById("guessBtn").addEventListener("click", () => {
  guess = document.getElementById("guess").value;
  guess = Number(guess);
  const result = document.getElementById("result");

  if (isNaN(guess)) {
    document.getElementById("result").textContent =
      "Please enter a valid number";
  } else if (guess < minNum || guess > maxNum) {
    document.getElementById("result").textContent =
      "Please enter a number between 1 and 100";
  } else {
    attempts++;
    if (guess < answer) {
      result.textContent = "Too low";
      document.getElementById("guess").value = "";
      document.getElementById("guess").placeholder = "Try again...";
    } else if (guess > answer) {
      result.textContent = "Too high";
      document.getElementById("guess").value = "";
      document.getElementById("guess").placeholder = "Try again...";
    } else {
      //update classes
      result.classList.remove("text-lg");
      result.classList.add("text-2xl", "font-bold");
      //update result
      result.textContent = `Correct! The answer was ${answer}. It took you ${attempts} attempts.`;
      running = false;
      //disable input
      document.getElementById("guess").disabled = true;
      document.getElementById("guessBtn").disabled = true;
      document.getElementById("guess").value = "";
      document.getElementById("guess").placeholder = "Correct!";
    }
  }
});

console.log(answer);
