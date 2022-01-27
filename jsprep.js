/*
Closure :- 
  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.
Every closure has three scopes:
Local Scope (Own scope)    
Outer Functions Scope
Global Scope

Lexical scoping: 
         A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

Call , bind and Apply:
 Call and apply immediately calls a function while bind creates a new function. Aruguments are individually passed in call while apply expects an array.

Callback: 
        A callback function, also known as a higher-order function, is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction. 

Currying funtions : 
Its is process of taking a function with multiple arguments and transforming it into a sequence of functions each with only single argument .

Prototype 
Its a mechanism by which Javacript Object interit features from another Object.

memoitation: 
Memoitation is an optimization technique that speeds up applications by storing the results of expensive function calls and returning the cached result when the same inputs occur again
A cache is simply a temporary data store that holds data so that future requests for that data can be served faster.

Event Delegation : 

How to handle asynchronous functions:

Recursion : 
It is a technique for interating over an operation by having a function call itself repeatedly until its arrives at a result 

What is javascript : Its the scripting language of the web . 

Ecmascript

Difference between == and === 

Promise 
It is an object that may produce a single value some time in the future with either a resolvled value or a reason of not being resolved .

Strict mode in Javscript:
It is useful for writing secure JS code . IT prevents some bugs from happening and throws more exceptions.

Difference between null and undefined :
Null type is an object that is explicitly assigned to a variable .
Undefined type is where variable is declared but not assigned a value .

AJAX (Asynchroun)

Difference between synchronous and asynchronous : 
1. Synchronous is blocking while asynchronous are not.
2. Synchronous complete the current code before the next code are executed while
   asynchronus continue on the next code without completing the  current code .

Difference bertween val, let and const: 

Execution Context
An Execution Context is an abstract concept of an environment where the JavaScript code is evaluated and executed. Whenever any code is run in JavaScript, it’s run inside an execution context.
The function code executes inside the function execution context, and the global code executes inside the global execution context. Each function has its own execution context.

Call Stack
The call stack as its name implies is a stack with a LIFO (Last in, First out) structure, which is used to store all the execution context created during the code execution.
JavaScript has a single call stack because it’s a single-threaded programming language. The call stack has a LIFO structure which means that the items can be added or removed from the top of the stack only.

The event loop, the web APIs and the message queue/task queue are not part of the JavaScript engine, it’s a part of browser’s JavaScript runtime environment or Nodejs JavaScript runtime environment (in case of Nodejs).

The Event Loop
The job of the Event loop is to look into the call stack and determine if the call stack is empty or not. If the call stack is empty, it looks into the(Job Queue/ Micro-Task queue) message queue to see if there’s any pending callback waiting to be executed

A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. A shallow copy means that certain (sub-)values are still connected to the original variable.


generators

reactive forms

*/