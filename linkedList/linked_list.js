class Node{
    constructor(data, next){
    this.data=data;
    this.next=next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert at first
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    // insert at last
    insertLast(data){
        let node = new Node(data);
        if(!this.head){
            this.head = node;
        }else{
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next = new Node(data, null);
    }
    this.size++;
    }

    // insert at index
    insertAtIndex(data, index){
        if(index<0 && index>this.size){
            return
        }
        // if first index
        let current=this.head;
        let prev, count=0;
        let node=new Node(data);
        if(index===0){
            this.head = new Node(data, this.head);
        }else{
            while(count<index){
                prev = current;
                count++;
                current=current.next;
            }
            node.next=current;
            prev.next=node;
        }
        this.size++;
    }

    // get at index
    getAt(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count===index){
                console.log(current)
            }
            count++;
            current=current.next;
        }
        return;
    }
    // remove at index
    removeAt(index){
        if(index<0 && index>this.size){
            return;
        }

        let current=this.head, prev, count=0;
        if(index===0 && this.head){
            this.head=current.next;
        }else{
            while(count<index){
            prev=current;
            current=current.next;
            count++;
        }
        prev.next = current.next;
        }
        this.size--;
    }

    // clear list
    clearList(){
        this.head=null;
        this.size=0;
    }

    // print list
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
        // console.log(this.size);
    }
}