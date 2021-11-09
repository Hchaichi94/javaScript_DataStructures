class priorityQueue {
    #list = []
    #capacity = null

    constructor(capacity) {
        this.#capacity = Math.max(Number(capacity), 0) || null
    }

    get size() {
        return this.#list.length
    }

    get isFull() {
        return this.size === this.#capacity && this.#capacity !== null
    }

    get isEmpty() {
        return this.size === 0
    }

    enqueue(item, priority = 0) {
        priority = Math.max(Number(priority), 0)
        const element = { item, priority }

        if (this.isEmpty || element.priority >= this.#list[this.size - 1].priority) {
            this.#list.push(element)
        } else {
            for (let index in this.#list) {
                if (element.priority < this.#list[index].priority) {
                    this.#list.splice(index, 0, element)
                    break
                }
            }
        }

        return this.size
    }

    dequeue() {
        const element = this.#list.shift()
        return element ? element.item : null
    }

    peek() {
        const element = this.#list[0]
        return element ? element.item : null
    }

    print() {
        console.log(this.#list)
    }
}

const q = new priorityQueue()

q.enqueue(12)
q.enqueue(82, 2)
q.enqueue(121, 3)
q.enqueue(121, 2)

q.print()

