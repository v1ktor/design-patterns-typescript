export enum ProductB {
    A,
    B,
    C
}

export interface IProductB {
    name: string;
}

abstract class ConcreteProduct implements IProductB {
    name = '';
}

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryB:ConcreteProductA';
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryB:ConcreteProductB';
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super();
        this.name = 'FactoryB:ConcreteProductC';
    }
}

export class FactoryB {
    static getObject(product: ProductB): IProductB {
        switch (product) {
            case ProductB.A:
                return new ConcreteProductA();
            case ProductB.B:
                return new ConcreteProductB();
            case ProductB.C:
                return new ConcreteProductC();
            default:
                throw new Error('Unsupported product');
        }
    }
}