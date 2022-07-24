interface Fruit {
  name: string;
  color: string;
}

class Apple implements Fruit {
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}
