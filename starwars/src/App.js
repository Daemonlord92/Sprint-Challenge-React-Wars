import React, { useState, useEffect } from "react";
import { Container, Row } from 'reactstrap';
import './App.css';

import axios from 'axios';

import Character from './components/Character'

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [peos, setPeo] = useState([])

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setPeo(response.data.results);
        console.log(response.data)
      })
      .catch(err => console.log("Morty you really messed up", err))
  }, [] )

  const listItems = peos.map((peos) => <Character name={peos.name} status={peos.status} image={peos.image} />)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (

    <>
    
    <Container style={{margin: '20px auto'}}>
      <Row>
        {listItems}
      </Row>
    </Container>
    </>
  );
}

export default App;
