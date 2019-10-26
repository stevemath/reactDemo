import React from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import { withRouter } from "react-router";
import Registration from './register'
import {Login} from './register'
import { withFirebase } from '../utils/firebase';
import { AuthUserContext } from './context'


 class Nav extends React.Component{

    constructor(props){
        super(props)
var path = props.location.pathname
  
    
    this.state={
          currentPath :path,
          showReg:false,
          showLogin:false,
          displayName:"",
        }
    
this.showUserReg = this.showUserReg.bind(this)
this.hideUserReg = this.hideUserReg.bind(this)

this.showLogin = this.showLogin.bind(this)
this.hideLogin = this.hideLogin.bind(this)
this.setDisplayName = this.setDisplayName.bind(this)

    }



componentDidUpdate(prev){

 

 console.log("nav updated");
     console.log(this.props.user());
var userData = this.props.user();

console.log(this.state.displayName);
console.log(userData);

if(this.state.displayName ==="" && userData !== null){
var userName = userData.displayName;
this.setState({displayName: userName})

}

   
   

   if(this.props.location.pathname  !== this.state.currentPath){
    this.setState({
              currentPath :this.props.location.pathname,
          })
   }
}

showUserReg(event){
this.setState({showReg:true, showLogin:false})

}

setDisplayName(name){
    this.setState({displayName: name})
}

hideUserReg(event){
    this.setState({showReg:false})
    
    }

    showLogin(event){
        this.setState({showLogin:true, showReg:false})
        
        }

        hideLogin(event){
            this.setState({showLogin:false})
            
            }









    render(){
        
        return(
            <React.Fragment>
              <div className="nav-wrapper">
            <h1 className="header"><div className="logo-sml"></div><div className="header-text">Header </div></h1>
<div>
    
</div>
           
        
          
          
           </div> 

          
<div className="reg-text-wrapper" >
<div className="reg-text">
<AuthUserContext.Consumer>
{authUser => 
    
    authUser ?
 <span>You are logged in as {this.state.displayName}<br /> <SignOut /></span>
 :   <div><a className="txt-link login" onClick={()=>this.showLogin()} >log-in</a> or  
  <a className="txt-link reg" onClick={()=>this.showUserReg()} > register as a new user </a><br />
  
 </div>
  
}
</AuthUserContext.Consumer>
   
</div> 
   
</div>
    
           {this.state.showReg === true ? 
 <div className="reg-form">
     <Registration  onHideReg={()=>this.hideUserReg()} onRegister={(name)=>this.setDisplayName(name)}/> 
     </div>

: ""
}

{this.state.showLogin === true ? 
 <div className="reg-form">
     <Login  onHideLogin={()=>this.hideLogin()} /> 
     </div>

: ""
}

         
            </React.Fragment>
        )
    }
}

const BaseSignOutButton = ({ firebase }) => (
    <a className="txt-link logout" onClick={firebase.doSignOut}>
      Log Out
    </a>
  );

  const SignOut = withFirebase(BaseSignOutButton)

export  default withRouter(Nav)
