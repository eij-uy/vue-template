export interface Node<T> {
  prev: Node<T> | null
  next: Node<T> | null
  value: T
}

export class LinkedList<T> {
  length: number = 0
  head: Node<T> | null = null
  tail: Node<T> | null = null

  constructor(arr?: T[]) {
    if (arr) {
      this.pushAll(arr)
    }
  }

  pushAll(value: T[]) {
    for (let i = 0; i < value.length; i++) {
      this.push(value[i])
    }
  }

  push(value: T) {
    const node: Node<T> = { value, prev: null, next: null }
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      if (this.tail) {
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
      }
    }
    this.length++
  }

  pop() {
    if (!this.head) return undefined
    const { prev } = this.tail as Node<T>
    prev!.next = null
    this.tail = prev
    this.length--
  }

  get(index: number) {
    if (index >= 0 && index < this.length) {
      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current!.next
      }
      return current
    }
    return null
  }

  reset() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  toArray() {
    return Array.from({ length: this.length }, (_, index) => this.get(index)?.value)
  }
}
