import { FactoryA, IProductA, ProductA } from "./factory-a";
import { FactoryB, IProductB, ProductB } from "./factory-b";

interface IProduct extends IProductA, IProductB {}

type products = ProductA | ProductB;

class AbstractFactory {
    static createObject(product: products): IProduct | undefined {
        try {
            if (product in ProductA) {
                return FactoryA.getObject(product as ProductA);
            }
            if (product in ProductB) {
                return FactoryB.getObject(product as ProductB);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

const PRODUCT = AbstractFactory.createObject(ProductB.C);
console.log(PRODUCT);