import React, { useState } from "react";
//Router
import { Route } from "react-router-dom";
//Components
import Card from "./components/Card";
//Styling
import "./App.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "./animations";
//Data
import data from "./data";

function App() {
  const [cardData, setCardData] = useState(data);

  return (
    <Route path="/">
      <StyledSection variants={fadeIn} initial="hide" animate="show">
        {cardData.map((card) => (
          <Card data={card} />
        ))}
      </StyledSection>
    </Route>
  );
}

const StyledSection = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  max-width: 1500px;
  margin: auto;
  height: 100%;
  padding: 5rem;
`;

export default App;
