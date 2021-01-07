let Colr = prompt(
    "Please Input color of road traffic signal (Red / Yellow / Green)").toUpperCase();
  
  if (!Colr) {
    alert("Please Input Signal Color:");
  } else if (Colr === "red") {
    alert("Must Stop");
  } else if (Colr === "yellow") {
    alert("Read to move");
  } else if (Colr === "green") {
    alert("Move Now");
  }