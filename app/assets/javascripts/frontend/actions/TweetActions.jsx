import API from "../API";

export default {
  getAllTweets(){
    console.log(1, 'Tweets action');
    API.getAllTweets();
  },
  sendTweet(body){
    API.createTweet(body);
  }
}
