let broad = false;

function broadcastCheck() {
  if (broad === true) {
    console.log("Lights On");
    window.alert("Lights On");
  } else {
    console.log("Lights Off");
    window.alert("Lights Off");
  }
};

function lightsOn() {
  broad = true;
  console.log("The Light is on.");
};

function lightsOff() {
  broad = false;
  console.log("The Light Is Off.");
};

//Ver 0.3
