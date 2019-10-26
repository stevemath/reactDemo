import React from 'react'
import ReactDOM from 'react-dom'
import { FaSpinner } from 'react-icons/fa'
import BookList from './components/bookList'
import './index.css'



 

class App extends React.Component{

     constructor(props) {
          super(props);
            
          this.state = {
           loaded:true
          };
        }


    

     render(){
         

          return( 
               this.state.loaded === true ?
              
 
      <div className='container'>
         
         <div className="intro-wrapper">
           
           <div className="subhead">
               <div>
              Welcome to the Zoho React Demo!<br />
             
              </div>
              <div>
                 
              </div>
          </div>
         
      </div>
      
        <BookList />   
      </div>


 : <div className="loading" >...LOADING... <br /> <FaSpinner color="#990000"  size={64}  className="icon-spin" /></div>

          )
     }
    

}


ReactDOM.render( 
<App />,
document.getElementById('app')
)