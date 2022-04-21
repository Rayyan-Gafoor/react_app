import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { GiFox } from 'react-icons/gi'
import "./Nav2.css"
import {VscThreeBars} from "react-icons/vsc"

export default class Navigator extends Component {
  constructor(props){
    super(props);
    this.state={
      openLinks: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    this.setState(prevState=> ({
      openLinks : !prevState.openLinks
    }));

  }
  render() {
    return (
        <div className='navbar'>
          <div className='leftSide' id={this.state.openLinks ? "open" : "close"}>
              <Link to="/" className='navBar-Logo'><img className='NavLogo' src={this.props.Owner.Logo}/>{this.props.Owner.Username}</Link>
              <div className='hidden'>
                <Link className='Nav-link-names' to="/">Home</Link>
                <Link className='Nav-link-names' to="/blogs">Blogs</Link>
                <Link className='Nav-link-names' to="/about">About</Link>
                {/* <Link className='Nav-link-names' to="/contact">Contact</Link> */}
              </div>
          </div>
          <div className='rightSide'>
            <Link className='Nav-link-names' to="/">Home</Link>
            <Link className='Nav-link-names' to="/blogs">Blogs</Link>
            <Link className='Nav-link-names' to="/about">About</Link>
            {/* <Link className='Nav-link-names' to="/contact">Contact</Link> */}
            
            <button onClick={this.toggleNav}>
            <VscThreeBars/>
                {/* <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div> */}
            </button>
          </div>
        </div>
    )
  }
}

