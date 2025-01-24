class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * Add value into list.
   * @param {any} value Any value.
   * @param {boolean} [options=false] `false` (default) - insert into tail, `true` - insert into head.
   */
  add(value, options = false) {

    if (value === undefined) {
      throw new Error("Value is required.");
    }

    let node = new Node(value);

    if (this.length === 0) {
      this.head = node;
    } else if (options) {
      /*
       * insert into head
       */
      node.next = this.head;
      node.next.prev = node;
      this.head = node;
    } else {
      /*
       * insert into tail
       */
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      current.next.prev = current;
    }

    /*
     * increment length
     */
    this.length++;
  }

  addLast(value) {
    //Создаю новую ноду
    let node = new Node(value);

    //Если лист пустой
    if (this.length === 0) {
      this.head = node;
    } else {
      //Если уже есть нода
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
      // добавляю связть назад последней ноде
      current.next.prev = current;
    }

    //увеличиваем длину листа
    this.length++;
  }

  addFirst(value) {
    //Создаю новую ноду
    let node = new Node(value);

    //Если уже есть нода
    if (this.length === 0) {
      this.head = node;
    } else {
      node.next = this.head;
      node.next.prev = node;
      this.head = node;
    }

    //увеличиваем длину листа
    this.length++;
  }

  removeLast() {
    // если лист пустой
    if (this.length < 1) {
      return;
    }

    // если лист с 1 элементом
    if (this.length < 2) {
      this.head = null;
      this.length = 0;
      // А КАК??
      return;
    }

    let current = this.head;

    //смотрим на следующий элемент
    while (current.next !== null) {
      // Если следующий следуюдего отсутствуют то удаляем связь
      if (current.next.next === null) {
        //удаляем у последнего связь на предыдущего
        current.next.prev = null;
        current.next = null;
        //не забываем длину укоротить
        this.length--;
        return;
      }
      current = current.next;
    }
  }

  removeFirst() {
    if (this.length < 1) {
      return;
    }

    if (this.length < 2) {
      this.head = null;
      this.length = 0;
      // А КАК??
      return;
    }

    let current = this.head.next;

    current.prev.next = null;
    current.prev = null;

    this.head = current;

    this.length--;
  }

  render() {
    let current = this.head;
    console.log(`\x1b[31mprevious\x1b[0m | current | \x1b[34mnext\x1b[0m`);
    while (current !== null) {
      console.log(
        `\x1b[31m${current.prev?.value || "-"}\x1b[0m | ${
          current.value
        } | \x1b[34m${current.next?.value || "-"}\x1b[0m`
      );
      current = current.next;
    }
  }
}

//TESTS

let list = new LinkedList();

console.log("add values:");
list.addFirst("1"); // 1
list.addFirst("2"); // 2 1
list.addLast("3"); // 2 1 3
list.addLast("4"); // 2 1 3 4
list.addFirst("5"); // 5 2 1 3 4
list.render();

console.log("remove first and last values:");
list.removeLast(); // 5 2 1 3
list.removeFirst(); // 2 1 3

list.render();
