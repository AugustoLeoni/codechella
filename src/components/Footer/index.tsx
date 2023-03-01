import { Container, Nets } from "./style";
import LogoFooter from "../../assets/LogoFooter.png";

import whats from "../../assets/whats.svg";
import twitch from "../../assets/twitch.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

export default function Footer() {
  return (
    <Container>
      <div>
        <img src={LogoFooter} alt="Logo da codechella" />

        <Nets>
          <p>Acesse nossas redes:</p>
          <div>
            <img src={whats} alt="instagram imagem" />
            <img src={twitch} alt="instagram imagem" />
            <img src={instagram} alt="instagram imagem" />
            <img src={twitter} alt="instagram imagem" />
          </div>
        </Nets>
      </div>

      <div>
        <p>
          Desenvolvido por Alura.
        </p>
        <p>
          Projeto ficticio sem afins comerciais.
        </p>

      </div>
    </Container>
  )
}