import styled from 'styled-components';

export const StyledResultsPage = styled.div`
&{
  > .results-wrapper{
    display: flex;
    align-items: center;
    span{
      font-family: var(--font-family-regular);
      font-style: normal;
      font-size: 14px;
      line-height: 24px;
      color: var(--blue-color);
      margin-right: 10px;
      @media (max-width: 1024px){
        margin-right: 5px;
      }
    }
    select{
      outline: none;
      background-color: transparent;
      border: none;
      font-family: var(--font-family-bold);
      font-style: normal;
      font-size: 14px;
      line-height: 24px;
      color: var(--blue-color);
      background: transparent;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNkw4IDEwTDEyIDYiIHN0cm9rZT0iIzEyNjdBMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==");      background-repeat: no-repeat;
      background-position-x: 100%;
      background-position-y: center;
      -webkit-appearance: none;
      -moz-appearance: none;
      padding-right: 40px; 
      @media (max-width: 1024px){
        padding-right: 20px;
      }
    }
  }
}
`;