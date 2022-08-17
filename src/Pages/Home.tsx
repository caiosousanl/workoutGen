import React from "react";
import { useNavigate } from "react-router-dom";

import image from "../Assets/bg-pic.jpg";

import {
  HomeImage,
  HomeSection,
  HomeTitle,
  HomeSubtitle,
  SelectWorkoutSection,
  SelectWorkoutTitle,
  WorkoutButtonsWrapper,
  WorkoutButton,
  WorkoutButtonSpan,
} from "../Styles/Home";

const Home = () => {
  const navigate = useNavigate();
  const treinos = ["AB", "ABC", "ABCD"];

  const handleClick = (treino: string) => navigate(`treino/${treino}`);

  return (
    <>
      <body>
        <HomeSection>
          <HomeImage src={image} />
          <HomeTitle>WorkoutGen</HomeTitle>
          <HomeSubtitle>Your online personal trainer</HomeSubtitle>
        </HomeSection>
        <SelectWorkoutSection>
          <SelectWorkoutTitle>Escolha um modelo de treino</SelectWorkoutTitle>
          <WorkoutButtonsWrapper>
            {treinos.map((treino) => (
              <WorkoutButton onClick={() => handleClick(treino)}>
                <WorkoutButtonSpan>{treino}</WorkoutButtonSpan>
              </WorkoutButton>
            ))}
          </WorkoutButtonsWrapper>
        </SelectWorkoutSection>
      </body>
    </>
  );
};

export default Home;
