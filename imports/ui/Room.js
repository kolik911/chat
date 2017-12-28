import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { withTracker } from 'meteor/react-meteor-data';

import { Rooms } from '../api/rooms';  

class Room extends Component {
  
  renderCitys = () => {
    let rooms = this.props.rooms;  
    return rooms.map(item => <option key={item._id} value={item._id}>{item.room}</option>)
  }
 
  // handleSubmite = (e) => {
  //   e.preventDefault();
  //   const room = ReactDOM.findDOMNode(this.refs.textInput).value.trim(); 
  //   Rooms.insert({
  //     room,
  //     createdAt: new Date(),
  //   })
  //   ReactDOM.findDOMNode(this.refs.textInput).value = '';
  // }

  handleGetId = (e) => {
    this.props.onclick(e.target.value)
  }

  componentDidMount() {
      Meteor.subscribe('rooms')
  }  
  
  render() { 
    return (
      <div className='col-rooms'>
        {/* <form onSubmit={this.handleSubmite}>
          <input
            ref='textInput'
            placeholder='Enter city'
          />
        </form> */}
        <select onChange={this.handleGetId}>
          <option value=''>...</option>
          {this.renderCitys()}
        </select>
      </div>
    );
  }
}


export default withTracker(() => {
  return {
    rooms: Rooms.find().fetch(),
  };
})(Room);