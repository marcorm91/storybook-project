import styled from 'styled-components';

export const StyledMenu = styled.nav`
  &{
    max-width: var(--left-menu-width);
    min-width: var(--left-menu-width);
    padding: 24px 20px;
    background-color: var(--blue-color);
    height: calc(100vh - var(--header-primary-height));
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    box-sizing: border-box;
    z-index: 2;
    > div{
      &:first-child{
        ul{
          margin: 0;
          padding: 0;
          > li a{
            min-width: 100%;
            max-width: 100%;
            width: 100%;
            box-sizing: border-box;
          }
        }
      }
      &:last-child{
        display: flex;
        flex-direction: column;
        gap: 4px;
        > span{
          font-family: var(--font-family-regular);
          color: var(--white-op64-color);
          font-size: 12px;
        }
      }
    }
  }
`;