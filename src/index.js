// Create a new component.
// This component should produce some HTML

/*
const - ES2016
  declaring a variable, this is the final constant, never going to be re-assigned
App - assigned to a function
<div>Hi!</div> - JSX
  JSX - uses webpack and Babel to transpile into JavaScript
*/
const App = function() {
  return <div>Hi!</div>;
}

//Take the component's generated HTML and put it on the page (in the DOM)
//DOM - Document Object Model, structure determines how HTML is rendered
