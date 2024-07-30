// Base class Shape
class Shape {
  protected color: string;
  protected filled: boolean;

  constructor( color = "red", filled = true) {
    this.color = color;
    this.filled = filled;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    this.color = color;
  }

  isFilled(): boolean {
    return this.filled;
  }

  setFilled(filled: boolean): void {
    this.filled = filled;
  }

  toString(): string {
    return `Shape[color=${this.color},filled=${this.filled}]`;
  }
}

// Class Circle extending Shape
class Circle extends Shape {
  private radius: number;

  constructor(radius = 1.0 , color: string, filled: boolean) {
    super(color, filled);
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }

  setRadius(radius: number): void {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  toString(): string {
    return `Circle[${super.toString()},radius=${this.radius}]`;
  }
}

// Class Rectangle extending Shape
class Rectangle extends Shape {
  protected width: number;
  protected length: number;

  constructor(width = 1.0, length = 1.0, color: string, filled: boolean) {
    super(color, filled);
    this.width = width;
    this.length = length;
  }

  getWidth(): number {
    return this.width;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  getLength(): number {
    return this.length;
  }

  setLength(length: number): void {
    this.length = length;
  }

  getArea(): number {
    return this.width * this.length;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.length);
  }

  toString(): string {
    return `Rectangle[${super.toString()},width=${this.width},length=${this.length}]`;
  }
}

// Class Square extending Rectangle
class Square extends Rectangle {
  constructor( side: number, color: string, filled: boolean) {
    super(side, side, color, filled);
    //this.width = side
    //this.length = side
  }

  getSide(): number {
    return this.width;
  }

  setSide(side: number): void {
    this.width = side;
    this.length = side;
  }

  setWidth(side: number): void {
    this.setSide(side);
  }

  setLength(side: number): void {
    this.setSide(side);
  }

  toString(): string {
    return `Square[${super.toString()}]`;
  }
}

// Example usage:
const shape = new Shape('blue', false );
console.log(shape.toString()); // Shape[color=blue,filled=false]

const circle = new Circle( 5.0,  'green', true );
console.log(circle.toString()); // Circle[Shape[color=green,filled=true],radius=5]

const rectangle = new Rectangle(4.0, 2.0 ,'yellow', true );
console.log(rectangle.toString()); // Rectangle[Shape[color=yellow,filled=true],width=4,length=2]

const square = new Square( 3.0 , 'black', false);
console.log(square.toString()); // Square[Rectangle[Shape[color=black,filled=false],width=3,length=3]]
