import styled from 'styled-components';

export const StyledMyData = styled.div`
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
        align-items: center;
        flex-direction: column;
        position: relative;
        > h2{
          font-family: var(--font-family-bold);
          font-size: 24px;
          line-height: 32px;
          align-self: flex-start;
          color: var(--blue-color);
          margin-bottom: 40px;
          @media (max-width: 1024px){
            margin-bottom: 24px;
          }
        }
        > h2 + div{
          width: 100%;
        }
        .content-tab-wrapper{
          padding-bottom: calc(74px + 36px);
          > div{
            max-width: 500px;
            &:not(:last-child){
              margin-bottom: 24px;
            }
            > input{
              width: 100%;
            }
          }
          > a {
            font-family: var(--font-family-regular);
            font-style: normal;
            font-size: 14px;
            line-height: 20px;
            display: inline-block;
            color: var(--blue-color);
          }
          > ol {
            > li{
              margin-bottom: 54px;
              font-family: var(--font-family-regular);
              font-style: normal;
              color: var(--darkgray-color);
              font-size: 16px;
              line-height: 24px;
              h2, h3{
                font-family: var(--font-family-bold);
                margin-bottom: 32px;
              }
              p{
                font-family: var(--font-family-regular);
                margin-bottom: 20px;
              }
              ol ol{
                list-style-type: lower-roman;
                margin-left: 40px;
                margin-bottom: 40px;
                li{
                  &:not(:last-child){
                    margin-bottom: 16px;
                  }
                }
              }
            }
          }
        }
        > nav{
          margin-left: var(--left-menu-width);
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: var(--white-color);
          @media (max-width: 1024px){
            margin-left: 0;
          }
          @media (max-width: 767px){
            button{
              padding: 10px;
            }
          }
        }
      }
    }
  }
`;