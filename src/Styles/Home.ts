import styled from 'styled-components'

export const ContainerCad = styled.div`
	width: 100%;
	height: 130vh;
	@media (max-width: 500px) {
	}
`
export const HomeHeader = styled.header`
  height: 200px;
  position: fixed;
  z-index: 1;
`

export const HomeLogo = styled.img`
  width: 100px;
  height: 200px;
`
export const HomeSection = styled.section`
  max-width: 100%;
  width: 100vw;
  height: 100vh;
`

export const HomeImage = styled.img`
  // @media (max-width: 755px) {
  // }
  object-fit: cover;
  object-position:  center;
  height: 100vh;
  max-width: 100%;
  width: 100vw;
`