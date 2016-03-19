import React from 'react';

import TweetActions from '../actions/TweetActions';

let TweetBox = React.createClass({
  sendTweet(event){
    event.preventDefault();
    TweetActions.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value='';
  },
  render: function(){
    return (
      <form onSubmit={this.sendTweet}>
        <div className='input-field'>
          <textarea ref='tweetTextArea' className='materialize-textarea'/>
          <label>What's Happening</label>
          <button type='submit' className='btn'>Tweet</button>
        </div>
      </form>
    )
  }

});

module.exports = TweetBox;
