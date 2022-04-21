import React, { Component } from 'react'
import { GiFoxTail } from 'react-icons/gi'
import "./About.css"

export default class About extends Component {

    render(){
        return(
            <section id='about'>
                <h5>Get To Know Me</h5>
                <h2>About Me</h2>

                <div className='container about__container'>

                    <div className='about__me'>
                        <div className='about__me-image'>
                            <img  src={this.props.Owner.Logo}  alt="This is an Image of Me"/>   
                        </div>
                    </div>

                    <div className='about__content'>
                        <div className='about__cards'>
                            <article className='about__card'>
                                <GiFoxTail className='about__icon'/>
                                <h5>Exp</h5>
                                <small>3+ years Working</small>
                            </article>
                            <article className='about__card'>
                                <GiFoxTail className='about__icon'/>
                                <h5>Exp</h5>
                                <small>3+ years Working</small>
                            </article>
                        </div> 
                        <p className='about__me__text'>
                            this is all about me 
                        </p>
                    </div>

                </div>
            </section>
        )
    }
}