import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";

import { Container } from "./styled";

import BannerHome from '../../assets/BannerHome.png'

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner
        title="Boas-vindas ao #CodeChella2023!"
        image={BannerHome}
      />
      <Footer />
    </Container>
  )
}
