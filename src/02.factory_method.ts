interface Product {
    method(parmas: any): void
}

enum ProductType {
    A = 'A',
    B = 'B'
}

class ProductA implements Product {
    method(parmas: any): void {
        console.log('method from ProductA')
    }
}

class ProductB implements Product {
    method(parmas: any): void {
        console.log('method from ProductB')
    }
}

class Factory {
    createProduct(type: ProductType): Product {
        switch (type) {
            case ProductType.A: return new ProductA()
            default: return new ProductB()
        }
    }
}

