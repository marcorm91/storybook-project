import styled from 'styled-components';

export const StyledHeaderConfiguration = styled.header`
  &{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--blue-color);
    padding: 12px 24px;
    @media (max-width: 1024px){
      padding: 20px;
      align-items: flex-start;
    }
    > .first-column{
      button{
        @media (max-width: 1024px){
          font-size: 14px;
        }
        @media (max-width: 767px){
          padding-top: 16px;
        }
      }
    }
    > .second-column{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 25px;
      a{
        font-family: var(--font-family-regular);
        color: var(--white-color);
        font-size: 16px;
        @media (max-width: 1024px){
          font-size: 14px;
        }
        @media (max-width: 767px){
          font-size: 12px;
          margin-top: 15px;
        }
      }
      span{
        font-family: var(--font-family-semibold);
        font-size: 18px;
        color: var(--white-color);
        text-align: center;
        @media (max-width: 1024px){
          font-size: 16px;
          font-family: var(--font-family-regular);
        }
        @media (max-width: 767px){
          font-size: 14px;
        }
      }
    }
    > .third-column{
      display: flex;
      align-items: center;
      gap: 25px;
      a{
        font-family: var(--font-family-regular);
        color: var(--white-color);
        font-size: 16px;
      }
    }
  }
`;