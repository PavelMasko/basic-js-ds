const { NotImplementedError } = require('../extensions/index.js');


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {

    constructor() {
        this.rootNode = null;
    }

    root() {
        return this.rootNode;
    }

    add(data) {
        this.rootNode = addWithin(this.rootNode, data);

        function addWithin(node, data) {
            if (!node) {
                return new Node(data);
            } else if (node.data === data) {
                return node;
            } else {
                data < node.data ?
                    node.left = addWithin(node.left, data) :
                    node.right = addWithin(node.right, data);
            }
            return node;
        }
    }

    has(data) {
        return searchNode(this.rootNode, data);

        function searchNode(node, value) {
            if (node === null) {
                return false;
            } else if (node.data === value) {
                return true;
            } else {
                return node.data < value ?
                    searchNode(node.right, value) :
                    searchNode(node.left, value);
            }
        }
    }

    find(data) {
        return findNode(this.rootNode, data);

        function findNode(node, value) {
            if (node === null) {
                return null;
            } else if (node.data === value) {
                return node;
            } else {
                return node.data < value ?
                    findNode(node.right, value) :
                    findNode(node.left, value);
            }
        }
    }


    remove(data) {
        this.rootNode = removeNode(this.rootNode, data);

        function removeNode(node, data) {
            if (node === null) {
                return null;
            }

            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (node.data < data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                } else if (!node.left) {
                    node = node.right;
                    return node;
                } else if (!node.right) {
                    node = node.left;
                    return node;
                }

                let minFromRight = node.right;
                while (minFromRight.left) {
                    minFromRight = minFromRight.left;
                }
                node.data = minFromRight.data;
                node.right = removeNode(node.right, minFromRight.data);

                return node;
            }
        }
    }

    min() {
        if (this.rootNode === null) { null }

        let node = this.rootNode;

        while (node.left !== null) {
            node = node.left;
        }

        return node.data;
    }

    max() {
        if (this.rootNode === null) { null }

        let node = this.rootNode;

        while (node.right !== null) {
            node = node.right;
        }

        return node.data;
    }
}

module.exports = {
    BinarySearchTree
};