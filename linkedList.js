/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  return {
    getHead() {
      return head;
    },
    getTail() {
      return tail;
    },
    add(value) {
      let newObj = {};
      newObj.value = value;
      newObj.next = null;
      if (!head) {
        // refer to same node object when adding to empty list
        head = newObj;
        tail = newObj;
      } else {
        // refer to most recently added node
        tail.next = newObj;
        tail = newObj;
      }
      return newObj;
    },
    remove(number) {
      let prevNode = null;
      let currentNode = this.get(number);
      let nextNode = this.get(number + 1);
      if (currentNode === false) {
        // basically nothing to remove
        return false;
      }
      if (number > 0) {
        prevNode = this.get(number - 1);
        prevNode.next = nextNode; // previous node points to the following node
      } else {
        head = nextNode; // if choosing first node, point to next node
      }
      if (currentNode.next === null) {
        tail = prevNode; // if choosing last node, set the tail to previous node
      }
    },
    get(number) {
      let current = head;
      let count = 0;
      while (count < number && current !== null) {
        // basically go through the nodes until it reaches target
        current = current.next;
        count++;
      }
      if (current === null) {
        // reached the end of the nodesa
        return false;
      }
      return current;
    },
    insert(value, index) {
      let newObj = {};
      newObj.value = value;

      let back = this.get(index - 1);
      let front = this.get(index);

      if (index < 0) {
        // can't insert in a negative spot
        return false;
      }

      if (front === false) {
        // can't insert in a spot that doesn't exist
        return false;
      }

      if (index === 0) {
        // if inserting in beginning
        newObj.next = head;
        head = newObj;
      }

      if (index > 0 && front !== false) {
        // if inserting somewhere in the middle
        newObj.next = front;
        back.next = newObj;
      }

      if (front === false && back === tail) {
        // if inserting at the end
        add(value);
      }
    }
  };
}
