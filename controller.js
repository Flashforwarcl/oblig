//set new time on Clocks with recurring at 1000ms, then update view showClock() & make1if()
function setClock() {
  d = new Date();
  currentTime =
    (d.getHours() < 10 ? "0" : "") +
    d.getHours() +
    ":" +
    (d.getMinutes() < 10 ? "0" : "") +
    d.getMinutes();
  chosenTimeZone = d.toLocaleTimeString("no-NO", setTimezone);
  setTimeout(setClock, 1000);
  showClock();
  make1if();
}

// update timezone variables & chosenTimezone from innerText value of anchor onclick then update showClock()
function setZone(value) {
  selectedTimezone = value;
  setTimezone = { timeZone: selectedTimezone };
  d = new Date();
  chosenTimeZone = d.toLocaleTimeString("no-NO", setTimezone);
  showClock();
}

//loop array with named arytimeZone & create anchors for dropdown list then update view part with dropdown list
function aryLoop() {
  arytimeZones.forEach((zone) => {
    listZones += `<a href="#" onclick='setZone(this.innerText)'>${zone}</a>`;
    makeDropDown();
  });
}

//function for return of value
ret = () => {
  return alert(selectedTimezone);
};
