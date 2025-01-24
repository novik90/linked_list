import LinkedList from "./LinkedList.js";

let list = new LinkedList();
list.addFirst("1");
list.addFirst("11");
list.addFirst("111");
list.removeLast();
list.render();