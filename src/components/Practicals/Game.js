import React, { Component } from 'react'

export default class Game extends Component{
    constructor(props){
        super(props);
        this.state= {
            Player: "Rayyan",
            Score: 12
        };
        this.setState({Player:"MemoryGhost"});
    }
    
    render(){
        return(
            <div>
                <h1>BattleShips</h1>
                <p>Current Player: {this.state.Player}</p>
                <p>Current Score: {this.state.Score}</p>
            </div>
        )
    }
}