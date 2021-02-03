import { CurrencyPipe } from "@angular/common"
import { SelectorMatcher } from "@angular/compiler"

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
/*
interface PrintPair {
    value: any
    heritage: boolean[]

}*/

export class BinaryTree {



    root = null
    printStructure = []

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

    search(node: Node, heritage: boolean[]) {


        if (node !== null) {
            console.log(node.getValue())
            console.log(`heritage ${heritage.length}`)
            console.log(`print ${this.printStructure.length}`)


            if (this.printStructure.length <= heritage.length ){
                const currHerritage = Object.assign([], heritage)
                this.printStructure.push([{ value: node.getValue(), heritage: currHerritage }])

            } else {
                const currHerritage = Object.assign([], heritage)
                this.printStructure[heritage.length].push({ value: node.getValue(), heritage: currHerritage })
            }

            let left = Object.assign([], heritage)
            left.push(false)
            this.search(node.getLeft(), left)
            let right = Object.assign([], heritage)
            right.push(true)
            this.search(node.getRight(), right)
        }

        return 

    }

    getStructure() { //get structure for printing 
        console.log("getting structure")
        if (this.root) {
            this.search(this.root, [])
            console.log(this.printStructure)
            return this.printStructure
        } else {
            return []
        }
    }
}
