import React, { Component } from 'react'
import { Route,Link, Router, Routes} from "react-router-dom";
import BlogList from './BlogList'
import Blog1 from './BlogPages/Blog1/Blog1';
import "./blogs.css"

export default class Blogs extends Component {

    render(){
        return(
           
            <section id='Blogs'>
                 
                <h2>
                    Blogs
                </h2>
                <h5>
                    yo these are my thoughts?
                </h5>
                <div className='BlogHolder'>
                    <BlogList/>
                </div>
               
            </section>
        )
    }
}