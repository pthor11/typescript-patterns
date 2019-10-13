interface Builder {
    producePartA(): void
    producePartB(): void
    producePartC(): void
}

class Product {
    parts: string[] = []
    listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`)
    }
}

class ConcreteBuilder implements Builder {
    private product: Product

    constructor () {
        this.reset()
    }

    reset(): void {
        this.product = new Product()
    }

    producePartA(): void {
        this.product.parts.push('PartA')
    }    
    producePartB(): void {
        this.product.parts.push('PartB')
    }
    producePartC(): void {
        this.product.parts.push('PartC')
    }

    getProduct(): Product {
        const product = this.product
        this.reset()
        return product
    }
}

class Director {
    private builder: Builder

    setBuilder(builder: Builder): void {
        this.builder = builder
    }

    buildMinimumViableProduct(): void {
        this.builder.producePartA()
    }

    buildFullFeaturedProduct(): void {
        this.builder.producePartA()
        this.builder.producePartB()
        this.builder.producePartB()
    }
}

const director = new Director()
const builder = new ConcreteBuilder()
director.setBuilder(builder)
director.buildMinimumViableProduct()
const mvpProduct = builder.getProduct()