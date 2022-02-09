import styled from 'styled-components';

export const StyledFilterInputs = styled.div`
  &{
    display: flex;
    gap: 25px;
    @media (max-width: 767px){
      gap: 8px;
    }
    .order-select-wrapper, .filter-select-wrapper{
      flex: 1;
      position: relative;
      max-width: 33.333%;
      @media (max-width: 767px){
        max-width: 100%;
      }
      select{
        font-family: var(--font-family-regular);
        font-style: normal;
        font-size: 14px;
        line-height: 20px;
        color: var(--darkgray-4-color);
        border-radius: 4px;
        border: 1px solid var(--lightgray-color);
        padding: 8px 10px 8px 40px;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNkw4IDEwTDEyIDYiIHN0cm9rZT0iIzEyNjdBMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==");      background-repeat: no-repeat;
        background-position-x: calc(100% - 10px);
        background-position-y: center;
        width: 100%;
        background-color: var(--white-color);
        @media (max-width: 767px){
          padding: 8px 10px 8px 30px;
        }
      }
      &:before{
        content: "";
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMzMzOTggNEgxNC4wMDA3IiBzdHJva2U9IiMxMjY3QTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01LjMzMzk4IDhIMTQuMDAwNyIgc3Ryb2tlPSIjMTI2N0EyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNS4zMzM5OCAxMkgxNC4wMDA3IiBzdHJva2U9IiMxMjY3QTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yLjY2NjAyIDRIMS45OTkzNSIgc3Ryb2tlPSIjMTI2N0EyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMi42NjYwMiA4SDEuOTk5MzUiIHN0cm9rZT0iIzEyNjdBMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIuNjY2MDIgMTJIMS45OTkzNSIgc3Ryb2tlPSIjMTI2N0EyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K");
        width: 16px;
        height: 16px;
        position: absolute;
        left: 10px;
        top: 11px;
      }
    }
    .filter-select-wrapper{
      &:before{
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC42NjczIDJIMS4zMzM5OEw2LjY2NzMyIDguMzA2NjdWMTIuNjY2N0w5LjMzMzk4IDE0VjguMzA2NjdMMTQuNjY3MyAyWiIgc3Ryb2tlPSIjMTI2N0EyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K");
      }
    }
    .search-input-wrapper{
      flex: 1;
      position: relative;
      max-width: 33.333%;
      input{
        font-family: var(--font-family-regular);
        font-style: normal;
        font-size: 14px;
        line-height: 20px;
        color: var(--darkgray-4-color);
        border-radius: 4px;
        border: 1px solid var(--lightgray-color);
        padding: 8px 10px 8px 40px;
        width: 100%;
        box-sizing: border-box;
      }
      &:before{
        content: "";
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDEyQzkuNzYxNDIgMTIgMTIgOS43NjE0MiAxMiA3QzEyIDQuMjM4NTggOS43NjE0MiAyIDcgMkM0LjIzODU4IDIgMiA0LjIzODU4IDIgN0MyIDkuNzYxNDIgNC4yMzg1OCAxMiA3IDEyWiIgc3Ryb2tlPSIjMTI2N0EyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuOTk5OSAxMy45OTk5TDEwLjUzMzIgMTAuNTMzMiIgc3Ryb2tlPSIjMTI2N0EyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K");        
        width: 16px;
        height: 16px;
        position: absolute;
        left: 10px;
        top: 11px;
      }
      @media (max-width: 767px){
        display: none;
      }
    }
    .search-input-mobile-wrapper{
      button{
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDEyQzkuNzYxNDIgMTIgMTIgOS43NjE0MiAxMiA3QzEyIDQuMjM4NTggOS43NjE0MiAyIDcgMkM0LjIzODU4IDIgMiA0LjIzODU4IDIgN0MyIDkuNzYxNDIgNC4yMzg1OCAxMiA3IDEyWiIgc3Ryb2tlPSIjMTI2N0EyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuOTk5OSAxMy45OTk5TDEwLjUzMzIgMTAuNTMzMiIgc3Ryb2tlPSIjMTI2N0EyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K");
        padding: 0;
        height: 38px;
        width: 38px;
        background-color: var(--white-color);
        border: 1px solid var(--lightgray-color);
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`;