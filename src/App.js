import React, { Component } from "react";
import { Route,Link, Router, Routes} from "react-router-dom";
import NavBar from "./components/Navigation Components/NavBar";
import HomePageIntro from "./components/01HomePage/HomePageIntro";
import Blogs from "./components/02BlogHome/Blogs";
import About from "./components/03AboutSection/About";
import Contact from "./components/04ContactSection/Contact";
import Blog1 from './components/02BlogHome/BlogPages/Blog1/Blog1'
import Blog2 from "./components/02BlogHome/BlogPages/Blog2/Blog2";
import Blog3 from "./components/02BlogHome/BlogPages/Blog3/Blog3";
import Navigator from "./components/Navigation Components/Navigator";


class App extends Component{
    render(){
        const Owner={
            Name: "Rayyan",
            Username: "MemoryGhost26",
            Logo: "https://rayyangafoor-memoryghost.carrd.co/assets/images/image04.jpg?v=97b6705f"
        }
        const myTweetObj = {
            userImage: 'https://rayyangafoor-memoryghost.carrd.co/assets/images/image04.jpg?v=97b6705f',
            name: "MemoryGhost",
            handle: "memory_ghost_",
            Message: " After Doing This Three Times, I Am Still Very Much CONFUSED...",
            likes :[2],
            retweets: [0],

        }
        
        return(
                <div className="App">
                    {/* <NavBar Owner={Owner}/> */}
                    <Navigator Owner={Owner}/>
                    <Routes>
                        <Route exact path="/" element={<HomePageIntro Owner={Owner}/>}/>
                        <Route exact path="/blogs" element={<Blogs/>}/>
                        <Route exact path="/about" element={<About Owner={Owner}/>}/>
                        <Route exact path="/contact" element={<Contact/>}/>
                        <Route path="/blog1" element={<Blog1/>}/>
                        <Route path="/blog2" element={<Blog2/>}/>
                        <Route path="/blog3" element={<Blog3/>}/>
                    </Routes>
                    
                </div>
        );
    }
}

export default App;

// import Hello from "./components/Hello";
// import Tweet3 from "./Tweet3";
// import Game from "./components/Practicals/Game";
// import Randomizer from "./components/Practicals/Randomizer";
// import Button from "./components/Practicals/Button";
// import ButtonClicker from "./components/Practicals/ButtonClicker";
// import RollDice from "./components/Practicals/RollDice/RollDice";
// const MyRandomValues ={
        //         maxNum: 7,
        // }
        // const MyDiceValues ={
        //     maxDiceNumber: 6,
        // }

         {/* <nav className="Nav-App">
                        <Link to="/">HomePageIntro</Link>
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </nav> */}
 {/* <Hello to="Underlings" from="MemoryGhost"
                    data={[1,2,3]}
                    /> */}
 
                    {/* <Tweet3 myTweetObj={myTweetObj}
                     to= "My twiter feed" from= " a broken user"
                    />
                    <Game/>
                    <RollDice MyDiceValues={MyDiceValues}/>
                    <Randomizer MyRandomValues={MyRandomValues}/>
                    <ButtonClicker MyRandomValues={MyRandomValues}/> */}