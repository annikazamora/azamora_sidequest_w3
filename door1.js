// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawDoor1() → what the door1 screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Gift box data
// ------------------------------
const giftBox = { x: 400, y: 450, size: 100 };

// ------------------------------
// Gift state
// ------------------------------
let giftOpened = false;
let giftItem = null; // "bomb" or "cookie"

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawDoor1() is called from main.js *only*
// when currentScreen === "door1"
function drawDoor1() {
  // Set background colour for the door1 screen
  background(255, 192, 203); // pink

  // ---- Title and message text ----
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Behind Door 1", width / 2, 160);

  textSize(24);
  if (giftOpened && giftItem) {
    text(`You opened the gift and found a ${giftItem}!`, width / 2, 220);
  } else {
    text("You found a gift!", width / 2, 220);
  }
  if (giftOpened) {
    text("Click to continue.", width / 2, 280);
  } else {
    text("Click the gift box to open it.", width / 2, 280);
  }

  // ---- Draw the gift box ----
  drawGiftBox(giftBox.x, giftBox.y, giftBox.size);

  // ---- Draw the item if opened ----
  if (giftOpened && giftItem) {
    drawGiftItem(giftItem, giftBox.x, giftBox.y - giftBox.size / 2 - 50);
  }

  // ---- Win/Loss tracker ----
  fill(0);
  textSize(16);
  textAlign(RIGHT, TOP);
  text(`Wins: ${winCount}  Losses: ${lossCount}`, width - 20, 20);

  // ---- Cursor feedback ----
  cursor(HAND);
}

// ------------------------------
// Gift box drawing helper
// ------------------------------
function drawGiftBox(x, y, size) {
  rectMode(CENTER);
  stroke(0);
  strokeWeight(3);

  // Draw the box with fill
  fill(200, 150, 100); // light brown
  rect(x, y, size, size);

  // Draw the ribbon (cross) on top
  stroke(255, 0, 0); // red
  strokeWeight(5);
  line(x - size / 2, y, x + size / 2, y); // horizontal
  line(x, y - size / 2, x, y + size / 2); // vertical

  noStroke();
  fill(255, 0, 0); // red ribbon
  rect(x, y, size / 4, size); // vertical ribbon
  rect(x, y, size, size / 4); // horizontal ribbon
}

// ------------------------------
// Helper to check if mouse is over gift box
// ------------------------------
function isHoverGiftBox({ x, y, size }) {
  return (
    mouseX > x - size / 2 &&
    mouseX < x + size / 2 &&
    mouseY > y - size / 2 &&
    mouseY < y + size / 2
  );
}

// ------------------------------
// Gift item drawing helper
// ------------------------------
function drawGiftItem(item, x, y) {
  if (item === "bomb") {
    // Black circle with small rectangle on top
    fill(0); // black
    ellipse(x, y, 50, 50); // circle
    rect(x, y - 30, 10, 20); // fuse
  } else if (item === "cookie") {
    // Brown circle with black chips
    fill(139, 69, 19); // brown
    ellipse(x, y, 60, 60); // cookie
    fill(0); // black
    ellipse(x - 10, y - 10, 5, 5); // chip
    ellipse(x + 15, y + 5, 5, 5); // chip
    ellipse(x - 5, y + 15, 5, 5); // chip
  }
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "door1"
function door1MousePressed() {
  if (!giftOpened) {
    // Open the gift
    giftOpened = true;
    // 50/50 chance: bomb (lose) or cookie (win)
    giftItem = random() < 0.5 ? "bomb" : "cookie";
  } else {
    // Proceed to outcome
    if (giftItem === "bomb") {
      currentScreen = "lose";
      lossCount++;
    } else if (giftItem === "cookie") {
      currentScreen = "win";
      winCount++;
    }
    // Reset for next time
    giftOpened = false;
    giftItem = null;
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction
function door1KeyPressed() {
  // No keyboard input for this screen
}
