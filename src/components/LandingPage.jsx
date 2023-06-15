import React, {useState} from "react";
import "./LandingPage.css";
import img1 from "./images/background-header.png"
import { Link } from "react-router-dom";
// import img2 from "./images/bulb-removebg-preview.png"





function LandingPage(){

    

    return (
        <div className="landing-page">
            <div className="side-bar-land"> 
                <div className="logo-land" style={{backgroundImage: `url(${img1})`}}>
                   <div className="mentor">Frontend Mentor</div>
                   <div className="board">Feedback Board</div>
                </div>
                <div className="features-land">
                    <div className="features-button-box" id="features-button-box">
                        <div className="row1-feat" id="row1-feat">
                            <button className="butn active"> All </button>
                            <button className="butn">UI</button>
                            <button className="butn">UX</button>
                        </div>
                        <div className="row2-feat">
                            <button className="butn" id="bug-btn">Enhancement</button>
                            <button className="butn" >Bug</button>
                        </div>
                        <div className="row3-feat">
                            <button className="butn"> Feature </button>
                        </div>
                    </div>
                </div>
                <div className="roadmap-land">
                    <div className="roadmap-title">
                        <div className="roadmap-left-title">Roadmap</div>
                        <div className="roadmap-right-title">View</div>
                    </div>
                    <div className="planned-and-views">
                        <div className="planned"><li>Planned</li></div>
                        <div className="planned-views"> 0</div>
                    </div>
                    <div className="progress-and-views">
                        <div className="progress"><li>In-Progress</li></div>
                        <div className="progress-views"> 0</div>
                    </div>
                    <div className="live-and-views">
                        <div className="live"><li>Live</li></div>
                        <div className="live-views"> 0</div>
                    </div>

                </div>
            </div>
            <div className="main-content-land">
                <div className="bar-land">
                    <div className="bulb">bulb</div>
                    <div className="suggestions">
                        <div id="suggestion-count" className="suggestion-count">0</div>
                        <div className="sugg">Suggestions</div>
                    </div>
                    <div className="sorting">
                            <div className="sort"> <button className="transparent-button"> Sort by: </button></div>
                                
                            <div className="sort-param" id="sort-selected">Most upvotes</div>
                            
                    </div>  
                    <div className="add-feedback-button">
                        <button className="feedback-btn"><Link to = "/feedback" >+ Add Feedback</Link></button>
                    </div>
                </div>
                <div className="content-land">
                
                </div>
            </div>
            <div className="dropdown">
                <ul className="dropdown-menu">
                    <li><a >Most Upvotes</a></li>
                    <li><a >Least Upvotes</a></li>
                    <li><a >Most Comments</a></li>
                    <li><a >Least Comments</a></li>
                </ul>
            </div>
        </div>
    )
}

// function DropDownItem (props) {
//     return (
//         <li className="drop-list"> 
//             <a>{props.text}</a>
//         </li>
        
//     )
// }

export default LandingPage