import styled from 'styled-components';

export const StyledLogIn = styled.section`
  & > main{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: row;
    min-height: calc(100vh - var(--header-primary-height));
    margin: auto;
    @media (max-width: 767px){
      padding: 24px;
    }
    .column-1{
      flex: 1 1 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @media (max-width: 1024px){
        flex: 1 1 100%;
      }
      h1{
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
      > form{
        max-width: 500px;
        width: 100%;
        > div{
          &:not(.btns-wrapper){
            margin-bottom: 24px;
          }
          input, button{
            width: 100%;
          }
          .separator{
            cursor: default;
            margin: 35px 0;
            display: flex;
            align-items: center;
            color: var(--black-color);
            font-family: var(--font-family-regular);
            font-style: normal;
            font-size: 18px;
            line-height: 1px;
            &:after{
              content: "";
              height: 1px;
              width: 100%;
              background-color: var(--lightgray-5-color);
              margin: 0 40px 0 15px;
            }
            &:before{
              content: "";
              height: 1px;
              width: 100%;
              background-color: var(--lightgray-5-color);
              margin: 0 15px 0 50px;
            }
          }
          > button:last-child:not(.left-icon){
            margin-top: 24px;
          }
          @media (max-width: 1024px){
            > button.left-icon{
              padding-left: calc(8px * 2);
            }
          }
        }
        > a{
          font-family: var(--font-family-regular);
          font-style: normal;
          font-size: 14px;
          line-height: 20px;
          display: inline-block;
          margin: 8px 0 32px;
          color: var(--blue-color);
          text-decoration: none;
        }
      }
    }
    .column-2{
      flex: 1 1 50%;
      @media (max-width: 1024px){
        display: none;
      }
      > div{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
`;