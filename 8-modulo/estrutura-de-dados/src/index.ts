// class NodeItem {
//   constructor(public value: any) {}
//   public next: NodeItem | null = null;
// }

// class LinkedList {
//   constructor() {}

//   public list: any[] = [];

//   public addNode = (node: NodeItem) => {
//     if (!this.list.length) {
//       this.list.push(node);
//     } else {
//       // colocar o node item dentro do next do último item.
//       // para saber qual é o último, é só ter certeza de que next === null
//       let currentItem = this.list[0];

//       if (currentItem.next === null) {
//         currentItem.next = node;
//       } else {
//         while (currentItem.next !== null) {
//           currentItem = currentItem.next;

//           if (currentItem.next === null) {
//             currentItem.next = node;
//             break;
//           }
//         }
//       }
//     }
//   };

//   public printList = (): any[] => {
//     let currentItem = this.list[0];
//     while (currentItem.next !== null) {
//       currentItem = currentItem.next;
//     }

//     return this.list;
//   };
// }

// const myList = new LinkedList();
// const node1 = new NodeItem(1);
// myList.addNode(node1);
// console.log(myList.printList());
// myList.addNode(new NodeItem(2));
// myList.addNode(new NodeItem(3));
// myList.addNode(new NodeItem(4));
// myList.addNode(new NodeItem(5));
// console.log(myList.printList());

// class Stack {
//   constructor() {}
//   public list: any[] | null = null;

//   public isEmpty = (): boolean => {
//     if (this.list === null) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   public push = (value: any) => {
//     const myNode = new NodeItem(value);

//     if (this.list === null) {
//       this.list = [new LinkedList()];
//     }

//     this.list[0].addNode(myNode);
//     console.log("aqui",this.list[0].list[0]);
//   };

//   public pop = () => {
//     // when next is null, make sure to change the previous item to null

//     let previousItem;
//     let currentItem = this.list![0].list[0];

//     while (currentItem.next !== null) {
//       previousItem = currentItem;
//       currentItem = currentItem.next;

//       if (currentItem.next === null) {
//         previousItem.next = null;
//         // currentItem = null;
//         break;
//       }
//     }
//     console.log(this.list![0]);
//   };
// }

// const myStack = new Stack();
// myStack.push(1);
// myStack.push("a");
// myStack.pop();

// console.log(myStack.isEmpty());

// First in, first out
class Queue {
  constructor() {}
  public list: any[] = [];
  public length: number = 0;

  public isEmpty = (): boolean => {
    if (!this.length) {
      return true;
    } else {
      return false;
    }
  };

  public enqueue = (item: any) => {
    this.list.push(item);
    this.length = this.list.length;

    console.log(this.list);
    console.log(this.length);
  };
  public dequeue = () => {
    // tirar o primeiro item
    // colocar o index+1 no lugar de index
    // diminuir o tamanho do array da lista

    for (let i = 0; i < this.length; i++) {
      this.list[i] = this.list[i + 1];
    }
    this.list.length = this.list.length - 1;
    this.length = this.list.length;

    console.log(this.list);
    console.log(this.length);
  };

  public print = () => {
    console.log(this.list)
  }
}

const myQueue = new Queue()
myQueue.isEmpty()
myQueue.enqueue("oi")
myQueue.enqueue("oi de novo")
myQueue.dequeue()
myQueue.print()