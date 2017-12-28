import React, { Component, ChangeEvent } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages';
import { Meteor } from 'meteor/meteor';

class ChatForm extends Component {

  addMessage = (e) => {
    e.preventDefault(); 
    if (!this.props.id) throw new Error(`Can't find room id`);
    const message = ReactDOM.findDOMNode(this.refs.messageInput).value.trim();
    Meteor.call('addMessage', message, this.props.id, () => {
      ReactDOM.findDOMNode(this.refs.messageInput).value = '';
    });
  } 

 
  render() {
    const { id } = this.props;
    return (
      <form onSubmit={this.addMessage} className='chat-form'>
        <input
          type='text'
          ref='messageInput'
          placeholder='Enter your message here...'
        />  
      </form>
    )
  }
}


export default ChatForm;