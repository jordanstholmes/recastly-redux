import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import store from '../store/store.js';
import handleVideoSearch from '../actions/search.js';

export default class App extends React.Component {

  componentDidMount() {
    store.dispatch(handleVideoSearch('kobe'));
  }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}
