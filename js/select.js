function selectOption(event, button) {
  const buttons = document.querySelectorAll("#buttonGroup button");

  buttons.forEach((btn) => {
    console.log(btn, "btn");

    btn.classList.remove("selected");
  });

  button.classList.add("selected");
}

function selectOptionCount(event, button) {
  event.stopPropagation();

  const travels = document.querySelectorAll("#travelGroup .travel_div");

  travels.forEach((btn) => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");
}

function selectOptionTravel(event, button) {
  event.stopPropagation();

  const travels = document.querySelectorAll("#travelGroup2 .travel_div");

  travels.forEach((btn) => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");
}
