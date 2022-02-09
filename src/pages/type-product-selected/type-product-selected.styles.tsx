import styled from 'styled-components';

export const StyledTypeProductSelected = styled.section`
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
    margin: auto;
    max-width: 1220px;
    padding: 48px 24px 160px;
    @media (max-width: 1024px){
      max-width: 592px;
      padding: 48px 0 160px 0;
    }
    @media (max-width: 767px){
      max-width: 340px;
      padding: 24px 0 160px 0;
    }
    > div{
      > h2{
        font-family: var(--font-family-semibold);
        font-style: normal;
        font-size: 18px;
        line-height: 24px;
        color: var(--blue-color);
        margin-bottom: 32px;
        @media (max-width: 767px){
          font-size: 16px;
        }
      }
      > ul{
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        @media (max-width: 767px){
          gap: 25px;
        }
        > li{
          flex: 1 1 calc(25% - 40px);
          max-width: calc(25% - 40px);
          @media (max-width: 1024px){
            flex: 1 1 calc(50% - 40px);
            max-width: calc(50% - 40px);
          }
          @media (max-width: 767px){
            flex: 1 1 calc(50% - 25px);
            max-width: calc(50% - 25px);
          }
          > a{
            box-shadow: none;
            &.disabled-item{
              filter: grayscale(1);
              pointer-events: auto;
              cursor: pointer;
            }
            &:not(.disabled-item){
              border: 1px solid var(--blue-color);
            }
            @media (max-width: 767px){
              .column-1 > div{
                background-size: 90px;
              }
            }
          }
        }
      }
      &:not(:last-child){
        margin-bottom: 50px;
      }
    }
  }
  & > nav{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;