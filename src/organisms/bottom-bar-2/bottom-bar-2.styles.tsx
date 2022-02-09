import styled from 'styled-components';

export const StyledBottomBarTwo = styled.nav.attrs((props: { displayMenu: boolean }) => props)`
  &{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--boxshadow-default);
    padding: 16px;
    box-sizing: border-box;
    gap: 20px;
    background-color: var(--white-color);
    .column-1{
      display: flex;
      flex-direction: column;
      @media (max-width: 767px){
        display: none;
      }   
      > span{
        font-family: var(--font-family-regular);
        font-size: 16px;
        color: var(--black-color);
        margin-bottom: 5px;
        &:empty{
          display: none;
        }
      }
      > a{
        font-family: var(--font-family-semibold);
        font-size: 18px;
        color: var(--blue-color);
      }
    }
    .column-2{
      display: flex;
      gap: 25px;
      position: relative;
      align-items: center;
      @media (max-width: 767px){
        flex: 1 1 100%;
        gap: 12px;
        > * {
          flex: 1 1 33.333%;
          max-width: 33.333%;
        }
        button{
          font-size: 12px;
          padding: 8px;
          background-image: none;
          width: 100%;
        }
      }
      > div{
        > ul{
          display: ${(props)=>props.displayMenu ? 'block' : 'none'};
          background-color: var(--white-color);
          margin: 0;
          position: absolute;
          box-shadow: var(--boxshadow-selected);
          padding: 16px;
          list-style: none;
          z-index: 1;
          border-radius: 4px;
          overflow: hidden;
          &.top{
            bottom: calc(100% + 10px);
          }
          &.bottom{
            top: calc(100% + 10px);
          }
          > li{
            &:not(:last-child){
              margin-bottom: 8px;
            }
            > a{
              font-family: var(--font-family-regular);
              color: var(--black-color);
              font-size: 16px;
              text-decoration: none;
              @media (max-width: 767px){
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
`;