import styled from 'styled-components';

export const StyledRegister2 = styled.section`
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
      margin-bottom: 24px;
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
    ul{
      li{
        &:not(:first-child){
          display: none;
        }
        > span{
          font-family: var(--font-family-regular);
          font-style: normal;
          font-size: 14px;
          line-height: 20px;
          display: flex;
          margin-bottom: 16px;
          color: var(--darkgray-4-color);
          > button{
            width: 20px;
            height: 20px;
            background-size: contain;
            background-color: transparent;
            border: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin-right: 10px;
            cursor: pointer;
          }
        }
        .questions-block{
          > span{
            display: block;
            font-family: var(--font-family-semibold);
            font-style: normal;

            font-size: 18px;
            line-height: 24px;
            margin-bottom: 16px;
          }
          input, button{
            width: 100%;
          }
          button{
            margin-top: 40px;
            min-height: 54px;
            &[disabled]{
              cursor: default;
            }
          }
        }
      }
    }
  }
`;