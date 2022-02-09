import styled from 'styled-components';

export const StyledPopup = styled.div`
  &{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .2);
    > .popup-wrapper{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: var(--white-color);
      max-width: 625px;
      max-height: fit-content;
      max-height: 305px;
      margin: auto;
      box-shadow: var(--boxshadow-default);
      padding: 32px;
      border-radius: 4px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 25px;
      @media (max-width: 767px){
        margin: auto 16px;
        padding: 16px;
      }
      > .row-1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        h4{
          margin: 0;
          padding-top: 16px;
          font-family: var(--font-family-semibold);
          font-size: 18px;
          color: var(--blue-color);
          @media (max-width: 767px){
            font-size: 14px;
          }
        }
        button{
          align-self: flex-start;
          background-color: transparent;
          border: none;
          outline: none;
          background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDZMNiAxOCIgc3Ryb2tlPSIjNUE2NDc0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNiA2TDE4IDE4IiBzdHJva2U9IiM1QTY0NzQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=");
          background-position: center;
          background-repeat: no-repeat;
          width: 24px;
          height: 24px;
          cursor: pointer;
          padding: 0;
        }
      }
      > .row-2{
        > div > * {
          width: 100%;
          @media (max-width: 767px){
            font-size: 14px;
          }
        }
      }
      > .row-3{
        display: flex;
        justify-content: flex-end;
        @media (max-width: 767px){
          button{
            width: 100%;
          }
        }
      }
    }
  }
`;