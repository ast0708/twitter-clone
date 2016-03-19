import React from 'react';

import TweetBox from './TweetBox';
import TweetsList from './TweetsList';

import TweetAction from '../actions/TweetActions';
import TweetStore from '../stores/TweetStore';
import { Link} from 'react-router';


let getAppState=() =>{
  return { tweetsList: TweetStore.getAll() }
}

var Index = React.createClass({
 getInitialState: function() {
      return getAppState()

 },
 componentDidMount(){
   TweetAction.getAllTweets();
    TweetStore.addChangeListener(this._onChange)
  },
 componentWillUnmount(){
     TweetStore.removeChangeListener(this._onChange)
   },
  _onChange(){
    this.setState(getAppState());
  },

  render: function(){
    return(
      <div className='container'>
        <Link to='/follow'> Who to Follow</Link>
        <TweetBox  />
        <TweetsList tweets = {this.state.tweetsList} />
      </div>
    )
  }
});

module.exports = Index;
