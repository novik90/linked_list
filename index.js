import LinkedList from "./LinkedList.js";

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
