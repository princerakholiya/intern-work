import styled from "styled-components";
import Profile from "./Profile"
import Box from "./box"

export default function RightSidebar() {
  return <Section id="rightbar">
    
    <Profile />
    <Box />

    
  </Section>;
}

const Section = styled.section`
height: 100%;
width: 100%;
background-color: grey;
`;
