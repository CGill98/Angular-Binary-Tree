console.log('Binary Tree')


class Node {
    value = null
    left = null
    right = null

    constructor(value: Number) {
        this.value = value
    }

    getLeft = () => this.left
    getRight = () => this.right
    getValue = () => this.value

    setLeft = (value: Number) => this.left = new Node(value)
    setRight = (value: Number) => this.right = new Node(value)
    
}


export class BinaryTree {

    root = null

    constructor(data: Number[]) {
        console.log(data)
        this.root = new Node(data[0])
        this.fillTree(this.root, data.slice(1, data.length))
        console.log(this)
    }

    fillTree(node: Node, data: Number[]) {
        if (0 < data.length) {
            if (node.getValue() <= data[0]) {
                if (node.getRight() === null) { 
                        node.setRight(data[0])
                        console.log(data)
                        this.fillTree(this.root, data.slice(1, data.length))
                } else {
                    this.fillTree(node.getRight(), data)
                }
            }
            if (data[0] < node.getValue()) {
                if (node.getLeft() === null) {
                    node.setLeft(data[0])
                    console.log(data)
                    this.fillTree(this.root, data.slice(1, data.length))
                } else {
                    this.fillTree(node.getLeft(), data)
                }
            }
        }

        return
    }
}
