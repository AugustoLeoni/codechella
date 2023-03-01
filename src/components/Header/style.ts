import styled from "styled-components";

type Props = {
  invisible: boolean
};

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_BLUE} ;
  padding: 3.2rem 2.4rem;

  @media(min-width: 768px){
    flex-direction: column;
  }

  @media(min-width: 1440px){
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Navigation = styled.nav.attrs((props: Props) => ({
  invisible: props.invisible
})) <Props>`
  display: ${({ invisible }) => invisible ? 'none' : 'flex'};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};

  position: absolute;
  top: 12.6rem;
  right: 0;
  padding: 1.6rem;

  @media(min-width: 768px){
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    width: 100%;
    
    position: initial
  }

  @media(min-width: 1440px){
    justify-content: center;
    gap: 3.2rem;

    width: auto
  }

  > a {
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 4rem;
  }

  > div {
    display: ${({ invisible }) => invisible ? 'none' : 'inline'};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    margin: 0.8rem 0;
  }
`;

export const Menu = styled.button`
    background: transparent;
    border: 0;

  @media(min-width: 768px){
    display: none;
  }

  > img {
    width: 24px;
    height: 32px;
  }
`;