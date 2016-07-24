import React, {Component} from 'react'; //{} pulls the Component from React library

/*
JSX function
SearchBar - functional component
*/
/*
const SearchBar = () => {
  return <input />;
};
*/

/*
Class-based component, always need a render and a return
define new class SearchBar, give it all the functionality that React.component has
*/
class SearchBar extends Component{
  render() {
    return <input />;
  }
}

/*
exports the SearchBar function
*/
export default SearchBar;
