interface AbstractFactory {
    createProductA(): AbstractProductA
    createProductB(): AbstractProductB
}

interface AbstractProductA {
    hasFunctionA(): void
}
interface AbstractProductB {
    hasFunctionB(): void
}

class ConcreteProductA1 implements AbstractProductA {
    hasFunctionA(): void {
        console.log('ConcreteProductA1 hasFunctionA');  
    }
}

class ConcreteProductA2 implements AbstractProductA {
    hasFunctionA(): void {
        console.log('ConcreteProductA2 hasFunctionA');  
    }
}

class ConcreteProductB1 implements AbstractProductB {
    hasFunctionB(): void {
        console.log('ConcreteProductB1 hasFunctionB');  
    }
}

class ConcreteProductB2 implements AbstractProductB {
    hasFunctionB(): void {
        console.log('ConcreteProductB2 hasFunctionB');  
    }
}

class ConcreteFactory1 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA1()
    }
    createProductB(): AbstractProductB {
        return new ConcreteProductB1()
    }
}

class ConcreteFactory2 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA2()
    }    
    
    createProductB(): AbstractProductB {
        return new ConcreteProductB2()
    }   
}

const productA1 = new ConcreteFactory1().createProductA()
const productB1 = new ConcreteFactory1().createProductB()

const productA2 = new ConcreteFactory2().createProductA()
const productB2 = new ConcreteFactory2().createProductB()

