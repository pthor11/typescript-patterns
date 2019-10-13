class Target {
    request(): string {
        return `Target: the default target's behavior`
    }
}

class Adaptee {
    specificRequest(): string {
        return `eetpadA eht fo roivaheb laicepS`
    }
}

class Adapter extends Target {
    private adaptee: Adaptee

    constructor (adaptee: Adaptee) {
        super()
        this.adaptee = adaptee
    }

    request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('')
        return `Adapter: (TRANSLATED) ${result}`
    }
}

const target = new Target()
const adaptee = new Adaptee()
const adapter = new Adapter(adaptee)
console.log(adapter.request());
