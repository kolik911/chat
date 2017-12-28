import React, { Component } from 'react';
import Registration from './Registration'; 
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor'; 
class Login extends Component {

  constructor() {
    super();
    this.state = {
      password: null,
      confirmPass: null
    }
  }

  handlePass = (e) => {
    this.setState({ 
      password: e.target.value
    })
  }

  handleConfPass = (e) => { 
    this.setState({
      confirmPass: e.target.value
    })
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    Meteor.loginWithPassword(data.get('username'), data.get('password'), (err) => {
      if (err) throw err;
      const { history } = this.props;
      history.push('/home');
    })
  }

  handleRegistration = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const userId = Accounts.createUser({
      username: data.get('username'),
      password: data.get('password')
    }, () => { 
      const { history } = this.props;
      history.push('/home');
      console.log(Meteor.userId());
    });
    
  }

  componentDidMount() { 
  }

  render() {
    const { password, confirmPass } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleLoginSubmit}>
          <label>Login</label>
          <br />
          <input type='text' className='form-control aaa' name='username' placeholder='name' />
          <br />
          <input type="password" className='form-control' name='password' placeholder='password' />
          <br />
          <button className='btn btn-primary' type='submit'>Send</button>
        </form>

        <h2>Registration</h2>
        <form onSubmit={this.handleRegistration}>
          <label>Registration</label>
          <br />
          <input type='text' className='form-control' placeholder='Enter name' name='username' />
          <br />
          <input type='password' className='form-control' onChange={this.handlePass} placeholder='Enter password' />
          <br />
          <input type='password' className='form-control' onChange={this.handleConfPass} placeholder='Confirm password' name='password' />
          <br />

          {password === confirmPass && password !== null && confirmPass !== null ? <button className='btn btn-primary' type='submit'>Send</button> : ''}
        </form>
      </div>
    );
  }
}

export default Login;