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

const list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
console.log(list);
