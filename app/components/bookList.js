import React from 'react'

    export default class BookList extends React.Component{
        constructor(props) {
            super(props);
              
            this.state = {
             loaded:true
            };
          }
  
componentDidMount(){

console.log("ready");

}

     handleStart(){

       
    }

render(){
    return(
       <div>Books</div>
    )
}
}