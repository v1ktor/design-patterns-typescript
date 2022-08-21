class ProductParts {
  parts: string[] = [];
}

interface IBuilder {
  buildPartA(): this
  buildPartB(): this
  buildPartC(): this
  getResult(): ProductParts
}

class Builder implements IBuilder {
  product: ProductParts;

  constructor() {
    this.product = new ProductParts();
  }

  buildPartA() {
    this.product.parts.push('a');
    return this;
  }

  buildPartB() {
    this.product.parts.push('b');
    return this;
  }

  buildPartC() {
    this.product.parts.push('c');
    return this;
  }

  getResult(): ProductParts {
    return this.product;
  }
}

class Director {
  static construct() {
    return new Builder().buildPartA().buildPartB().buildPartC().getResult();
  }
}

const PRODUCT1 = Director.construct();
console.log(PRODUCT1.parts);
