import React from 'react';
import * as login from '../Auth/Login.js';

export default class Home extends React.Component{
    render(){
      if(login.getUser()){
        return(
            <h1>Hello {login.getUser()}</h1>
        )
      }else{
        return(
          <h1>Home Page</h1>
        )
      }
    }
}
