import React from 'react';
import GameBoard from '../Components/GameBoard'

var sampleData = [
  { id: 1, name: "Will Smith", beard: false, image: 'http://pixel.nymag.com/imgs/daily/vulture/2015/12/18/18-will-smith-chatroom-silo.w1200.h630.png'},
  { id: 2, name: "someone2", beard: true, image: null},
  { id: 3, author: "someone3", beard: false, image: null}
];


class GuessWhoContainer extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      sampleData
    }
  }


  render(){
    return(
      <div>
      <h1> testing </h1>
        <GameBoard
        players={this.state.sampleData}
        />

        </div>


      )
  }
}




















export default GuessWhoContainer;