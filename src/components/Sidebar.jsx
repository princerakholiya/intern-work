import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import extent from "../assets/extent.png";
import { MdDashboard } from 'react-icons/md';
import { BiBookContent } from 'react-icons/bi';
import { SiSimpleanalytics } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { BsPlusCircleFill } from 'react-icons/bs';
function Sidebar() {
  return (
    <Aside id="sidebar">
            <div>
            <img src={logo} alt="logo" />
            <img src={extent} alt="extent" />
            </div>
      <ul className="links">
        <li>
          <MdDashboard />   Dashboard
        </li>
        <li>
          <BiBookContent /> Content
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
        <BsPlusCircleFill />
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
  justify-content: space-between;
  
  
  svg {
    color: white;
    font-size: 1.5rem;
    justify-content: left;
  }

  .links {
    margin-bottom: 100px;
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
