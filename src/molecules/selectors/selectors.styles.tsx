import styled from 'styled-components';

export const StyledSelectors = styled.a`
  &{
    display: flex;
    flex-direction: column;
    border: 1px solid var(--lightgray-color);
    box-shadow: var(--boxshadow-default);
    max-width: 275px;
    border-radius: 4px;
    overflow: hidden;
    box-sizing: border-box;
    text-decoration: none;
    @media (max-width: 767px){
      max-width: 160px;
    }
    &:hover{
      border: 1px solid var(--lightgray-5-color);
      box-shadow: var(--boxshadow-selected);
    }
    &:focus{
      border: 1px solid var(--blue-color);
      outline: none;
    }
    &.disabled-item{
      opacity: .45;
      cursor: default;
      pointer-events: none;
    }
    > .column-1{
      > div{
        width: 100%;
        height: 220px;
        background-repeat: no-repeat;
        background-position: center;
        @media (max-width: 767px){
          height: 120px;
          background-size: cover;
        }
      }
    }
    > .column-2{
      min-height: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      box-sizing: border-box;
      @media (max-width: 767px){
        min-height: 40px;
      }
      > span{
        font-family: var(--font-family-semibold);
        font-size: 18px;
        color: var(--black-color);
        text-align: center;
        @media (max-width: 767px){
          font-size: 14px;
        }
      }
    }
  }
`;