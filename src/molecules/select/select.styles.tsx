import styled from 'styled-components';

export const StyledSelect = styled.div`
  &{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 280px;
    > label{
      font-family: var(--font-family-regular);
      font-size: 16px;
      color: var(--darkgray-4-color);
      margin-bottom: 8px;
      &[data-visible-label='false']{
        display: none;
      }
      @media (max-width: 767px){
        font-size: 14px;
      }
    }
    > select{
      min-height: 40px;
      border-radius: 4px;
      border: 1px solid var(--lightgray-color);
      font-family: var(--font-family-regular);
      font-style: normal;
      font-size: 14px;
      line-height: 20px;
      color: var(--darkgray-color);
      background: transparent;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNkw4IDEwTDEyIDYiIHN0cm9rZT0iIzEyNjdBMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==");      background-repeat: no-repeat;
      background-position-x: calc(100% - 10px);
      background-position-y: center;
      background-color: var(--white-color);
      padding: 8px 10px;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 100%;
      outline: none;
      &.disabled-select{
        opacity: .8;
        pointer-events: none;
        background-color: var(--lightgray-color);
      }
    }
  }
`;