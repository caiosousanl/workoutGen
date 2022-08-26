import styled from "styled-components";

interface TitleSectionProps {
  background: string;
}

export const TreinoSection = styled.section`
  background-color: var(--preto);
  color: var(--bege);
  height: 100vh;
  max-width: 100%;
  width: 100vw;
`;

export const TitleSection = styled.section<TitleSectionProps>`
  h1 {
    color: var(--bege);
    height: 100vh;
    max-width: 100%;
    padding-top: 100px;
    width: 100vw;
  }
  // url(${props => props.background}) no-repeat center center fixed
  background: url(${props => props.background}) no-repeat center center fixed;
  position: relative;
  padding: 15rem 0 0.5rem;
  background-position: 20% 20%;
  background-repeat: no-repeat;
  background-size: cover;

  height: 10vh;
`;

export const WrapperCards = styled.div`
  h1 {
    color: var(--bege);
    height: 100vh;
    max-width: 100%;
    width: 100vw;
  }
`;