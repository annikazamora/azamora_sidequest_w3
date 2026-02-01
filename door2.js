// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawDoor2() → what the door2 screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawDoor2() is called from main.js *only*
// when currentScreen === "door2"
function drawDoor2() {
  // Set background colour for the door2 screen
  background(173, 216, 230); // light blue

  // ---- Title and message text ----
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Behind Door 2", width / 2, 160);

  textSize(24);
  text("You get to choose doors again, make the right choice!", width / 2, 220);
  text("Back to the doors you go.", width / 2, 260);

  textSize(18);
  text("Click anywhere to continue.", width / 2, 320);

  // ---- Win/Loss tracker ----
  fill(0);
  textSize(16);
  textAlign(RIGHT, TOP);
  text(`Wins: ${winCount}  Losses: ${lossCount}`, width - 20, 20);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "door2"
function door2MousePressed() {
  // Return to game screen for another chance
  currentScreen = "game";
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction
function door2KeyPressed() {
  // SPACE or ENTER to continue
  if (keyCode === 32 || keyCode === ENTER) {
    currentScreen = "game";
  }
}
