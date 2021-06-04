const clock = document.getElementById("clock");
const mDD = document.getElementById("mDD");
const m1if = document.getElementById("m1if");

//first draw of view & initiation of clock (setTimeout inside setClock() rerunning of setClock() too update clocks)
showView();
function showView() {
  setClock();
  aryLoop();
}

//view function for creation of the clocks
function showClock() {
  let clockhtml;
  clockhtml = `
    Your current time: ${currentTime}</br>
    Time in ${selectedTimezone}:  ${chosenTimeZone.slice(0, 5)}
      `;
  clock.innerHTML = clockhtml;
}

// view function for dropdown menu
function makeDropDown() {
  let mDDhtml;
  mDDhtml = `
    <div class="dropdown">
      <button class="dropbtn">Choose Timezone</button>
      <div class="dropdown-content">
      ${listZones}
      </div>
    </div></br>
    `;
  mDD.innerHTML = mDDhtml;
}
//view function for if statment >= 1 with && | ||
function make1if() {
  if (
    currentTime == chosenTimeZone.slice(0, 5) ||
    chosenTimeZone.slice(0, 5) == new Date().toLocaleTimeString().slice(0, 5)
  ) {
    let m1ifhtml;
    m1ifhtml = `
      Selected = local time!</br>
      <button onclick="ret()">Alert Selected timezone</button>
      `;
    m1if.innerHTML = m1ifhtml;
  } else {
    let m1ifhtml;
    let timeDiffence = Math.abs(
      parseInt(currentTime.slice(0, 2)) - parseInt(chosenTimeZone.slice(0, 2))
    );
    m1ifhtml = `
      Time differnce is: ${timeDiffence} hours</br>
      <button onclick="ret()">Alert Selected timezone</button>
      `;
    m1if.innerHTML = m1ifhtml;
  }
}
