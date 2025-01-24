import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
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
