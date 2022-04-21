import React, { Component } from 'react'
import { render } from "react-dom";


export default class ButtonClicker extends Component{
constructor(props){
    super(props);
    this.state={
        number:1
    };
    this.genRandom= this.genRandom.bind(this);
}
genRandom(){
    //gen Number
    let rand = Math.floor(Math.random()* this.props.MyRandomValues.maxNum)+1;
    //Set state
    this.setState({number: rand});
}
    render(){
        return(
            <div>
                
                <h1>Your Lucky Number Is: <br></br> {this.state.number}</h1>
                
                {this.state.number=== 7 ? <h2>You WIN!!!</h2> : <button onClick={this.genRandom}>Test Your Luck</button>}
                
            </div>
        )
    }
}