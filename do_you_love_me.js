const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Function to move the "No" button to a random position
function moveNoButton() {
  const containerWidth = questionContainer.offsetWidth;
  const containerHeight = questionContainer.offsetHeight;
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const newX = Math.floor(Math.random() * (containerWidth - buttonWidth));
  const newY = Math.floor(Math.random() * (containerHeight - buttonHeight));

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// Move "No" button on hover
noBtn.addEventListener("mouseover", moveNoButton);

// Also move "No" button on click
noBtn.addEventListener("click", moveNoButton);

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play(); // Play the video on demand
  }, 3000);
});
