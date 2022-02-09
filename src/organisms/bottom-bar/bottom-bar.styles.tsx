import styled from 'styled-components';

export const StyledBottomBar = styled.nav`
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
      @media (max-width: 767px){
        display: none;
      }
      h3{
        font-family: var(--font-family-bold);
        font-size: 20px;
        color: var(--blue-color);
        margin: 0 0 5px 0;
      }
      ul{
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        @media (max-width: 1024px){
          gap: 5px;
        }
        > li{
          font-family: var(--font-family-regular);
          font-size: 16px;
          color: var(--black-color);
          display: flex;
          align-items: center;
          &:not(:last-child):after{
            content: "";
            display: inline-block;
            width: 1px;
            height: 15px;
            background-color: var(--black-color);
            margin-left: 10px;
          }
        }
      }
    }
    .column-2{
      display: flex;
      gap: 25px;
      @media (max-width: 767px){
        flex: 1 1 100%;
        > button{
          flex: 1 1 100%;
        }
      }
    }
  }
`;