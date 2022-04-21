import React, { Component } from 'react'

// const Die_1 = () => <i className="fa-solid fa-dice-one" />;
// const Die_2 = () => <i className="fa-solid fa-dice-two" />;
// const Die_3 = () => <i className="fa-solid fa-dice-three" />;
// const Die_4 = () => <i className="fa-solid fa-dice-four" />;
// const Die_5 = () => <i className="fa-solid fa-dice-five" />;
// const Die_6 = () => <i className="fa-solid fa-dice-six" />;

export default class die extends Component{
    render(){
       const {face} = this.props

       return<i className={`Die fas fa-dice-${face}`}/>  
    }
}