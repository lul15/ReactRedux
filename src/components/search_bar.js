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
ONLY class-based components have state
define new class SearchBar, give it all the functionality that React.component has
*/
class SearchBar extends Component{
  //constructor called automatically when the instance of the class is created
  constructor(props) {
    //calling parent class
    super(props);

    this.state = {term: ''};
  }

  render() {
    //setState = manipulate state
    return (
      <div>
      <input
        value = {this.state.term}
        onChange={(event) => this.setState({term: event.target.value})}/>
      </div>
    );
  }
}

/*
exports the SearchBar function
*/
export default SearchBar;
