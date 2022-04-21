import React, { Component } from 'react'

export default class Button extends Component{
    constructor(props){
        super(props);
        this.state ={
            clicked: false
        };
        this.handleClick= this.handleClick.bind(this);
    }

    handleClick(e){
        this.setState({clicked: true});   
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                    Click Me! pwease
                </button>
            </div>
        )
    }
}