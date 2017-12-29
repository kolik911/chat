import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Room from './Room';
import ChatForm from './ChatForm';

import { Messages } from '../api/messages';

class App extends Component {

  constructor() {
    super();
    this.state = {
      id: ''
    }
  }


  renderMessages() {
    const messages = this.props.messages;
    return messages.map(item => <li className='item' key={item._id}>{item.message}</li>);
  }

  handleId = (id) => {
    this.setState({
      id
    })

    if (this.activeSubscription) this.activeSubscription.stop();
    this.activeSubscription = Meteor.subscribe('messages', id)
  }

  logOut = () => {
    Meteor.logout();
  }

  render() {
    return (
      <div>
        <Room onclick={this.handleId} />
        <div className='col-chat'>
          <div className='messages'>
            <ul>
              {this.renderMessages()}
            </ul>
          </div>
          <ChatForm id={this.state.id} />
        </div>
        <button onClick={this.logOut}>Log Out</button>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    messages: Messages.find({}).fetch()
  };
})(App);
