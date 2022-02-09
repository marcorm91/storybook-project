import styled from 'styled-components';

export const StyledResumeCarousel = styled.div`
  &{
    padding: 16px 24px;
    box-shadow: var(--boxshadow-default);
    border-radius: 8px;
    max-width: 630px;
    box-sizing: border-box;
    background-color: var(--white-color);
    @media (max-width: 767px){
      max-width: 345px;
      padding: 16px;
    }
    .column-1{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
      h5{
        font-family: var(--font-family-semibold);
        font-size: 16px;
        color: var(--blue-color);
        margin: 0;
        @media (max-width: 767px){
          font-size: 14px;
        }
      }
      button{
        @media (max-width: 767px){
          font-size: 12px;
        }
      }
    }
    .column-2{
      .carousel-root{
        .carousel{
          > .control-arrow{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            margin: auto;
            border-radius: 50%;
            background-color: var(--lightgray-2-color);
            border: 1px solid var(--lightgray-color);
            opacity: 1;
            @media (max-width: 767px){
              width: 32px;
              height: 32px;
            }
            &:before{
              display: none;
            }
            &.control-prev{
              left: 30px;
              @media (max-width: 767px){
                left: 0;
              }
              &:after{
                content: "";
                background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxMiAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjU2NCAxNy43MTc4TDIuMzU4ODQgOS4wODA4TDEwLjU2NCAxLjMwNzUyIiBzdHJva2U9IiMxMjY3QTIiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K");
                background-position: center;
                background-repeat: no-repeat;
                width: 11px;
                height: 18px;
                display: block;
                margin-right: 3px;
              }
            }
            &.control-next{
              right: 30px;
              @media (max-width: 767px){
                right: 0;
              }
              &:after{
                content: "";
                background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxMiAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNDM1NzkgMS4yODIxTDkuNjQwOTIgOS45MTkwOEwxLjQzNTc5IDE3LjY5MjQiIHN0cm9rZT0iIzEyNjdBMiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=");                background-position: center;
                background-repeat: no-repeat;
                width: 11px;
                height: 18px;
                display: block;
                margin-left: 3px;
              }
            }
            &:not(.control-disabled){
              background-color: var(--blue-7-color);
              border: 1px solid var(--blue-7-color);
              &.control-prev:after{
                background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxMiAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjU2NDIgMTcuNzE3OUwyLjM1OTA4IDkuMDgwOTJMMTAuNTY0MiAxLjMwNzY0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg==");
              }
              &.control-next:after{
                background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxMiAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNDM1NzkgMS4yODIxTDkuNjQwOTIgOS45MTkwOEwxLjQzNTc5IDE3LjY5MjQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K");
              }
            }
          }
          .slide{
            > div{
              max-width: 340px;
              margin: auto;
              @media (max-width: 767px){
                max-width: 200px;
              }
            }
          }
        }
        .thumbs-wrapper{
          margin-bottom: 0;
          .thumbs{
            padding: 0;
            text-align: center;
            .thumb{
              border: 2px solid var(--white-color);
              border-radius: 4px;
              cursor: pointer;
              padding: 4px;
              &.selected{
                border: 2px solid var(--blue-color);
                cursor: default;
                &:hover{
                  border: 2px solid var(--blue-color);
                }
              }
              &:hover{
                border: 2px solid var(--white-color);
              }
              &:last-child{
                margin-right: 0;
              }
            }
          }
        }
      }
    }
    > button{
      width: 100%;
      margin-top: 75px;
    }
  }
`;