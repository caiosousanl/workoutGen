import React from 'react'

import logo from "../Assets/logo.svg";
import image from "../Assets/bg-pic.jpg";

import { 
  HomeHeader,
  HomeLogo,
  HomeImage,
  HomeSection 
} from '../Styles/Home'

function Home() {
  return (
    <>
      <HomeHeader>
        <HomeLogo src={logo} alt="logo" />
      </HomeHeader>
      <body>
        <HomeSection>
          <HomeImage src={image} />
            bg aqui com um titulo de gerador de treinos
        </HomeSection>
      </body>
    </>
  )
}

export default Home