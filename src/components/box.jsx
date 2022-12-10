import React from "react";
import styled from "styled-components";
import logo from "../assets/middleLogo.png";
export default function Box() {
  return (
    <Section>
         <div className="image">
        <img src={logo} alt="logo" />
      </div>

      <div className="text">
        <span>0x0445.....3E0716</span>
        
      </div>

    </Section>
    );
}

const Section = styled.section`
  color: white;
  display: flex;
  align-items: center;
  background-color: black;
  margin-top: 25px;
  margin-left: 350px;
  margin-right: 800px;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1rem;
  box-shadow: inset 0px 4px 26px rgba(252, 252, 252, 0.25);
border-radius: 15px;
  .image {
    img {
      height: 1.5rem;
      display: block;
      margin-top: 15px;
  
    }
  }
  .text {
    font-size: 15px;
    text-align: center;
    margin-top: 15px; 
    margin-left: -5px; 
  }
  
`;
