
import Sidebar from "components/Sidebar";
import Rightbar from "components/Rightbar";
import styled from "styled-components";

export default function App() {
 
  return (
    <Div>
      <Sidebar />
      <Rightbar />
    </Div>
    
  );
}

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  min-height: 100vh;
  height: max-content;
`;
