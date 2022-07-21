const ratingNumbers = document.querySelectorAll(".rating-number");
const submitBtn = document.querySelector(".front-btn");
const backCard = document.querySelector(".back-card");
const frontCard = document.querySelector(".front-card");
const resultText = document.querySelector(".result-text");



ratingNumbers.forEach((button) => {
    button.addEventListener("click", function () {
      ratingNumbers.forEach((ifSelected) => {
        ifSelected.classList.remove("was-selected");
      });
      button.classList.add("was-selected");
    });
});

submitBtn.addEventListener("click", function () {
    const wasSelected = document.querySelector(".was-selected");
    let selectedValue = wasSelected.textContent;
    backCard.classList.add("show-card");
    frontCard.classList.add("hide-card");
    resultText.textContent = `You selected ${selectedValue} out of 5`;
  });


