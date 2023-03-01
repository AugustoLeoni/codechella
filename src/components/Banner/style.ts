import styled from "styled-components";

type Props = {
  backgroundImage: string
};

export const Container = styled.section.attrs((props: Props) => ({
  backgroundImage: props.backgroundImage
})) <Props>`
    min-height: 27rem;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;

    @media(min-width: 768px){
      min-height: 38.4rem;   
    }

    @media(min-width: 768px){
      min-height: 40.7rem;   
    }

  &::before{
    content: "";
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    opacity: 0.4;
  }

  > h2 {
    
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-style: normal;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 4.2rem;

    text-align: center;

    color: ${({ theme }) => theme.COLORS.GRAY};

    @media(min-width: 768px){
      font-size: 6.4rem;
      line-height: 8.3rem;
    }

    @media(min-width: 768px){
      width: 54.2rem;
    }

  }
`;