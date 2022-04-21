import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'



function NavBar(){
  
  const [active, setActive] = useState("Nav-Links");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === 'Nav-Links' ? setActive('Nav-Links nav__active') : setActive("Nav-Links");

    toggleIcon === 'nav__toggler' ? setToggleIcon("nav__toggler toggle") : setToggleIcon('nav__toggler')
  }
  return(
        <nav className='Nav-Container'>
          
          <a href='/' className='navBar-Logo'><img className='NavLogo' src="https://rayyangafoor-memoryghost.carrd.co/assets/images/image04.jpg?v=97b6705f"/>MemoryGhost</a> 
          {/* <img className='NavLogo' src={this.props.Owner.Logo}/> */}
          <ul className={active}>
            <li className='nav__item'>
                <a href="/" className='Nav-link-names'>Home</a>
            </li>
            <li className='nav__item'>
                <a  href="/blogs" className='Nav-link-names'>Blogs</a>
            </li>
            <li className='nav__item'>
                <a  href="/about" className='Nav-link-names'>About</a>
            </li>
            <li className='nav__item'>
                <a  href="/contact" className='Nav-link-names'>Contact</a>
            </li>
          </ul>
          <div onClick={navToggle} className={toggleIcon}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
        
        </nav>
  );
}
export default NavBar













////////////////////////////////////First Code Below//////////////////////////////////////



// export default class NavBar extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        isMenuOpen: false
//     };
//     this.handleToggleMenu = this.handleToggleMenu.bind(this);
// }
// handleToggleMenu(e) {
//   this.setState(state => ({
//       isMenuOpen: !state.isMenuOpen
//   }));
// }
//     render() {
      
//       return (
        
//        <nav className='NavBarItems'>
//          <div className='Nav-Container'>
//               <Link to="/" className='navBar-Logo'><img className='NavLogo' src={this.props.Owner.Logo}/>{this.props.Owner.Username}</Link>
//                 <div className='Nav-Links'>
//                     <Link className='Nav-link-names' to="/">Home</Link>
//                     <Link className='Nav-link-names' to="/blogs">Blogs</Link>
//                     <Link className='Nav-link-names' to="/about">About</Link>
//                     <Link className='Nav-link-names' to="/contact">Contact</Link>
//                 </div>
//                 <div isMenuOpen={this.state.isMenuOpen} 
//                     onClick={this.handleToggleMenu} className='nav__toggler'>
//                     <div className='line1'></div>
//                     <div className='line2'></div>
//                     <div className='line3'></div>
//                 </div>
//          </div>
//        </nav>
//       );
//     }
//    }

