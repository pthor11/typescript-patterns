export class Singleton {
    private constructor() { }
    private static _shared: Singleton = new Singleton()
    static get shared(): Singleton {
        return Singleton._shared
    }
}

// Avoid using `new`
const singleton1 = Singleton.shared
const singleton2 = Singleton.shared

console.log(singleton1 === singleton2);