// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawDoor3() → what the door3 screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawDoor3() is called from main.js *only*
// when currentScreen === "door3"
function drawDoor3() {
  // Set background colour for the door3 screen
  background(128, 0, 128); // purple

  // ---- Title and message text ----
  fill(255); // white text for contrast
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Behind Door 3", width / 2, 160);

  textSize(20);
  text("You slipped and fell on the puddle.", width / 2, 220);
  text("Your clothes are now wet.", width / 2, 250);

  textSize(18);
  text("Click anywhere to continue.", width / 2, 320);

  // ---- Draw the puddle ----
  drawPuddle(width / 2, height / 2 + 50, 150, 80);

  // ---- Win/Loss tracker ----
  fill(255);
  textSize(16);
  textAlign(RIGHT, TOP);
  text(`Wins: ${winCount}  Losses: ${lossCount}`, width - 20, 20);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "door3"
function door3MousePressed() {
  // Slipping on puddle leads to lose
  currentScreen = "lose";
  lossCount++;
}

// ------------------------------
// Puddle drawing helper
// ------------------------------
function drawPuddle(x, y, w, h) {
  fill(0, 0, 255, 150); // semi-transparent blue
  noStroke();
  ellipse(x, y, w, h);
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction
function door3KeyPressed() {
  // SPACE or ENTER to lose
  if (keyCode === 32 || keyCode === ENTER) {
    currentScreen = "lose";
    lossCount++;
  }
}
