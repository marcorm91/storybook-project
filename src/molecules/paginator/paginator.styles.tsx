import styled from 'styled-components';

export const StyledPaginator = styled.nav`
  &{
    display: flex;
    justify-content: space-between;
    > ul{
      display: flex;
      gap: 4px;
      @media (max-width: 767px){
        gap: 2px;
      }
      > li{
        &.first-page, &.previous-page, &.next-page, &.last-page{
          a{
            background-position: center;
          }
        }
        &.previous-page, &.next-page{
          a{
            background-size: 7px;
          }
        }
        &.disabled{
          pointer-events: none;
          cursor: default;
          opacity: .2;
        }
        a{
          width: 38px;
          height: 38px;
          display: inline-block;
          font-family: var(--font-family-regular);
          font-style: normal;
          font-size: 14px;
          color: var(--darkgray-color);
          text-decoration: none;
          display: inline-grid;
          justify-content: center;
          align-items: center;
          @media (max-width: 1024px){
            width: 34px;
            height: 34px;
          }
          @media (max-width: 767px){
            width: 30px;
            height: 30px;
          }
        }
        &.active{
          a{
            background-color: var(--blue-color);
            color: var(--white-color);
          }
        }
      }
    }
  }
`;