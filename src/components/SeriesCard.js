import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SeriesCard = () => {
  return (
    <StyledSeriesCard>
      <StyledImg>
        <img
          src="https://uc41477f92547fbfe51152487859.previews.dropboxusercontent.com/p/thumb/ABGNkCg2D_9ecIPwb8u0ll3zimG9FM40HRSFZaZvE_en9HoMUcjkzfFo3v2NfSqKdKMLKg0pX7J-TPu3fMDxeSNIEiAq-T8DrEoOD6W746BbVPlw35XtUSr1KVIqn3D8tSLzce6RPqKKlhAsU7ECo72i70y1jL_mN6ot4oE59Qt5op9nm9uRyFP2vae95Gb58bnkSZM7TdTB6yzPjzeHB9P3Bx44HknLJ_ofIAZlQ0Ac871AYgaG_zZXArnFQLiEOU7gpqaTBLa8haxKWdfSmY6yCD599frefqm1mxQGv1ih5YBajSrmojKRyHaMWmkW4KZja8IuOvC_1lQG7BoGlum71t1wMn5nMAKQxBGV8mV9PA/p.jpeg?size=178x178&size_mode=1"
          alt=""
        />
        <div className="workoutInfo">
          <h1>9</h1>
          <h3>WORKOUTS</h3>
          <h3>Icon</h3>
        </div>
      </StyledImg>
      <StyledInfo>
        <h1>Series Title</h1>
        <img
          src="https://uc41477f92547fbfe51152487859.previews.dropboxusercontent.com/p/thumb/ABGNkCg2D_9ecIPwb8u0ll3zimG9FM40HRSFZaZvE_en9HoMUcjkzfFo3v2NfSqKdKMLKg0pX7J-TPu3fMDxeSNIEiAq-T8DrEoOD6W746BbVPlw35XtUSr1KVIqn3D8tSLzce6RPqKKlhAsU7ECo72i70y1jL_mN6ot4oE59Qt5op9nm9uRyFP2vae95Gb58bnkSZM7TdTB6yzPjzeHB9P3Bx44HknLJ_ofIAZlQ0Ac871AYgaG_zZXArnFQLiEOU7gpqaTBLa8haxKWdfSmY6yCD599frefqm1mxQGv1ih5YBajSrmojKRyHaMWmkW4KZja8IuOvC_1lQG7BoGlum71t1wMn5nMAKQxBGV8mV9PA/p.jpeg?size=178x178&size_mode=1"
          alt=""
        />
      </StyledInfo>
    </StyledSeriesCard>
  );
};

const StyledSeriesCard = styled(motion.div)`
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  max-height: 400px;
  max-width: 400px;
  width: auto;
  height: auto;
  overflow: hidden;
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

const StyledInfo = styled(motion.div)`
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

export default SeriesCard;
