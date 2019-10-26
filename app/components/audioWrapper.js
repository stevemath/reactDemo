import React from 'react';


export default class AudioWrapper extends React.Component{
    constructor(props){
        super(props)
     
this.state={
    currentAudio: null,
    audioList: {
             start : {file:"NewAchievement1_01"},
             beginGame : {file:"TubularBell3_01"},
         }
}

        this.playAudio =  this.playAudio.bind(this)

    }

    componentDidMount(){
        console.log("mount");
      // this.props.playAudio(this.playAudio.bind(this))
    }

componentDidUpdate(){
    console.log("update");
   // console.log(this.state.audioList.start);
var item=null;
item = this.refs['objAudio'];


if (item != null) {
    item.pause()
            console.log("play audio");
           console.log(item);
            item.play();
           // this.setState({currentAudio : item});
            item.volume = 1;
        }
}

    playAudio(audioClip){

console.log(audioClip)

this.setState({currentAudio:audioClip})
        console.log("play");
        
    }

    render(){



        return(
            <div className="audiotest">
<button onClick={()=> this.playAudio()}>play</button>
<div>
    {this.state.currentAudio !== null ?
<audio id="audioElement" preload="auto"  ref="objAudio"  key={this.state.currentAudio}>
<source src={`./app/audio/${this.state.audioList[`${this.state.currentAudio}`].file}.mp3`} type="audio/mpeg" />
<source src={`./app/audio/${this.state.audioList[`${this.state.currentAudio}`].file}.ogg`}  type="audio/ogg" />
</audio>
:""
    }

</div>
</div>
        )
    }
}