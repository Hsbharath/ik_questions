/*
Reverse a stack using recursion

Write a program to reverse a stack using recursion. 
You are not allowed to use loop constructs 
like while, for..etc, and you can only use the following 
ADT functions on Stack S: 
isEmpty(S) 
push(S) 
pop(S)
*/

const insertToBottom = (stack, ele) => {

    if(stack.length === 0){
        stack.push(ele);
        return;
    }

    const top = stack.pop();
    insertToBottom(stack, ele);
    stack.push(top);

}

const reverseStack = (stack) => {

    if(stack.length === 0){
        return;
    }

    const top = stack.pop();
    reverseStack(stack);
    insertToBottom(stack, top);

}

const stack = [1, 2, 3, 4];
reverseStack(stack);

console.log(stack) // [4, 3, 2, 1]