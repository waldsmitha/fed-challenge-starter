import React, { useState } from "react";

import "./App.css";

//Components
import SeriesCard from "./components/SeriesCard";
import VideoCard from "./components/VideoCard";

//Styling
import styled from "styled-components";
import { motion } from "framer-motion";

//Data
import data from "./data";

function App() {
  const [active, setActive] = useState("false");
  const [cardData, setCardData] = useState(data);
  console.log(cardData);

  return (
    <StyledSection>
      <VideoCard data={cardData} />
      <SeriesCard data={cardData} />
      <VideoCard data={cardData} />
      <SeriesCard data={cardData} />
      <VideoCard data={cardData} />
      <SeriesCard data={cardData} />
      <VideoCard data={cardData} />
      <SeriesCard data={cardData} />
    </StyledSection>
  );
}

const StyledSection = styled(motion.div)`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  max-width: 1500px;
`;

export default App;
