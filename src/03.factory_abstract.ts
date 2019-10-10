interface ProductAInterface {
    methodA(): string
}

interface ProductBInterface {
    methodB(): string
}

interface FactoryInterface {
    createProductA(): ProductAInterface
    createProductB(): ProductBInterface
}

class ProductA implements ProductAInterface {
    methodA() { return 'methodA' }
}

class ProductB implements ProductBInterface {
    methodB() { return 'methodA' }
}

class Factory implements FactoryInterface {
    createProductA(): ProductAInterface {
        return new ProductA()
    }    
    createProductB(): ProductBInterface {
        return new ProductB()
    }
}