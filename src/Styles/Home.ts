import styled from "styled-components";

export const ContainerCad = styled.div`
  width: 100%;
  height: 130vh;
  @media (max-width: 500px) {
  }
`;
export const HomeHeader = styled.header`
  height: 200px;
  position: fixed;
  z-index: 1;
`;

export const HomeLogo = styled.img`
  width: 100px;
  height: 200px;
  background-color: white;
`;
export const HomeSection = styled.section`
  background-color: var(--preto);
  max-width: 100%;
  width: 100vw;
  height: 100vh;
`;

export const HomeImage = styled.img`
  filter: blur(4px);
  object-fit: cover;
  object-position: center;
  height: 100vh;
  max-width: 100%;
  width: 100vw;
  position: absolute;
`;

export const HomeTitle = styled.h1`
  color: var(--bege);
  font-size: 3rem;
  font-weight: 700;
  position: absolute;
  top: 40vh;
  text-align: center;
`;

export const HomeSubtitle = styled.h2`
  color: var(--bege);
  font-size: 1rem;
  font-weight: 400;
  position: absolute;
  top: 47vh;
  text-align: center;
`;

export const SelectWorkoutSection = styled.section`
  background-color: var(--preto);
  color: var(--bege);
  height: 100vh;
  max-width: 100%;
  width: 100vw;
`;

export const SelectWorkoutTitle = styled.h1`
  color: var(--bege);
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  padding-top: 20vh;
`;

export const WorkoutButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  margin-top: 50px;
  text-align: center;
  width: 100%;
`;

export const WorkoutButton = styled.button`
  background-image: linear-gradient(
    to right,
    var(--cinza) 0%,
    var(--verde) 100%
  );
  border-radius: 40px;
  box-sizing: border-box;
  color: #00a84f;
  cursor: pointer;
  display: block;
  height: 50px;
  font-size: 1.4em;
  padding: 4px;
  position: relative;
  text-decoration: none;
  width: 7em;
  z-index: 2;

  &:hover {
    color: #fff;
  }
`;

export const WorkoutButtonSpan = styled.span`
  align-items: center;
  background: #0e0e10;
  color: var(--bege);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;

  &:hover {
    background: transparent;
  }
`;
