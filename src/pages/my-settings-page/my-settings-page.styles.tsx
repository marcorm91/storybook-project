import styled from 'styled-components';

export const StyledMySettingsPage = styled.div`
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
        > div{
          width: 100%;
        }
        > .title-tablet-wrapper{
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          margin-bottom: 16px;
          h2{
            font-family: var(--font-family-semibold);
            font-style: normal;
            font-size: 16px;
            line-height: 24px;
            color: var(--blue-color);
          }
        }
        > h2 + div, .title-tablet-wrapper + div{
          width: 100%;
        }
        > button{
          position: absolute;
          top: 0;
          right: 0;
          @media (max-width: 1024px){
            &:not(.btn-mobile){
              display: none;
            }
          }
        }
        .filter-wrapper{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 40px 0;
          @media (max-width: 767px){
            margin: 25px 0;
            > nav{
              display: none;
            }
            &:last-child{
              div{
                display: none;
              }
              nav{
                display: flex;
                justify-content: center;
                width: 100%;
                margin-bottom: 30px;
              }
            }
          }
        }
        .content-results-wrapper{
          margin-bottom: 80px;
          @media (max-width: 767px){
            margin-bottom: 50px;
          }
          > ul{
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          > span{
            display: block;
            font-family: var(--font-family-regular);
            font-style: normal;
            font-size: 16px;
            line-height: 24px;
            margin: 100px 0;
            text-align: center;
            color: var(--darkgray-4-color);
          }
        }
      }
    }
  }
`;