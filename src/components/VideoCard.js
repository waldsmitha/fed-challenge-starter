import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

const VideoCard = ({ data }) => {
  console.log(data);
  return (
    <StyledVideoCard>
      <img
        src="https://uc41477f92547fbfe51152487859.previews.dropboxusercontent.com/p/thumb/ABGNkCg2D_9ecIPwb8u0ll3zimG9FM40HRSFZaZvE_en9HoMUcjkzfFo3v2NfSqKdKMLKg0pX7J-TPu3fMDxeSNIEiAq-T8DrEoOD6W746BbVPlw35XtUSr1KVIqn3D8tSLzce6RPqKKlhAsU7ECo72i70y1jL_mN6ot4oE59Qt5op9nm9uRyFP2vae95Gb58bnkSZM7TdTB6yzPjzeHB9P3Bx44HknLJ_ofIAZlQ0Ac871AYgaG_zZXArnFQLiEOU7gpqaTBLa8haxKWdfSmY6yCD599frefqm1mxQGv1ih5YBajSrmojKRyHaMWmkW4KZja8IuOvC_1lQG7BoGlum71t1wMn5nMAKQxBGV8mV9PA/p.jpeg?size=178x178&size_mode=1"
        alt=""
      />
      <StyledVideoInfo>
        <StyledTitle>
          <h1>Title</h1>
          <img
            src="https://uc41477f92547fbfe51152487859.previews.dropboxusercontent.com/p/thumb/ABGNkCg2D_9ecIPwb8u0ll3zimG9FM40HRSFZaZvE_en9HoMUcjkzfFo3v2NfSqKdKMLKg0pX7J-TPu3fMDxeSNIEiAq-T8DrEoOD6W746BbVPlw35XtUSr1KVIqn3D8tSLzce6RPqKKlhAsU7ECo72i70y1jL_mN6ot4oE59Qt5op9nm9uRyFP2vae95Gb58bnkSZM7TdTB6yzPjzeHB9P3Bx44HknLJ_ofIAZlQ0Ac871AYgaG_zZXArnFQLiEOU7gpqaTBLa8haxKWdfSmY6yCD599frefqm1mxQGv1ih5YBajSrmojKRyHaMWmkW4KZja8IuOvC_1lQG7BoGlum71t1wMn5nMAKQxBGV8mV9PA/p.jpeg?size=178x178&size_mode=1"
            alt=""
          />
        </StyledTitle>
        <div className="videoMetrics">
          <h3>10:00</h3>
          <h3>6.28M</h3>
        </div>
        <h2>VIEW DETAILS</h2>
      </StyledVideoInfo>
    </StyledVideoCard>
  );
};

const StyledVideoCard = styled(motion.div)`
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  max-height: 400px;
  max-width: 400px;
  img {
    width: 100%;
    height: 55%;
    object-fit: cover;
  }
`;

const StyledTitle = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
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

export default VideoCard;
