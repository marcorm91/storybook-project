import styled from 'styled-components';

export const StyledMenuConfiguration = styled.nav`
  &{
    max-width: 500px;
    padding: 16px;
    &.border-nav{
      border-bottom: 1px solid var(--lightgray-color);
    }
    > div{
      display: flex;
      span{
        font-family: var(--font-family-regular);
        font-size: 16px;
        color: var(--black-color);
        line-height: normal;
      }
      a{
        width: 24px;
        height: 24px;
        display: inline-block;
      }
      &.back-navigation{
        gap: 10px;
      }
      &.next-navigation{
        justify-content: space-between;
        > div:first-child{
          padding-right: 16px;
        }
      }
    }
    &.blue-type{
      > div{
        span{
          font-size: 14px;
          font-family: var(--font-family-semibold);
          color: var(--blue-color);
          line-height: 23px;
        }
      }
    }
  }
`;