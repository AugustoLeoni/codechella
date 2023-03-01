import { Container } from "./style";

type Props = {
  title: string;
  image: string
}

export default function Banner({ title, image }: Props) {
  return (
    <Container
      backgroundImage={image}
    >
      <h2>{title}</h2>
    </Container>
  )
}