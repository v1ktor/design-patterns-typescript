export enum ProductA {
  A,
  B,
  C,
}

export interface IProductA {
  name: string;
}

abstract class ConcreteProduct implements IProductA {
  name = '';
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryA:ConcreteProductA';
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryA:ConcreteProductB';
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryA:ConcreteProductC';
  }
}

export class FactoryA {
  static getObject(product: ProductA): IProductA {
    switch (product) {
      case ProductA.A:
        return new ConcreteProductA();
      case ProductA.B:
        return new ConcreteProductB();
      case ProductA.C:
        return new ConcreteProductC();
      default:
        throw new Error('Unsupported product');
    }
  }
}
