//model
let d = new Date();
let selectedTimezone = "Asia/Bangkok";
let setTimezone = { timeZone: selectedTimezone };
let chosenTimeZone = d.toLocaleTimeString("no-NO", setTimezone);
let arytimeZones = [
  "America/New_York",
  "Asia/Dubai",
  "Asia/Bangkok",
  "Asia/Tokyo",
  "Australia/Sydney",
  "Europe/London",
  "Europe/Oslo",
];
let listZones = ``;
