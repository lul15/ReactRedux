import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyBwygzPMQ3ZwppySQuo_Vs7cj7zLbjIpzA";


/*
const - ES2016
  declaring a variable, this is the final constant, never going to be re-assigned
App - assigned to a function, it's a class, not an instance of the component
  need to be instantiated before being passed
*/
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      /*ES6: this.setState({videos}) = this.setState({videos: videos});
      prop and value has to have same name*/
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
        </div>
      );
    }
}


//Take the component's generated HTML and put it on the page (in the DOM)
//DOM - Document Object Model, structure determines how HTML is rendered
ReactDOM.render(<App />, document.querySelector('.container'));
