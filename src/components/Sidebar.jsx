import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import extent from "../assets/extent.png";
import music from "../assets/music.png";
import video from "../assets/video.png";
import photos from "../assets/photos.png";
import bar from "../assets/bar.png";
import plus from "../assets/plus.png";
import { MdDashboard } from 'react-icons/md';
import { BiBookContent } from 'react-icons/bi';
import { SiSimpleanalytics } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { useState } from "react";





function Sidebar() {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState(btnState => !btnState);
  }

  let toggleClassApps = btnState ? 'activeApps': '';

  return (
    <Aside id="sidebar">
            <div>
            <img src={logo} alt="logo" className="logoimage" />
            <img src={extent} alt="extent" />
            </div>
      <ul className="links">
        <li>
          <MdDashboard />Dashboard
        </li>
        <li>
        <img src={bar} alt="bar" className="barimage" /><BiBookContent /> Content
        </li>
        <li>
          <BiBookContent /> Drafts
        </li>
        <li>
          <SiSimpleanalytics /> Analytics
        </li>
        <li>
          <CgProfile /> Profile
        </li>
      </ul>
      
      <div classname="plus">
        <div className={`apps${toggleClassApps}`}>
          <img src={photos} alt="photos"/> 
          <img src={music} alt="music" /> 
          <img src={video} alt="video" /> 
        </div>

        <div className="plusButton">
        <button onClick={handleClick}>
          <img src={plus} alt="plus" />
        </button>
        
        </div>
      </div>
    </Aside>
  );
}

const Aside = styled.section`
  background-color: black;
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-beetween;
  
  .logoimage{
    padding-right: 10px;

  }
  .barimage{
    padding-right:10px;
  }
  svg {
    color: white;
    font-size: 1.5rem;
    justify-content: left;
    margin-right: 5px;
    
    
  }

  .plusButton{
    margin-top:20px;
    margin-left:-8px;
    box-shadow: inset 0px 4px 20px rgba(170, 170, 170, 0.25);
    border-radius: 100px;
    height: 3rem;
    width:3rem;
    backgroung-color:black;
    text-align: center;
      
    img {
      height: 1rem;
      width: 1rem;
      
      
    }
    button{
      background-color: black;
       margin-top:11.5px;
      cursor: pointer;
      //margin-left: 8.5px;
      
    }
  }

  .apps{
    margin-top: 90px;
    
    display: flex;
    flex-direction: column;
    
    img{
      height: 30px;
      width: 30px;
     
      margin-top: 20px;
      opacity:0;
    }
  }

  .appsactiveApps{
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    
    img{
      height: 30px;
      width: 30px;
      margin-top: 20px;
      opacity:1;
      cursor: pointer
    }
  }

  .links {
    margin-top: 57px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    list-style-type: none;
    li {
      
      padding: 0.5rem;
      
      cursor: pointer;
      display: flex;
      justify-content: left;
      align-items: center;
      color: white;
      
      
      }
    }
    
  }

`;

export default Sidebar;
