import Node from "./Node.js";

// TODO: переписать на TS
export default class LinkedList {
  // TODO: поизучать конструкторы и свойства классов

  head = null;
  length = 0;

  constructor(...nodes) {
    for (const node of nodes) {
      this.addLast(node);
    }
  }

  addLast(value) {
    // Создаю новую ноду
    // TODO: почему лет. Я создаю ноду и больше ссылку на нее менять не буду
    let node = new Node(value);

    // Если лист пустой
    // TODO: Может ориентироваться на head?
    // TODO: инкапсулировать length
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

    // увеличиваем длину листа
    this.length++;
  }

  addFirst(value) {
    // Создаю новую ноду
    let node = new Node(value);

    // Если уже есть нода
    // TODO: Может ориентироваться на head?
    if (this.length === 0) {
      this.head = node;
    } else {
      node.next = this.head;
      node.next.prev = node;
      this.head = node;
    }

    // увеличиваем длину листа
    this.length++;
  }

  removeLast() {
    // если лист пустой

    /** 
     * TODO: переписать
     * 1. проверяем head === null
     * 2. head является одним элементом head.next === null то удаляем текущий head и length--
     */

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

    // TODO: снова let
    let current = this.head;

    // смотрим на следующий элемент
    // TODO: !current?.next одно и тоже что и current?.next != null или же current?.next == null
    while (!current?.next) {
      // Если следующий следуюдего отсутствуют то удаляем связь
      if (current.next.next === null) {
        // удаляем у последнего связь на предыдущего
        current.next.prev = null; // TODO: ссылки на элемент нет, мусорщик соберет его, ненужный код
        current.next = null;
        // не забываем длину укоротить
        this.length--;
      }
      current = current.next; // здесь для меня сложность понять что current = null а null.next = undefined
    }
  }

  removeFirst() {
    // TODO: смотри в removeLast
    if (this.length < 1) {
      return;
    }

    if (this.length < 2) {
      this.head = null;
      this.length = 0;
      // А КАК??
      return;
    }

    //  1    2    3    4    5
    // head next
    //      head
    //    head.prev = null
    this.head = this.head.next;
    this.head.prev = null;

    // let current = this.head.next;

    // current.prev.next = null;
    // current.prev = null;

    // this.head = current;

    this.length--;
  }

  // TODO: remove(item) - item элемент который удаляем (первый, средний, последний)
  // TODO: remove(index) (первый, средний, последний)

  render() {
    let current = this.head;
    console.log(`\x1b[31mprevious\x1b[0m | current | \x1b[34mnext\x1b[0m`);
    while (current !== null) {
      console.log(
        `\x1b[31m${current.prev?.value || "-"}\x1b[0m | ${current.value
        } | \x1b[34m${current.next?.value || "-"}\x1b[0m`
      );
      current = current.next;
    }
  }
}