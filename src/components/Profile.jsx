import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
export default function Avatar() {
  return (
    <Section>
      <div className="d-flex flex-column mb-3">
        <div className="p-2" id="name">Nobuhara</div>
        <div className="p-2" id="email">@noburockshere</div>
        
      </div>
      
    
      <div className="image">
        <img src={profile} alt="profile" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  color: white;
  display: flex;
  align-items: center;
  float: right;
  margin-top: 15px;
  margin-right: 83px;
  gap: 1rem;
  padding-bottom: 1rem;
  .image {
    img {
      height: 4rem;
     
      background: #000000;
box-shadow: inset 0px 4px 20px rgba(170, 170, 170, 0.25);
border-radius: 100%;
    }
  }
  #name {
    display: flex;
    align-content: center;
    gap: 0.5rem;
    font-size: 24px;
    line-height: 30px;
    
  }
  #email{
    display: flex;
align-items: center;
text-align: center;
font-size: 12px;
line-height: 12px;
float: right;
color: #00BC7B;
  }
`;