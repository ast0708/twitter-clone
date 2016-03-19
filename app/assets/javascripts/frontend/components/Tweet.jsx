import React from 'react';

let Tweet = React.createClass({
  render: function(){
    return (
        <li className="collection-item avatar">
          <img className='circle' src={this.props.gravatar} />

          <span className="title">{this.props.name}</span>
          <time>{this.props.formattedDate}</time>
          <p>{this.props.body} </p>
        </li>
    )
  }
});

module.exports = Tweet;
