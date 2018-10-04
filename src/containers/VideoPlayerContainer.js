import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProps = state => {
  return {video: state.currentVideo};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: () => {
      dispatch(changeVideo(ownProps.video));
    }
  };
};

var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
