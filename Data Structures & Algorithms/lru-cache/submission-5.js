class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map()
        this.capacity = capacity;
        this.tail = new ListNode(0, 0);
        this.head = new ListNode(0, 0);
        
        this.tail.prev = this.head;
        this.head.next = this.tail;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    insertAtTail(node) {
        node.prev = this.tail.prev
        node.next = this.tail
        this.tail.prev.next = node
        this.tail.prev = node    
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const node = this.cache.get(key)
        if (!node) {
            return -1
        }

        this.remove(node);
        this.insertAtTail(node)
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) { 
        const node = this.cache.get(key);

        if(node) {
           this.remove(node)
        } else if(this.cache.size >= this.capacity) {
            const LRUNode = this.head.next;
            this.cache.delete(LRUNode.key)
            this.remove(LRUNode)
        }

       const newNode = new ListNode(key, value)
       this.insertAtTail(newNode)
    
       this.cache.set(key, newNode)
    }
}

class ListNode {
    constructor(key, value)  {
        this.key = key
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
