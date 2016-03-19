import React from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import {Link} from 'react-router';

let getAppState= ()=> {
  return{
    users: UserStore.getAll()
  }
};

let Follow = React.createClass({
  getInitialState: function() {
    return( getAppState());
  },
  componentDidMount(){
    UserActions.getAllUsers();
    UserStore.addChangeListener(this._onChange)
   },
  componentWillUnmount(){
      UserStore.removeChangeListener(this._onChange)
    },
   _onChange(){
     this.setState(getAppState());
   },
   followUser(user_id){
     UserActions.followUser(user_id);
   },
   followClasses(following){
     return "secondary-content btn-floating " + (following ? "green" : "grey");
   },
  render: function(){
    let users = this.state.users.map(user=> {
        return (
          <li key={user.id} className='collection-item avatar'>
            <img src={user.gravatar} className='circle' />
            <a className={this.followClasses(user.following)} onClick={this.followUser.bind(this, user.id)}>
              <i className='material-icons'>person_pin</i>
            </a>
            <span className='title'>{user.name}</span>
          </li>
        )
    });
    return(
      <div>
        <h3>Who to Follow</h3>
        <ul className='collection'>
          {users}
        </ul>
        <Link to ='/'> Back</Link>
      </div>
    )
  }
});

module.exports = Follow;
