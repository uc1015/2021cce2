
function setup() {
    initializeFields();
    createCanvas(300, 300);
    fill(color(0xA4, 0x8F, 0xFC));
    textSize(50);
    textAlign(CENTER, CENTER);
}

var choice;

function draw() {
    background(color(0xFF, 0xFA, 0xE8));
    text("DINNER 1", 150, 50);
    text("DINNER 2", 150, 150);
    text("DINNER 3", 150, 250);
    if (choice == 0)
        ellipse(30, 50, 50, 50);
    if (choice == 1)
        ellipse(30, 150, 50, 50);
    if (choice == 2)
        ellipse(30, 250, 50, 50);
}

function mousePressed() {
    choice = int(random(3));
}

function initializeFields() {
    choice = -1;
}
