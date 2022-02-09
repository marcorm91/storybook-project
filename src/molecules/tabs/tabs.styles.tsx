import styled from 'styled-components';

export const StyledTabs = styled.div`
  &{
    > ul{
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      margin-bottom: 50px;
      @media (max-width: 767px){
        margin-bottom: 25px;
      }
      > li{
        padding: 12px 32px;
        border-bottom: 1px solid var(--darkgray-3-color);
        font-family: var(--font-family-regular);
        font-size: 16px;
        color: var(--lightgray-3-color);
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        text-align: center;
        @media (max-width: 767px){
          padding: 12px;
          font-size: 14px;
        }
        &.active{
          color: var(--blue-color);
          font-family: var(--font-family-bold);
          cursor: default;
          &:before{
            content: "";
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 3px;
            background-color: var(--blue-3-color);
          }
        }
      }
    }
    > div{
      font-family: var(--font-family-regular);
      font-size: 14px;
    }
  }
`;