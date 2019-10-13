class Subsytem1 {
    operation1(): string {
        return `Operation of Subsystem1`
    }
}

class Subsytem2 {
    operation2(): string {
        return `Operation of Subsystem2`
    }
}

class Facade {
    protected subsystem1: Subsytem1
    protected subsystem2: Subsytem2

    constructor(subsystem1: Subsytem1, subsystem2: Subsytem2) {
        this.subsystem1 = subsystem1 || new Subsytem1()
        this.subsystem2 = subsystem2 || new Subsytem2()
    }

    operationFacade(): string {
        return this.subsystem1.operation1() + ' ' + this.subsystem2.operation2()
    }
}

const subsystem1 = new Subsytem1()
const subsystem2 = new Subsytem2()

const facade = new Facade(subsystem1, subsystem2)
facade.operationFacade()