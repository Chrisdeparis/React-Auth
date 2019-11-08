import React from 'react';
import firebase from '../firebase.js'

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = event => {
		this.setState({[event.target.name]: event.target.value});
	}

  //Submit email and password to firebase database
	handleSubmit = event => {
		event.preventDefault();
    event.preventDefault();
    const {email, password} = this.state;

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password).catch(function(error) {
        alert(error.message);
      })
        .then(user => {
            this.props.history.push('/');
        })
    }




    render(){
        const {email, password} = this.state;
        return(
          <div>
            <div className = 'authcontainer'>
                <h1> Log In </h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor = 'email'> Email </label>
                        <input type = 'email' name ='email' id = 'email' value = {email} onChange = {this.handleChange} />
                    <label htmlFor = 'password'> Password </label>
                        <input type = 'password' name = 'password' id = 'password' value = {password} onChange ={this.handleChange} />
                    <button className = 'submit' children = 'Lets go!' />
                </form>
            </div>
          </div>
        )
    }
}

export function getUser(){
  var user = firebase.auth().currentUser;
  if(user !== null){
    var name = user.displayName;
    return name;
  }else{
  return null;
  }
}
