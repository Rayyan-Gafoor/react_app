import React, { Component } from 'react'

export default class Randomizer extends Component{
    constructor(props){
        super(props);
        this.state={
            num: 0
        };
        this.makeTimer();
    }
    makeTimer(){
        setInterval(() =>{
            //generate Number
            let rand = Math.floor(Math.random()* this.props.MyRandomValues.maxNum);
            //set State of That number
            this.setState({num: rand});
        },1000)
    }
    render(){
        return(
            <div>
                <h1>{this.state.num}</h1>
            </div>
        )
    }
}