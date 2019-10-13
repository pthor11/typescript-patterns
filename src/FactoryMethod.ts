interface Product {
    hasFunction(): void
}

class ConcreteProductA implements Product {
    hasFunction(): void {
        console.log('ConcreteProductA hasFunction'); 
    }  
}

class ConcreteProductB implements Product {
    hasFunction(): void {
        console.log('ConcreteProductB hasFunction'); 
    }  
}

abstract class Factory {
    abstract createProduct(): Product
}

class ConcreateFactoryA extends Factory {
    createProduct(): Product {
        return new ConcreteProductA()
    }
}

class ConcreateFactoryB extends Factory {
    createProduct(): Product {
        return new ConcreteProductB()
    }
}

const productA = new ConcreateFactoryA().createProduct()
const productB = new ConcreateFactoryB().createProduct()