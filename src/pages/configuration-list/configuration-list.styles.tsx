import styled from 'styled-components';

export const StyledConfigurationList = styled.section`
  & > header{
    position: sticky;
    top: 0;
    z-index: 1;
  }
  & > main{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - var(--header-config-height));
    padding: 0 0 90px;
    > .content-wrapper{
      width: 100%;
      max-width: 1220px;
      margin: 0 auto;
      padding: 0 26px;
      box-sizing: border-box;
      @media (max-width: 767px){
        padding: 32px 16px;
      }
      > .results-pag-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px 0;
        @media (max-width: 767px){
          display: none;
        }
      }
      > ul{
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        @media (max-width: 767px){
          gap: 12px;
        }
        li{
          flex: 1 1 calc(25% - 24px);
          max-width: calc(25% - 24px);
          width: calc(25% - 24px);
          @media (max-width: 1024px){
            flex: 1 1 calc(33.333% - 24px);
            max-width: calc(33.333% - 24px);
            width: calc(33.333% - 24px);
          }
          @media (max-width: 767px){
            flex: 1 1 calc(50% - 12px);
            max-width: calc(50% - 12px);
            width: calc(50% - 12px);
            a{
              min-width: 100%;
            }
          }
        }
      }
    }
    > nav{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
  }
`;