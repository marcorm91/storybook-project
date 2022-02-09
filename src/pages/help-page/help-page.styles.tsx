import styled from 'styled-components';

export const StyledHelpPage = styled.div`
  & {
    > main{
      min-height: calc(100vh - var(--header-primary-height));
      box-sizing: border-box;
      background-color: var(--blue-6-color);
      padding: 24px;
      @media (min-width: 1025px){
        display: inline-block;
        width: calc(100% - var(--left-menu-width));
        margin-left: var(--left-menu-width);
        padding: 36px;
      }
      @media (max-width: 767px){
        padding: 16px;
        min-height: calc(100vh - 65px);
      }
      .content-wrapper{
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 500px;
        > h2{
          font-family: var(--font-family-bold);
          font-style: normal;
          font-size: 24px;
          line-height: 32px;
          color: var(--blue-color);
          margin-bottom: 24px;
          @media (max-width: 767px){
            font-size: 18px;
          }
        }
        > form{
          margin-bottom: 50px;
          > div{
            &:not(:last-child){
              margin-bottom: 20px;
            }
            textarea, input{
              width: 100%;
            }
          }
          button{
            margin-top: 20px;
          }
        }
        > div{
          > span{
            display: flex;
            align-items: center;
            gap: 16px;
            font-family: var(--font-family-regular);
            font-style: normal;
            font-size: 16px;
            line-height: 24px;
            color: var(--darkgray-color);
            i{
              width: 20px;
              height: 20px;
              background-size: 100%;
            }
          }
          > h3{
            font-family: var(--font-family-semibold);
            font-style: normal;
            font-size: 18px;
            line-height: 24px;
            color: var(--darkgray-4-color);
            margin: 25px 0 50px;
            @media (max-width: 767px){
               margin: 25px 0;
            }
          }
          > ul{
            li{
              font-family: var(--font-family-regular);
              font-style: normal;
              font-size: 14px;
              line-height: 24px;
              color: var(--lightgray-3-color);
            }
          }
        }
      }
    }
  }
`;