import styled from 'styled-components';

export const StyledRegister = styled.section.attrs((props: { itemsHelp: number, renderChild: Function }) => props)`
  & > main{
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 50px;
    min-height: calc(100vh - var(--header-primary-height));
    max-width: 1366px;
    margin: auto;
    @media (max-width: 1024px){
      flex-direction: column;
      min-height: auto;
      padding: 32px;
    }
    @media (max-width: 767px){
      padding: 24px;
    }
    .column-1{
      max-width: 500px;
      margin: auto;
      flex: 1;
      @media (max-width: 1024px){
        max-width: 640px;
      }
      h1{
        font-family: var(--font-family-bold);
        font-size: 38px;
        line-height: 48px;
        color: var(--blue-color);
        margin: 0 0 36px 0;
        @media (max-width: 767px){
          font-size: 24px;
          line-height: 32px;
        }
      }
      > form{
        & > div{
          margin-bottom: 16px;
          input{
            width: 100%;
            @media (max-width: 1024px){
              max-width: 500px;
            }
          }
          @media (max-width: 767px){
            label, input{
              font-size: 14px;
            }
          }
        }
        & > label{
          margin: 32px 0;
          input{
            margin-left: 0;
          }
          a{
            color: var(--blue-color);
            text-decoration: none;
            line-height: normal;
          }
        }
        & > button{
          width: 100%;
          @media (max-width: 1024px){
            max-width: 500px;
          }
        }
      }
    }
    .column-2{
      max-width: 650px;
      margin: auto;
      flex: 1;
      > div{
        position: relative;
        @media (max-width: 1024px){
          display: flex;
          flex-direction: column-reverse;
          gap: 50px;
        }
        > .image-bg{
          width: 100%;
          height: 410px;
          background-position: center;
          background-size: cover;
          @media (max-width: 767px){
            height: 185px;
          }
        }
        > .options-list-wrapper{
            max-width: 500px;
            position: absolute;
            top: 50%;
            left: -40px;
            padding: 16px;
            box-shadow: var(--boxshadow-default);
            background-color: var(--white-color);
            @media (max-width: 1024px){
              position: static;
              max-width: 640px;
              padding: 0;
              box-shadow: none;
            }
            h4{
              font-family: var(--font-family-semibold);
              font-size: 18px;
              line-height: 24px;
              margin: 0 0 16px 0;
              @media (max-width: 767px){
                font-size: 16px;
              }
            }
            ul{
              font-family: var(--font-family-regular);
              font-size: 16px;
              line-height: 24px;
              @media (max-width: 767px){
                font-size: 14px;
              }
              li{
                display: flex;
                opacity: 0;
                -webkit-animation: fadeIn 0.9s 1;
                animation: fadeIn 0.9s 1;
                -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
                span{
                  flex: 1;
                }
                &:before{
                  content: "";
                  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNyAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgNi41TDcgMTFMMTUgMiIgc3Ryb2tlPSIjMTI2N0EyIiBzdHJva2Utd2lkdGg9IjQiLz4KPC9zdmc+Cg==");
                  display: inline-block;
                  width: 12px;
                  height: 12px;
                  background-size: 100%;
                  background-position: center;
                  background-repeat: no-repeat;
                  margin-top: 7px;
                  margin-right: 10px;
                }
                &:not(:last-child){
                  margin-bottom: 12px;
                }
                ${(props) => props.renderChild(props.itemsHelp)}
              }
            }
        }
      }
    }
  }
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0.0;
    }
    100% {
      opacity: 1.0;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0.0;
    }
    100% {
      opacity: 1.0;
    }
  }
`;