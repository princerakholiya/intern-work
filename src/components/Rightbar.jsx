import styled from "styled-components";
import Profile from "./Profile"
import Box from "./box"
import ContentBox from "./contentBox";

export default function RightSidebar() {
  return <Section id="rightbar">
    
    <Profile />
    <Box />
    <ContentBox />

    
  </Section>;
}

const Section = styled.section`
height: 100%;
width: 100%;
`;
