// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Door data
// ------------------------------
const doors = [
  { x: 180, y: 300, w: 120, h: 150 },
  { x: 400, y: 300, w: 120, h: 150 },
  { x: 620, y: 300, w: 120, h: 150 },
];

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawGame() {
  // Set background colour for the game screen
  background(240, 230, 140);

  // ---- Title and instructions text ----
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Welcome...", width / 2, 160);

  textSize(18);
  text("Choose a door to proceed.", width / 2, 210);

  // ---- Draw the doors ----
  doors.forEach((door) => drawDoor(door));

  // ---- Win/Loss tracker ----
  fill(0);
  textSize(16);
  textAlign(RIGHT, TOP);
  text(`Wins: ${winCount}  Losses: ${lossCount}`, width - 20, 20);

  // ---- Cursor feedback ----
  // If the mouse is over any door, show a hand cursor
  // Otherwise, show the normal arrow cursor
  const overDoor = doors.some((door) => isHover(door));
  cursor(overDoor ? HAND : ARROW);
}

// ------------------------------
// Door drawing helper
// ------------------------------
function drawDoor({ x, y, w, h }) {
  rectMode(CENTER);

  const hover = isHover({ x, y, w, h });

  noStroke();

  // Brown color for door
  fill(hover ? color(139, 69, 19, 200) : color(160, 82, 45, 180));

  // Draw the door rectangle
  rect(x, y, w, h);

  // Draw the doorknob: small yellow circle on the right side
  fill(255, 255, 0);
  ellipse(x + w / 2 - 15, y, 15, 15);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function gameMousePressed() {
  // Check if a door is clicked
  for (let i = 0; i < doors.length; i++) {
    if (isHover(doors[i])) {
      triggerDoorOutcome(i);
      return;
    }
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function gameKeyPressed() {
  // No keyboard input for this screen
}

// ------------------------------
// Door outcome logic
// ------------------------------
function triggerDoorOutcome(doorIndex) {
  // Randomly select one of the three door outcomes
  const outcomes = ["door1", "door2", "door3"];
  const randomOutcome = random(outcomes);
  currentScreen = randomOutcome;
}
