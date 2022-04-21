import React, { Component } from 'react'
import { GiFox } from 'react-icons/gi'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import "./Home.css"


export default class HomePageIntro extends Component {
  render() {
    return (
        <React.Fragment>

          <header>
            <div className='container header__container'>
              <h5>Hello I am</h5>
              testing
              <h1> <GiFox/> Ghost <GiFox/></h1>
              <h5 className='text-light'>Game Developer | Designer </h5>
              <div className='me'><img className='homeImage' src={this.props.Owner.Logo}/></div>
            </div>
          </header>

          <footer className='container footer__container'>
            Check Me Out
            <div className='socials'>
              <button className='social__icon'>< AiFillGithub/></button>
              <button className='social__icon'>< AiFillLinkedin/></button>
              <button className='social__icon'>< AiFillTwitterCircle/></button>
              <button className='social__icon'>< AiFillInstagram/></button>
            
            </div>
          </footer>
          
          
        </React.Fragment>
    )
  }
}






{/* <h1> Yello There... {this.props.to}!</h1>
          <p>This is where I will tell you about the angel from my nightmares</p>
          <h1> Lets Get this thing Going</h1>
          <p>from: {this.props.from} who has forgotten his age...</p>

          <p>  </p>

          <h1>Question? Is Internet Art Born With An Aura???
          </h1>
          <p> Internet art is created with the intent of being shared, after the internet was created for cummunication.
            According to Benjamin... if something is reproduced it loses its aura... but for Net.Art... it whole purpose is to be shared.
            Why do i say this... Net.Art is essentially the Web, and only through being shared and interacted with does it build meaning...
            Net.Art exist and forms itself through its users...So I do not think it is "Born" with art. No. Net.Art grows its Aura through its users and artists.
            Think of social media, we post for it to be seen, for it to be shared. Look at memes. If memes, memes grow their aura through it relativeness that it shares with users.
            if it was not shared or seen by anyone, it has no purpose, hence it can not build its aura.
            <p></p>
            But also How does Net.Art Loses its Aura? 
            Does it loses it Aura Once its forgotten and lost in this Ocean we call the Web.

          </p> */}