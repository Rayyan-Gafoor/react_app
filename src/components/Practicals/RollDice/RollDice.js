import React, { Component } from 'react'
import Die from '../Die'

export default class RollDice extends Component{
    constructor(props){
        super(props);
        this.state={
            DiceNum1:'one',
            DiceNum2:'six'
        };
        this.GetRandomDiceNumber= this.GetRandomDiceNumber.bind(this);
    }
    static defaultProps={
        DieSides: [
            'one',
            'two',
            'three',
            'four',
            'five',
            'six'
        ]
    }

    GetRandomDiceNumber(){
        const {DieSides}= this.props
        this.setState({
            DiceNum1: DieSides[Math.floor(Math.random()* this.props.MyDiceValues.maxDiceNumber)],
            DiceNum2: DieSides[Math.floor(Math.random()* this.props.MyDiceValues.maxDiceNumber)]
        })
    }

    
    render(){
        
        const {DiceNum1, DiceNum2} = this.state
        return(
            <div className='DiceGame'>
                <h1>My Dice Game</h1>
                <div className='DiceHolder'>
                    <Die face={DiceNum1}/>
                    <Die face={DiceNum2}/>
                </div>
                <div className='DiceRollButton'>
                    <button onClick={this.GetRandomDiceNumber}>
                        'Roll Me Please!'
                    </button>
                </div>
                
            </div>
        )
    }
}