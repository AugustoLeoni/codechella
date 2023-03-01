import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2.4rem;

  font-size: 2rem;

  @media(min-width: 1440px){
    flex-direction: row;
    justify-content: space-between;
    padding: 6rem 12rem;
  }
  

  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    @media(min-width: 1440px){
    align-items:flex-start
  }
  }

  >div:last-child {
    margin-top: 3.2rem;
    text-align: center;

    > p:first-child {
      margin-right: 0.8rem;

      @media(min-width: 1440px){
        margin-right: 0;
      }
    }

    > p {
      display: inline;
      font-family: ${({ theme }) => theme.FONTS.TEXT};
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
      line-height: 4rem;
  
      text-align: center;
  
      color: ${({ theme }) => theme.COLORS.GRAY};
  
      @media(min-width: 1440px){
        text-align: start;
        margin-top: 0;
      }
    }
  }

`;

export const Nets = styled.div`
  @media(min-width: 768px){
    width: 100%;
    display: flex;
    flex-direction: row;

    gap: 0.8rem;
  }

  > p {
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 4rem;

    color: ${({ theme }) => theme.COLORS.GRAY};
    margin-bottom: 0.8rem;
  }

  > div {
    display: flex;
    justify-content: center;
    gap: 0.8rem;

    @media(min-width: 768px){
      display: inline;

      img {
        margin-right: 0.8rem;
      }
    }
  }
`;