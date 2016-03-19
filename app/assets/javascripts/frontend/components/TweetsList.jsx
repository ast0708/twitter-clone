import React from 'react';

import Tweet from './Tweet';

var TweetsList = React.createClass({

  render: function(){
    var tweets = this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />);
    return (
      <div>
        <ul className='collection'>
          {tweets}
        </ul>

      </div>
    )
  }
});

module.exports = TweetsList;
