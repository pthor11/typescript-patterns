interface IComponent {
    operation(): string
}

class ConcreteComponent implements IComponent {
    operation(): string {
        return 'ConcreteComponent'
    }
}

class Decorator implements IComponent {
    constructor(protected component: IComponent) {}

    operation(): string {
        return this.component.operation()
    }
}

class ConcreteDecoratorA extends Decorator {
    operation(): string {
        return `ConcreteDecoratorA from ${super.operation()}`
    }
}

class ConcreteDecoratorB extends Decorator {
    operation(): string {
        return `ConcreteDecoratorB from ${super.operation()}`
    }
}


const component = new ConcreteComponent()
const decoratorA = new ConcreteDecoratorA(component)
const decoratorB = new ConcreteDecoratorB(component)