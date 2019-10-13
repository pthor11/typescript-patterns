interface Subject {
    request(): void
}

class RealSubject implements Subject {
    request(): void {
        console.log('RealSubject: Handling request.')
    }
}

class CProxy implements Subject {
    constructor(private realSubject: RealSubject) {}

    request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    }

    private logAccess(): void {
        console.log('Proxy: Logging the time of request.');
    }
}

const realSubject = new RealSubject()
const proxy = new CProxy(realSubject)