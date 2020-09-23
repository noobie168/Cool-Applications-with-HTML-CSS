class Node {
	constructor(data, next=null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// Insert at Beginning
	insertFirst(data) {
		this.head = new Node(data, this.head);
		this.size++;
	}

	// Insert at End
	insertEnd(data) {
		let node = new Node(data);

		if(this.head == null) {
			this.head = node;
		}
		else {
			let ptr = this.head;
			while(ptr.next != null)
				ptr = ptr.next;
			ptr.next = node;
		}
		this.size++;
	}

	// Insert at Index 'idx'
	insertAt(data,idx) {
		if(idx < 0 || idx > this.size) {
			return;
		}
		else if(idx === 0) {
			this.insertFirst(data);
		}
		else if(idx == this.size) {
			this.insertEnd(data);
		}
		else {
			let ptr = this.head,cnt = 0;
			while(cnt+1 < idx) {
				ptr = ptr.next;
				cnt++; 	
			}

			let node = new Node(data,ptr.next);
			ptr.next = node;
			this.size++;
		}
	}

	// Get at Index 
	getAt(idx) {
		if(idx >= this.size) {
			return;
		}
		else {
			let cnt = 0, ptr = this.head;
			while(cnt < idx) {
				ptr = ptr.next;
				cnt++;
			}
			console.log(ptr.data);
		}
	}

	// Remove At
	removeAt(idx) {
		if(idx < 0 || idx >= this.size) {
			return;
		}
		else {
			let cnt = 0, ptr = this.head, prev = null;
			while(cnt < idx) {
				prev = ptr;
				ptr = ptr.next;
				cnt++;
			}
			if(prev == null){
				this.head = ptr.next;
			}
			else {
				prev.next = ptr.next;
			}
			this.size--;
		}
	}

	// Clear List
	clearList() {
		this.head = null;
		this.size = 0;
	}

	// Print the Linked List
	printList() {
		let ptr = this.head;
		if(this.size > 0)
			console.log('Element of List are : ');
		while(ptr != null) {
			console.log(ptr.data);
			ptr = ptr.next;
		}
	}

}

const ll = new LinkedList();

ll.insertAt(20,0);
ll.insertEnd(10);
ll.insertFirst(5);
ll.insertAt(30,3);
ll.printList();
ll.insertAt(40,2);

console.log(ll);
ll.printList();
ll.getAt(0);
ll.getAt(4);
ll.getAt(2);

ll.removeAt(0);
ll.removeAt(2);
ll.removeAt(1);
ll.printList();

ll.clearList();
ll.printList();