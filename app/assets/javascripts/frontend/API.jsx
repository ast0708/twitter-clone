import ServerActions from './actions/ServerActions';

export default {
  getAllTweets(){
    $.get('/tweets')
    .success(rawTweets => ServerActions.receivedTweets(rawTweets))
    .error(error => console.log(error));
  },
  createTweet(body){
    $.post('/tweets', {tweet: body})
    .success(rawTweet => ServerActions.receivedOneTweet(rawTweet))
    .error(error => console.log(error));
  },
  getAllUsers(){
    $.get('/followers/random')
    .success(rawUsers => ServerActions.receivedUsers(rawUsers))
    .error(error => console.log(error));
  },
  followUser(user_id){
    $.post('/followers', {user_id: user_id})
    .success(rawFollower => ServerActions.receivedOneFollower(rawFollower))
    .error(error => console.log(error));
  }
}
