import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component.
// This component should produce some HTML
/*
const - ES2016
  declaring a variable, this is the final constant, never going to be re-assigned
App - assigned to a function, it's a class, not an instance of the component
  need to be instantiated before being passed
  <App></App> makes a component instance
  <App /> self-closing tag
<div>Hi!</div> - JSX
  JSX - uses webpack and Babel to transpile into JavaScript
*/
/*
const App = function() {
  return <div>Hi!</div>;
}
*/
//ES6 syntax for function, => fat arrow, except for the keyword 'this'
//this function is identical to the function commented out above
const App = () => {
  return <div>Hi!</div>;
}


//Take the component's generated HTML and put it on the page (in the DOM)
//DOM - Document Object Model, structure determines how HTML is rendered
/*
<App></App> JSX tags make a component instance
<App /> self-closing tag
render(HTML, HTML_node where to put HTML)
document.querySelector - finds the id of the container, and tries to render the HTML there
*/
ReactDOM.render(<App />, document.querySelector('.container'));
