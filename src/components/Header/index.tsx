import { Container, Navigation, Menu } from "./style";
import Logo from '../../assets/Logo.png'
import MenuImage from '../../assets/Menu.svg'
import { useState } from "react";

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState(true)

  function handleMenuState() {
    setDisplayMenu(!displayMenu)
  }

  return (
    <Container>
      <img src={Logo} alt="logo da codechella" />

      <Menu
        onClick={handleMenuState}
      >
        <img src={MenuImage} alt="Imagem do menu" />
      </Menu>
      <Navigation
        invisible={displayMenu}
      >
        <a href="#">A experiência</a>
        <div></div>
        <a href="#">Mapa de setores</a>
        <div></div>
        <a href="#">informações</a>
        <div></div>
        <a href="#">Ingresso</a>
      </Navigation>
    </Container>
  )
}