import React from "react";

import logo from "../Assets/logo.svg";
import image from "../Assets/bg-pic.jpg";

import {
  HomeHeader,
  // HomeHeaderInner,
  HomeLogo,
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

function Home() {
  return (
    <>
      <HomeHeader> 
        <HomeLogo src={logo} />
        Teste
      </HomeHeader>
      <body>
        <HomeSection>
          <HomeImage src={image} />
          <HomeTitle>WorkoutGen</HomeTitle>
          <HomeSubtitle>Your online personal trainer</HomeSubtitle>
        </HomeSection>
        <SelectWorkoutSection>
          <SelectWorkoutTitle>Escolha um modelo de treino</SelectWorkoutTitle>
          <WorkoutButtonsWrapper>
            <WorkoutButton>
              <WorkoutButtonSpan>Treino AB</WorkoutButtonSpan>
            </WorkoutButton>
            <WorkoutButton>
              <WorkoutButtonSpan>Treino ABC</WorkoutButtonSpan>
            </WorkoutButton>
            <WorkoutButton>
              <WorkoutButtonSpan>Treino ABCD</WorkoutButtonSpan>
            </WorkoutButton>
          </WorkoutButtonsWrapper>
        </SelectWorkoutSection>
      </body>
    </>
  );
}

export default Home;
