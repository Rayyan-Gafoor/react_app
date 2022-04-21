import React, { Component } from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import Blog1 from './BlogPages/Blog1/Blog1'
import { GiFoxTail } from 'react-icons/gi'

export default class BlogList extends Component {

    render(){
        return(
            
            <div className='Blogs-cards'>
                <article className='blog__card'>
                    <GiFoxTail className='blog__icon'/>
                    <h5>Blog 1</h5>
                    <small>A critical analysis of the interactive, virtual reality artwork, created by Zoe Beloff, The Beyond.</small>
                    <br></br>
                    <Link className='blog__link' to="/blog1">read more...</Link>
                </article>
                <article className='blog__card'>
                    <GiFoxTail className='blog__icon'/>
                    <h5>Blog 2</h5>
                    <small>Humans have become visual creatures who prefer objects that are more appealing over the less</small>
                    <br></br>
                    <Link className='blog__link' to="/blog2">read more...</Link>
                </article>
                <article className='blog__card'>
                    <GiFoxTail className='blog__icon'/>
                    <h5>Blog 3</h5>
                    <small>3+ years Working</small>
                    <Link className='blog__link' to="/blog3">read more...</Link>
                </article>
                <div className='blog__links'>
                    <Routes>
                        
                        {/* <Route exact path="/blog2" element={<Blogs/>}/>
                        <Route exact path="/blog3" element={}/>
                        <Route exact path="/blog4" element={<Contact/>}/> */}
                    </Routes>
                </div>
            </div>
        )
    }
}