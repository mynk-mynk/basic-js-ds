const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/




class BinarySearchTree {
  
  constructor() {
    throw new NotImplementedError('Not implemented');
    // this.content = null;
  }
  
  // root() {
  //   this.root.data = this.value ? this.value : null;
  //   return this.root.data;
  // }

  // add(data) {

  //   this.content = addNode(this.content, data);

  //   function addNode(node, value) {

  //     if (!node) {
  //       return new Node(value);
  //     }

  //     if (node.value === value) {
  //       return node;

  //     } else {

  //       if (value < node.value) node.left = addNode(node.left, value);
  //       if (value > node.value) node.right = addNode(node.right, value);
  //     }

  //     return node;
  //   }
  // }

  // has(data) {
  //   return hasNode(this.content, data);

  //   function hasNode(node, value) {

  //     if (!node) return false;

  //     if (node.value === value) {
  //       return true;
  //     }

  //     return value < node.value ? hasNode(node.left, value) : hasNode(node.right, value);
  //   }
  // }

  // find(data) {
  //   this.find.data = null;
  //   return findNode(this.content, data);

  //   function findNode(node, value) {

  //     if (!node) return null;

  //     if (node.value === value) {
  //       return node;
  //     }

  //     return value < node.value ? findNode(node.left, value) : findNode(node.right, value);
  //   }
  // }

  // remove(data) {
  //   this.content = removeNode(this.content, data);

  //   function removeNode(node, value) {

  //     if (!node) return;

  //     if (value < node.value) {
  //       node.left = removeNode(node.left, value);
  //       return node;

  //     } else if (value > node.value) {
  //       node.right = removeNode(node.right, value);
  //       return node;

  //     } else {

  //       if (!node.left && !node.right) return null;
  //     }

  //     if (!node.left) {
  //       node = node.right;
  //       return node;
  //     }

  //     if (!node.right) {
  //       node = node.left;
  //       return node;
  //     }

  //     let maxLeft = node.left;

  //     while (maxLeft.right) {
  //       maxLeft = maxLeft.right;
  //     }

  //     node.value = maxLeft.value;
  //     node.left = removeNode(node.left, maxLeft.value);

  //     return node;
  //   }
  // }

  // min() {
  //   return findMin(this.content);

  //   function findMin(node) {

  //     if (!node) return;

  //     while (node.left) {
  //       node = node.left;
  //     }

  //     return node.value;
  //   }
  // }

  // max() {
  //   return findMax(this.content);

  //   function findMax(node) {

  //     if (!node) return;

  //     while (node.right) {
  //       node = node.right;
  //     }

  //     return node.value;
  //   }
  // }
}

module.exports = {
  BinarySearchTree
};