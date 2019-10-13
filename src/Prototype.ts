class ComponentWithBackReference {
    constructor(public prototype: Prototype) {}
}

class Prototype {
    primitive: any
    component: object
    circularReference: ComponentWithBackReference

    clone(): this {
        const clone = Object.create(this)
        clone.component = Object.create(this.component)
        clone.circularReference = {
            ...this.circularReference,
            prototype: {...this}
        }
        return clone
    }
}

const prototypeDate = new Prototype()
prototypeDate.primitive = 245
prototypeDate.component = new Date()
prototypeDate.circularReference = new ComponentWithBackReference(prototypeDate)

const prototypeDateCloned = prototypeDate.clone()