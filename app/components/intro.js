import React from 'react'
import {playAudio, audioList, currentAudio} from '../utils/utilities'
import AudioUtility from '../components/audio'


//export default Class Intro extends React.Component{
    export default class SelectActor extends React.Component{

     handleStart(){

        console.log("start");
        this.props.onStart()

        console.log(audioList);
        playAudio(audioList.start)
    }

render(){
    return(
        <div className="intro-wrapper">
            <div className="intro-img">
               <img  src={require('../images/logo475.png')} />
            
            </div>
             <div className="subhead">
                 <div>
                Welcome to Battle of the Trivia Gods!<br />
                Vanquish your foes and prove yourself Trivia Master Supreme! 
                <br /><br />
                Select two actors then see how well you know their movies. The faster you answer, the higher your score!
                </div>
                <div>
                    <button onClick={()=>this.handleStart()} className="btn btn-start">Start Game</button>
                </div>
            </div>
            <AudioUtility  ref="compAudio" />
        
        <button className="audiotest" onClick={()=>this.refs['compAudio'].playAudio('beginGame')} >play begin</button>
   
        </div>
    )
}
}