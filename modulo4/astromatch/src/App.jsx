import './App.css';
import styled from "styled-components";
import React, {useState} from 'react';
import { Choose } from './components/Choose';
import { Matches } from './components/Matches';


const CardMatch = styled.div`
  border: solid 1px black;
  
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

function App() {

  const [page, setPage] = useState("choose")

  return (
    <MainContainer>
      {page === "choose" ? <Choose page={setPage} /> : <Matches page={setPage}/>}
    </MainContainer>
  );
}

export default App;
