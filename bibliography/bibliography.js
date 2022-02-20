function initializeButtons() {

  window.buttons = Array.from(document.querySelectorAll(`.expand-collapse-button`));

  window.buttons.forEach(button => {
    button.removeAttribute(`hidden`);
    button.dataset.details = `open`;
  });

  window.buttons.forEach(button => button.addEventListener(`click`, toggleNotes));

}

function toggleNotes() {

  const { buttons } = window;

  const currentState   = buttons[0].dataset.details;
  const newState       = currentState === `open` ? `closed` : `open`;
  const newDescription = currentState === `open` ? `Show Notes` : `Hide Notes`;

  buttons.forEach(button => {
    button.dataset.details = newState;
    button.textContent     = newDescription;
  });

  const details = Array.from(document.querySelectorAll(`.reference-list details`));

  if (newState === `closed`) {
    details.forEach(detail => { detail.open = false; });
  } else {
    details.forEach(detail => { detail.open = true; });
  }

}

window.addEventListener(`load`, initializeButtons);
