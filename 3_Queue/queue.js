class Queue {
    #list = []
    #capacity = null

    constructor(capacity) {
        this.#capacity = Math.max(Number(capacity), 0) || 10
    }

    get size() {
        return this.#list.length
    }

    get isFull() {
        return this.size === this.#capacity && this.capacity !== null
    }

    get isEmpty() {
        return this.size === 0
    }

    enqueue(item) {
        if (this.#capacity === null || this.size < this.#capacity) {
            return this.#list.push(item)
        }

        return this.size
    }

    dequeue() {
        return this.#list.shift()
    }

    peek() {
        return this.#list[0]
    }

    print() {
        console.log(this.#list)
    }
}

const q = new Queue()

q.enqueue(12)
q.enqueue(82)
q.enqueue(121)

q.print()

q.dequeue()
q.dequeue()

console.log(q.dequeue())

q.print()

console.log(q.isEmpty())


class Printer extends Queue {
    #printing = false

    constructor() {
        super(10)
        this.id = Math.floor(Math.random() * 10000)
    }

    #printDocs = () => {
        this.#printing = true
        setTimeout(() => {
            const docCall = this.dequeue()
            docCall()

            if (this.isEmpty) {
                this.#printing = false
            } else {
                this.#printDocs()
            }

        }, Math.floor(Math.random() * 2000))
    }

    print(doc) {
        return new Promise((resolve, reject) => {
            if (this.isFull) {
                reject("Printer is Full")
            } else {
                this.enqueue(() => resolve(doc))

                if (!this.#printing) {
                    this.#printDocs()
                }
            }
        })
    }
}


const printer = new Printer()

Array.from({ length: 15 }, (_, i) => (i + 1))
    .forEach((n) => {
        printer.print(n)
            .then(doc => console.log(n, 'printed', doc))
            .catch(msg => console.log(n, msg))
    })
