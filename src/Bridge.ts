interface Implementation {
    operationImplementation(): string
}

class Abstraction {
    protected implementation: Implementation

    constructor(implementation: Implementation) {
        this.implementation = implementation
    }

    operation(): string {
        return this.implementation.operationImplementation()
    }
}

class ExtendedAbstraction extends Abstraction {
    operation(): string {
        const result = this.implementation.operationImplementation()
        return `ExtendedAbstraction: Exntended operation with: ${result}`
    }
}

class ConcreteImplementationA implements Implementation {
    operationImplementation(): string {
        return `operationImplementation from ConcreteImplementationA`
    }
}

class ConcreteImplementationB implements Implementation {
    operationImplementation(): string {
        return `operationImplementation from ConcreteImplementationB`
    }
}

const implementationA = new ConcreteImplementationA()
const implementationB = new ConcreteImplementationB()

const abstractionA = new ExtendedAbstraction(implementationA)
const abstractionB = new ExtendedAbstraction(implementationB)