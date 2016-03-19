var TweetBox = React.createClass({
  render: function(){
    return(
      <form>
        <div className='input-field'>
          <textarea className='materialize-textarea' />
          <label> What's Happening </label>
          <button className='btn btn-right'> Tweet </button>
        </div>
      </form>
    )
  }
});

module.exports = TweetBox;
