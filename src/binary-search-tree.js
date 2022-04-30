const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/




class BinarySearchTree {
  
  constructor() {
    this.content = null;
  }
  
  root() {
    return this.content;
  }

  add(data) {

    this.content = addNode(this.content, data);

    function addNode(node, value) {

      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;

      } else {

        if (data < node.data) node.left = addNode(node.left, data);
        if (data > node.data) node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasNode(this.content, data);

    function hasNode(node, data) {

      if (!node) return false;

      if (node.data === data) {
        return true;
      }

      return data < node.data ? hasNode(node.left, data) : hasNode(node.right, data);
    }
  }

  find(data) {
    
    return findNode(this.content, data);

    function findNode(node, data) {

      if (!node) return null;

      if (node.data === data) {
        return node;
      }

      return data < node.data ? findNode(node.left, data) : findNode(node.right, data);
    }
  }

  remove(data) {
    this.content = removeNode(this.content, data);

    function removeNode(node, data) {

      if (!node) return;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;

      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;

      } else {

        if (!node.left && !node.right) return null;
      }

      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let maxLeft = node.left;

      while (maxLeft.right) {
        maxLeft = maxLeft.right;
      }

      node.data = maxLeft.data;
      node.left = removeNode(node.left, maxLeft.data);

      return node;
    }
  }

  min() {
    return findMin(this.content);

    function findMin(node) {

      if (!node) return;

      while (node.left) {
        node = node.left;
      }

      return node.data;
    }
  }

  max() {
    return findMax(this.content);

    function findMax(node) {

      if (!node) return;

      while (node.right) {
        node = node.right;
      }

      return node.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};