/**
 * Create a Stack data structure.
 * the stack can:
 * 1. push() -> add item to the top
 * 2. pop() -> remove item from the top
 * 3. peek() -> return the topest item but not remove it
 * 4. count() -> return the total items in the stack
 */

let _items = new WeakMap();
class Stack {
  constructor() {
    _items.set(this, []);
  }
  push(obj) {
    const items = _items.get(this);
    items.push(obj);
  }
  pop() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error("Stack cannot be empty.");
    return items.pop();
  }
  peek() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error("Stack cannot be empty.");
    return items[items.length - 1];
  }
  get count() {
    return _items.get(this).length;
  }
}

const stack = new Stack();
