const CustomError = require("../extensions/custom-error");

const chainMaker = {
  newChain: [],
  getLength() {
    return this.newChain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.newChain.push('( )');
    } else {
      this.newChain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (typeof (position) === 'number' && position % 1 === 0 && position > 0 && position < this.newChain.length) {
    this.newChain.splice(position - 1, 1);
    return this;
    } else {
      this.arr = [];
      throw Error;
    }
  },
  reverseChain() {
    this.newChain.reverse();
    return this;
  },
  finishChain() {
    let result = this.newChain.join('~~');
    this.newChain = [];
    return result;
  }
};

module.exports = chainMaker;
