import styled from 'styled-components';

export const StyledResumePage = styled.section`
  & > header{
    position: sticky;
    top: 0;
    z-index: 22;
  }
  & > main{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - var(--header-config-height));
    background-color: var(--blue-6-color);
    @media (max-width: 1024px){
      min-height: calc(100vh - var(--header-config-height) - 50px);
    }
    .contain-wrapper{
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      padding: 50px 24px 120px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 30px;
      flex: 1;
      @media (max-width: 1024px){
        padding: 50px 20px 120px;
      }
      @media (max-width: 767px){
        padding: 30px 16px 120px;
      }
      > div{
        input{
          min-width: 560px;
          padding-right: 20px;
          background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjMzMzMzIDEuMzMzMjVMMTIgMy45OTk5Mkw0LjY2NjY3IDExLjMzMzNIMlY4LjY2NjU5TDkuMzMzMzMgMS4zMzMyNVYxLjMzMzI1WiIgc3Ryb2tlPSIjMTI2N0EyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMiAxNC42NjY3SDE0IiBzdHJva2U9IiMxMjY3QTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=");
          background-position: calc(100% - 10px);
          background-repeat: no-repeat;
          @media (max-width: 767px){
            min-width: 100%;
          }
        }
      }
      > header{
        padding: 0;
        border: none;
      }
      .columns-wrapper{
        display: flex;
        gap: 20px;
        @media (max-width: 1024px){
          flex-direction: column;
        }
        > div[class^='column-'] > div{
          height: 100%;
          @media (max-width: 1024px){
            max-width: 100%;
          }
        }
      }
      .contact-delegate-wrapper{
        display: flex;
        flex-direction: column;
        gap: 10px;
        h4{
          font-family: var(--font-family-regular);
          font-style: normal;
          font-size: 14px;
          line-height: 16px;
          color: var(--black-color);
        }
        a{
          font-family: var(--font-family-bold);
          font-size: 16px;
          color: var(--blue-color);
          text-decoration: underline;
        }
      }
    }
    > nav{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      @media (max-width: 767px){
        .column-2 ul.top{
          left: 0;
          right: 0;
        }
      }
    }
  }
`;