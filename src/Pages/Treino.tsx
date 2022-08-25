import React from "react";
import { useParams } from "react-router-dom";

import treino from "../Assets/treinoAB.json";

import {TreinoSection} from '../Styles/Treino';

function Treino() {
  const { treinoId } = useParams();

  return (
    <>
      <body>
        <TreinoSection>
          {treinoId}
        </TreinoSection>
      </body>
    </>
  );
}

export default Treino;
