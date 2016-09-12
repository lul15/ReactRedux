import React {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyBwygzPMQ3ZwppySQuo_Vs7cj7zLbjIpzA";


// Create a new component.
// This component should produce some HTML
/*
const - ES2016
  declaring a variable, this is the final constant, never going to be re-assigned
App - assigned to a function, it's a class, not an instance of the component
  need to be instantiated before being passed
*/
//changed from functional to class -component, in order to use state
class App extends Component = () => {
  constructor(props) {
    super(props);

    this.state = {videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});
      //ES6: this.setStatate({videos}) = this.setState({videos: videos}); prop and value has to have same name
      
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        </div>
      );
    }
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
