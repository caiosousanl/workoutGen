import React from "react";
import { useParams } from "react-router-dom";

import treino from "../Assets/treinoAB.json";

import greenGym from "../Assets/green-gym.jpg";

import {
  TreinoSection,
  TitleSection,
  WrapperCards
} from '../Styles/Treino';
import { stringify } from "querystring";

function Treino() {
  type TreinoParams = {
    treinoId: string;
  }
  
  const { treinoId = '' } = useParams<TreinoParams>();

  const bgTreino = {
    'AB': greenGym,
    'ABC': 'URL2',
    'ABCD': 'URL3',
  }

  return (
    <>
      <body>
        <TreinoSection>
          <TitleSection background={(bgTreino as any)[treinoId]} >
            <h1>Treino {treinoId}</h1>
          </TitleSection>
          <WrapperCards>
          </WrapperCards>
        </TreinoSection>
      </body>
    </>
  );
}

export default Treino;
