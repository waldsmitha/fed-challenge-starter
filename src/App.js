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
    <StyledSection variants={fadeIn} initial="hide" animate="show">
      {cardData.map((card) => (
        <Route path="/" key={card.title.split(" ")[0]}>
          <Card data={card} />
        </Route>
      ))}
    </StyledSection>
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
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
`;

export default App;
