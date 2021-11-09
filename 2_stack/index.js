class Stack {
    #list = new Map()
    #maxSize = null

    constructor(maxSize) {
        this.#maxSize = Number(maxSize) || null
    }

    get size() {
        return this.#list.size
    }

    push(item) {
        if (!this.#maxSize || this.size) {
            this.#list.set(this.size, item)
        }

        return this.size
    }

    pop() {
        if (this.size) {
            const lastItem = this.#list.get(this.size - 1)
            this.#list.delete(this.size - 1)
            return lastItem
        }
        return null
    }

    peek() {
        return this.#list.get(this.size - 1) || null
    }

    clear() {
        this.#list = new Map()
    }

    print() {
        console.log(Array.from(this.#list.values()))
    }
}


const myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)

myStack.print()

myStack.pop()

console.log(myStack.peek())
myStack.clear()
myStack.print()