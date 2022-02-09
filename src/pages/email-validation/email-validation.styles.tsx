import styled from 'styled-components';

export const StyledEmailValidation = styled.section`
  & > main{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: calc(100vh - var(--header-primary-height));
    max-width: 500px;
    margin: auto;
    @media (max-width: 767px){
      padding: 24px;
    }
    > h1{
      font-family: var(--font-family-bold);
      font-size: 32px;
      color: var(--blue-color);
      text-align: center;
      margin-bottom: 40px;
      line-height: 40px;
      @media (max-width: 767px){
        font-size: 24px;
      }
    }
    > p{
      font-family: var(--font-family-regular);
      font-style: normal;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 32px;
    } 
    .block-not-received-email{
      > h2{
        font-family: var(--font-family-semibold);
        font-style: normal;
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 16px;
      }
      > p{
        font-family: var(--font-family-regular);
        font-style: normal;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 12px;
        color: var(--darkgray-4-color);
      }
      > ul{
        li{
          display: flex;
          align-items: center;
          font-family: var(--font-family-regular);
          font-style: normal;
          font-size: 14px;
          line-height: 20px;
          color: var(--darkgray-4-color);
          margin-left: 10px;
          &:before{
            content: "●";
            display: inline-block;
            margin-right: 10px;
            color: var(--darkgray-4-color);
            font-size: 10px;
            align-self: flex-start;
          }
          &:not(:last-child){
            margin-bottom: 12px;
          }
        }
      }
      > a{
        font-family: var(--font-family-regular);
        font-style: normal;
        font-size: 14px;
        line-height: 20px;
        margin-top: 24px;
        text-decoration: underline;
        color: #000;
        display: inline-block;
      }
    }   
  }
`;