abstract class Component {
    protected parent: Component | undefined

    setParent(parent: Component | undefined): void {
        this.parent = parent
    }

    getParent(): Component | undefined {
        return this.parent
    }

    add(component: Component): void {}

    remove(component: Component): void {}

    isComposite(): boolean {
        return false
    }

    abstract operation(): string 
}

class Leaf extends Component {
    operation(): string {
        return 'Leaf'
    }
}

class Composite extends Component {
    protected children: Component[] = []

    add(component: Component): void {
        this.children.push(component)
        component.setParent(this)
    }

    remove(component: Component): void {
        const componentIndex = this.children.indexOf(component)
        this.children.splice(componentIndex, 1)
        component.setParent(undefined)
    }

    isComposite(): boolean {
        return true
    }

    operation(): string {
        const results = []
        for (const child of this.children) {
            results.push(child)
        }
        return `Branch ${results.join(' + ')}`
    }
}

const simple = new Leaf()
const tree = new Composite()
const branch1 = new Composite()
branch1.add(new Leaf())
branch1.add(new Leaf())
const branch2 = new Composite()
branch2.add(new Leaf())
tree.add(branch1)
tree.add(branch2)