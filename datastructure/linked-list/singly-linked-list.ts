class Nodes {
  private _val
  private _next: Nodes
  constructor(val: any) {
    this._val = val
    this._next = null
  }

  get val() {
    return this._val
  }
  get next() {
    return this._next
  }

  set next(next: Nodes) {
    this._next = next
  }
}

class SinglyLinkedList {
  private _head: Nodes
  private _tail: Nodes
  private _length
  constructor() {
    this._head = null
    this._tail = null
    this._length = 0
  }

  push(val: any): SinglyLinkedList {
    const newNode = new Nodes(val)
    if (!this._head) {
      this._head = newNode
      this._tail = this._head
    } else {
      this._tail.next = newNode
      this._tail = newNode
    }
    this._length++
    return this
  }

  pop(): Nodes {
    if (!this._head) return undefined
    let current: Nodes = this._head
    let newTail: Nodes = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this._tail = newTail
    this._tail.next = null
    this._length--
    if (this._length === 0) {
      this._head = null
      this._tail = null
    }
    return current
  }

  shift(): Nodes {
    if (!this._head) return undefined
    let currentHead: Nodes = this._head
    this._head = currentHead.next
    this._length--
    if (this.length === 0) {
      this._tail = null
    }
    return currentHead
  }

  unshift(val: any): SinglyLinkedList {
    let newNode: Nodes = new Nodes(val)
    if (!this._head) {
      this._head = newNode
      this._tail = this._head
    } else {
      newNode.next = this._head
      this._head = newNode
    }
    this._length++
    return this
  }

  indexOf(index): Nodes {
    if (index < 0 || index >= this._length) return null
    let counter = 0
    let current = this._head
    while (counter !== index) {
      current = current.next;
      counter++
    }
    return current
  }

  get head(): Nodes {
    return this._head
  }

  get tail(): Nodes {
    return this._tail
  }

  get length() {
    return this._length
  }
}

const list = new SinglyLinkedList()
list.push('Hello')
list.push('Goodbye')
console.log(list.indexOf(0).val);