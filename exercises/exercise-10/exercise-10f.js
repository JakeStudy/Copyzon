function gamingButton (selector) {
  const button = document.querySelector(selector)

  turnOffPreviousButton()
  if (!button.classList.contains('is-toggled')) {
    button.classList.add('is-toggled')
  } else {
    button.classList.remove('is-toggled')
  }
}

function turnOffPreviousButton () {
  const previousButton = document.querySelector('.is-toggled')
  if (previousButton) {
    previousButton.classList.remove('is-toggled')
  }
}
