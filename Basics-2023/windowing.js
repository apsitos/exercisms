/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600); // {width: 800, height: 600}
    this.size = new Size(); // {width, height}
    this.position = new Position();
  }

  resize(sizeParam) {
    let scaledX = Math.max(sizeParam.width, 1);
    let scaledY = Math.max(sizeParam.height, 1);

    scaledX = Math.min(scaledX, this.screenSize.width - this.position.x);
    scaledY = Math.min(scaledY, this.screenSize.height - this.position.y);

    this.size.resize(scaledX, scaledY);
  }

  move(positionParam) {
    let newX = Math.max(0, positionParam.x);
    let newY = Math.max(0, positionParam.y);

    newX = Math.min(newX, this.screenSize.width - this.size.width);
    newY = Math.min(newY, this.screenSize.height - this.size.height);

    this.position.move(newX, newY);
  }
}

const programWindow = new ProgramWindow();

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);
  programWindow.resize(newSize);
  programWindow.move(newPosition);
  return programWindow;
}

// This one required a lot of help. Apparently word problems are not my strong suit.
