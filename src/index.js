import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Homepage/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Profile from './Homepage/Profile'
import * as login from './Auth/Login';
import firebase, {auth} from './firebase.js'

import './index.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class AppRouter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }

    //Add componentDidMount lifecycle
    componentDidMount(){
        auth.onAuthStateChanged(user => {
        if(user){
            this.setState({user});
            }
        });
    }

    logOutUser = () => {
        firebase.auth().signOut()
            .then(window.location = "/");
    }



    render(){
        if(login.getUser() !== null){
        return(
            <Router>
				<div className="app">
					<nav className="main-nav">
						<Link to="/">Home</Link>
                        <Link to="/profile">profile</Link>
                        <Link to="/login">{login.getUser()}</Link>
						<Link to="/register">Register</Link>
                        <a href="#!" onClick={this.logOutUser}>Logout</a>
					</nav>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/profile" exact component={Profile} />
                        <Route path="/login" exact component={Login} />
						<Route path="/register" exact component={Register} />
					</Switch>
				</div>
			</Router>
        )
    }

    return(
        <Router>
			<div className="app">
				<nav className="main-nav">
					<Link to="/">Home</Link>
                    <Link to="/profile">profile</Link>
                    <Link to="/login">Login</Link>
					<Link to="/register">Register</Link>
                    <a href="#!" onClick={this.logOutUser}>Logout</a>
				</nav>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/profile" exact component={Profile} />
                    <Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
				</Switch>
			</div>
		</Router>
    );
}
}


ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);
