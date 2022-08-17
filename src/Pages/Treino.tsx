import React from "react";
import { useParams } from "react-router-dom";

import treino from "../Assets/treinoAB.json";

function Treino() {
  const { treinoId } = useParams();

  // console.log("treino", Object.entries(treino["treinos"]["treino-AB"])[0]);
  console.log(treino);

  return (
    <>
      <div></div>
      <div>{treinoId}</div>
      <div>{treinoId}</div>
    </>
  );
}

export default Treino;
