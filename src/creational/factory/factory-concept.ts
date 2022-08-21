enum Product {
  A,
  B,
  C,
}

interface IProduct {
  name: string;
}

abstract class ConcreteProduct implements IProduct {
  name = '';
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'ConcreteProductA';
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'ConcreteProductB';
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'ConcreteProductC';
  }
}

class Creator {
  static createObject(product: Product): IProduct {
    switch (product) {
      case Product.A:
        return new ConcreteProductA();
      case Product.B:
        return new ConcreteProductB();
      case Product.C:
        return new ConcreteProductC();
      default:
        throw new Error('Unsupported product');
    }
  }
}

const PRODUCT = Creator.createObject(Product.A);
console.log(PRODUCT.name);
