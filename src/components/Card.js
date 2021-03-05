import React, { useState } from "react";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { active } from "../animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//Router
import { Link } from "react-router-dom";

const Card = (data) => {
  const [cardData, setCardData] = useState(data.data);
  const [cardActive, setCardActive] = useState(false);
  const toggleActive = () => {
    setCardActive(!cardActive);
    console.log(cardActive);
  };

  if (cardData.type === "video") {
    return (
      <StyledCard
        onClick={toggleActive}
        variants={active}
        initial="hide"
        animate={cardActive ? "show" : "hide"}
      >
        <img src={cardData.img[0]} alt="" />
        <StyledVideoInfo>
          <StyledTitle>
            <h1>{cardData.title}</h1>
            <img src={cardData.img[1]} alt="" />
          </StyledTitle>
          <div className="videoMetrics">
            <h3>{cardData.time}</h3>
            <h3>{cardData.views}</h3>
          </div>
          <Link
            to="/test"
            style={{
              fontSize: "1.8rem",
              textDecoration: "none",
              padding: "0 .5rem",
            }}
          >
            VIEW DETAILS
          </Link>
        </StyledVideoInfo>
      </StyledCard>
    );
  } else {
    return (
      <StyledCard
        onClick={toggleActive}
        variants={active}
        initial="hide"
        animate={cardActive ? "show" : "hide"}
      >
        <StyledImg>
          <img src={cardData.img[0]} alt="" />
          <div className="workoutInfo">
            <h1>{cardData.workouts}</h1>
            <h3>WORKOUTS</h3>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
        </StyledImg>
        <StyledSeriesInfo>
          <h1>{cardData.title}</h1>
          <img src={cardData.img[1]} alt="" />
        </StyledSeriesInfo>
      </StyledCard>
    );
  }
};

const StyledCard = styled(motion.div)`
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  max-height: 400px;
  max-width: 400px;
  width: auto;
  height: auto;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 55%;
    object-fit: cover;
  }
  @media (max-width: 720px) {
    padding: 1rem 0rem;
  }
`;

const StyledTitle = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  width: 100%;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 0.5rem;
  }
`;

const StyledVideoInfo = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .videoMetrics {
    display: flex;
    width: 100%auto;
    h3 {
      padding: 0.5rem;
    }
  }
`;

const StyledSeriesInfo = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  width: 100%;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 0.5rem;
  }
`;

const StyledImg = styled(motion.div)`
  position: relative;
  height: 55%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .workoutInfo {
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(33, 34, 54, 0.6);
    color: white;
    height: 100%;
    width: 40%;
    margin: auto 0 auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export default Card;
