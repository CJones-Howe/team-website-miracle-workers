function checkAnswer(choice) {
  const result = document.getElementById("result");
  if (choice === "A") {
    result.innerText = "✅ Correct! Overly positive, vague, and emotional reviews are often fake.";
    result.style.color = "green";
  } else {
    result.innerText = "❌ Not quite. Neutral or critical reviews are more likely to be authentic.";
    result.style.color = "red";
  }
}
