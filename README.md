"# Assignment-5" 
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById : we can find specific element of specific ID
getElementsByClassName : we can find all the elements with same class
querySelector : it uses css selector and find first matching element
querySelectorAll : it finds all matching elements 

How do you create and insert a new element into the DOM?
first of all we create the element with document.createElemnt('') then we appendChild() it .

What is Event Bubbling and how does it work?
when an event happens in an element, it first runs on that element, then "bubbles up" to its parent, then grandparent, until the root

What is Event Delegation in JavaScript? Why is it useful?
Event Delegation means adding a single event listener to parent element to handle events on its child elements.
it requires less events listener and works on new added elements.

What is the difference between preventDefault() and stopPropagation() methods?
 preventDefault() : stops the browser’s default action for an event.
stopPropagation() : stops the event bubbling.
