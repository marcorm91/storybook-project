import styled from 'styled-components';

export const StyledPredefinedSettings = styled.a`
  &{
    text-decoration: none;
    padding: 20px;
    box-shadow: var(--boxshadow-default);
    display: inline-flex;
    flex-direction: column;
    border-radius: 4px;
    max-width: fit-content;
    min-height: 380px;
    box-sizing: border-box;
    overflow: hidden;
    @media (max-width: 767px){
      padding: 8px;
      min-height: 230px;
    }
    &:hover{
      box-shadow: var(--boxshadow-selected);
      @media (max-width: 767px){
        box-shadow: none;
      }
    }
    &:focus{
      outline: 1px solid var(--blue-color);
      box-shadow: var(--boxshadow-selected);
    }
    .column-1{
      display: flex;
      justify-content: flex-end;
      height: 24px;
      > div{
        font-size: 12px;
        @media (max-width: 767px){
          font-size: 11px;
        }
      }
      @media (max-width: 767px){
        height: 21px;
      }
    }
    .column-2{
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      > div{
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
        width: 130px;
        height: 130px;
        @media (max-width: 767px){
          width: 80px;
          height: 80px;
        }
      }
    }
    .column-3{
      > p{
        max-width: 240px;
        text-align: center;
        font-family: var(--font-family-regular);
        font-size: 14px;
        color: var(--black-color);
        line-height: 20px;
        margin-bottom: 12px;
        @media (max-width: 767px){
          font-size: 12px;
          line-height: 16px;
          max-width: 150px;
        }
      }
      > span{
        display: block;
        text-align: center;
        font-family: var(--font-family-bold);
        color: var(--blue-color);
        font-size: 20px;
        @media (max-width: 767px){
          font-size: 16px;
        }
      }
    }
  }
`;