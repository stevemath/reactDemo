import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../utils/firebase';
import { auth } from 'firebase';


  class Registration extends React.Component{
    constructor(props) {
        super(props);
    const onHideReg = this.props.onHideReg
       
    
      }
    render(){
        return(
  <div className="user-reg">
    <h1>Register</h1>
    <RegForm onHideReg={this.props.onHideReg} onRegister={this.props.onRegister}/>
  </div>
    
        )
    }
  }

  class Login extends React.Component{
    constructor(props) {
        super(props);
    const onHideLogin = this.props.onHideLogin
     console.log(props);
    
      }
    render(){
        return(
  <div className="user-reg">
    <h1>Log-in</h1>
    <LoginForm onHideLogin={this.props.onHideLogin} />
  </div>
    
        )
    }
  }


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

  const INITIAL_STATE_LOGIN = {
    email: '',
    password: '',
    error: null,
  };

class RegFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
this.closeReg = this.closeReg.bind(this)
this.onRegister = this.onRegister.bind(this)
  }


  onSubmit = event => {

    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne,username)
      .then(authUser => {
        console.log("new user created");
        console.log(authUser);
        var createdDate = new Date().toISOString();
        //var userName = authUser.user.displayName;
        console.log(username);
        // Create a user in your Firebase realtime database
       var newuser = this.props.firebase
          .user(authUser.user.uid)
          .set({
              id:authUser.user.uid,
            userName: username,
            email:email,
            createdOn: createdDate,
           // scoreUpdatedOn:createdDate,
            //topScore:0,
          });
//console.log(newuser);
          return authUser
      })
      .then((authUser)=>{
        console.log(authUser);
        console.log("update profile");
        authUser.user.updateProfile({
            displayName:username,
            
        })
            })
      .then(() => {
          this.onRegister(username)
        this.setState({ ...INITIAL_STATE });
        //console.log(authUser);
        this.closeReg();
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();


  }

closeReg(event){
this.props.onHideReg()
}

onRegister(name){
   // this.props.onRegister(name) 
   console.log("call onregister");
   console.log(this.props);
   this.props.onRegister(name) 
}


  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {

    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;

      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
        
     <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          autoComplete = "false" 
          placeholder="User Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          autoComplete = "false"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          autoComplete = "false" 
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          autoComplete = "false" 
          placeholder="Confirm Password"
        />
        <div className="reg-btn-wrapper">
             <button disabled={isInvalid} type="submit" className="btn btn-submit reg">Sign Up</button>
        <button  type="button" className="btn btn-cancel reg" onClick={()=>this.closeReg()}>Cancel</button>
        </div>
       
        {error && <div className="error">{error.message}</div>}
      </form>
    );
  }
}


class LoginFormBase extends Component {
    constructor(props) {
      super(props);
  
      this.state = { ...INITIAL_STATE_LOGIN };
  this.closeLogin = this.closeLogin.bind(this)
    }
  
  
    onSubmit = event => {
  
      const { email, password } = this.state;
      this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then((authUser) => {
          this.setState({ ...INITIAL_STATE_LOGIN });
          
          this.closeLogin();
        })
        .catch(error => {
          this.setState({ error });
        });
      event.preventDefault();
  
  
    }
  
  closeLogin(event){
  this.props.onHideLogin()
  }
  
    onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
    render() {
  
      const {
         
          email,
          password,
          error,
        } = this.state;
  
        const isInvalid =
        email === '' ||
        password === '';
  
      return (
          
       <form onSubmit={this.onSubmit}>
         
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            autoComplete = "false"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            autoComplete = "false" 
            placeholder="Password"
          />
         
          <div className="reg-btn-wrapper">
               <button disabled={isInvalid} type="submit" className="btn btn-submit reg">Log-in</button>
          <button  type="button" className="btn btn-cancel reg" onClick={()=>this.closeLogin()}>Cancel</button>
          </div>
         
          {error && <div className="error">{error.message}</div>}
        </form>
      );
    }
  }




const RegForm = withFirebase(RegFormBase);
const LoginForm = withFirebase(LoginFormBase);

export default Registration
export {RegForm}
export {Login}
export {LoginForm}