const { NotImplementedError } = require('../extensions/index.js');


class Stack {
    stack = [];

    push(elem) {
        this.stack.push(elem);
    }

    pop() {
        return this.stack.pop(this.stack.length - 1);
    }

    peek() {
        console.log(this.stack[this.stack.length - 1]);
        return this.stack[this.stack.length - 1];
    }

}

let st = new Stack();
st.push("a");
st.push("b");
st.push("c");
st.pop()
st.peek()
st.push("c");
st.push("c");
st.push("c");
st.peek()
console.log(st);


module.exports = {
    Stack
};