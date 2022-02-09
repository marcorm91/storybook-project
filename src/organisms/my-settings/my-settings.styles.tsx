import styled from 'styled-components';

export const StyledMySettings = styled.div.attrs((props: { displayBox: boolean, displayBox2: boolean }) => props)`
  &{
      display: flex;
      align-items: center;
      box-shadow: var(--boxshadow-default);
      padding: 20px;
      border-radius: 4px;
      gap: 40px;
      position: relative;
      min-height: 160px;
      box-sizing: border-box;
      background-color: var(--white-color);
      @media (max-width: 1024px){
        padding: 16px;
      }
      @media (max-width: 1024px){
        padding: 12px;
        gap: 20px;
      }
      > .column-1{
        > div{
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          width: 135px;
          height: 90px;
          @media (max-width: 1024px){
            width: 105px;
            height: 80px;
          }
        }
      }
      > .column-2{
        max-width: 600px;
        align-self: flex-start;
        @media (max-width: 1024px){
          max-width: 315px;
        }
        time{
          font-size: 12px;
          color: var(--lightgray-3-color);
          font-family: var(--font-family-regular);
          @media (max-width: 1024px){
            font-size: 11px;
          }
        }
        h3{
          margin: 10px 0 5px 0;
          font-family: var(--font-family-regular);
          color: var(--black-color);
          font-size: 20px;
          @media (max-width: 1024px){
            font-size: 14px;
          }
          @media (max-width: 767px){
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
            margin: 5px 0 10px 0;
          }
        }
        p{
          margin: 0 0 20px 0;
          font-family: var(--font-family-regular);
          color: var(--black-color);
          line-height: 20px;
          font-size: 14px;
          @media (max-width: 1024px){
            font-size: 12px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;  
            overflow: hidden;
          }
          @media (max-width: 767px){
            display: none;
          }
        }
        .price-wrapper{
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          > span{
            font-family: var(--font-family-regular);
            &:first-child{
              color: var(--lightgray-3-color);
              font-size: 12px;
              @media (max-width: 1024px){
                font-size: 11px;
              }
            }
            &:last-child{
              color: var(--black-color);
              font-size: 20px;
              font-family: var(--font-family-bold);
              line-height: 1;
              @media (max-width: 1024px){
                font-size: 12px;
              }
            }
          }
        }
      }
      > .abs-1-wrapper{
          display: flex;
          position: absolute;
          right: 20px;
          top: 20px;
          gap: 15px;
          > div{
            position: relative;
            transition: all .1s linear;
            opacity: 0;
            button{
              cursor: pointer;
              width: 20px;
              height: 20px;
              background-color: transparent;
              background-size: 100%;
              padding: 0;
              border: none;
              & + span{
                display: none;
                position: absolute;
                bottom: -30px;
                left: calc(-100% - 10px);
                background-color: var(--black-2-color);
                color: var(--white-color);
                font-family: var(--font-family-regular);
                font-size: 12px;
                padding: 5px 8px;
                border-radius: 6px;
                &:after{
                  content: '';
                  position: absolute;
                  right: 17px;
                  top: -5px;
                  width: 0;
                  height: 0;
                  border-left: 5px solid transparent;
                  border-right: 5px solid transparent;
                  border-top: 5px solid var(--black-2-color);
                  clear: both;
                  transform: rotate(180deg);
                }
              }
              &:hover + span{
                display: block;
              }
            }
            &.icon-marked{
              opacity: 1;
            }
          }
          &-mobile{
            position: absolute;
            display: flex;
            align-items: flex-end;
            top: 20px;
            right: 20px;
            @media (max-width: 767px){
              right: 16px;
              top: 16px;
            }
            button{
              padding: 0;
              background-color: transparent;
              background-position: right;
              border: none;
              width: 20px;
              height: 20px;
              display: flex;
              cursor: pointer;
            }
            ul{
              display: ${(props)=>props.displayBox2 ? 'block' : 'none'};
              background-color: var(--white-color);
              margin: 0;
              position: absolute;
              box-shadow: var(--boxshadow-selected);
              padding: 16px;
              list-style: none;
              top: calc(100% + 10px);
              right: calc(100% - 20px);
              z-index: 1;
              border-radius: 4px;
              overflow: hidden;
              > li{
                font-family: var(--font-family-regular);
                color: var(--black-color);
                font-size: 14px;
                &:not(:last-child){
                  margin-bottom: 8px;
                }
              }
            }
          }
      }
      > .abs-2-wrapper{
          position: absolute;
          bottom: 20px;
          right: 20px;
          transition: all .1s linear;
          opacity: 0;
          display: flex;
          gap: 20px;
          @media (max-width: 1024px){
            opacity: 1;
          }
          @media (max-width: 767px){
            bottom: 16px;
            right: 16px;
          }
          > button{
            @media (max-width: 767px){
              padding: 6px 12px 6px calc(16px * 2);
            }
          }
          > div{
            position: relative;
            display: flex;
            > ul{
              display: ${(props)=>props.displayBox ? 'block' : 'none'};
              margin-bottom: 20px;
              z-index: 1;
              width: 375px;
              background-color: var(--white-color);
              padding: 16px;
              position: absolute;
              list-style: none;
              margin: 0;
              top: 45px;
              right: 0;
              border-radius: 4px;
              overflow: hidden;
              box-shadow: var(--boxshadow-selected);
              @media (max-width: 1024px){
                max-width: 265px;
              }
              @media (max-width: 767px){
                top: 40px;
              }
              > li{
                &:not(:last-child){
                  margin-bottom: 8px;
                }
                a{
                  font-family: var(--font-family-regular);
                  font-size: 16px;
                  color: var(--black-color);
                  text-decoration: none;
                  @media (max-width: 1024px){
                    font-size: 14px;
                  }
                }
              }
            }
          }
      }
      &:hover{
        box-shadow: var(--boxshadow-selected);
        > .abs-1-wrapper{
          > div{
            opacity: 1;
          }
        }
        > .abs-2-wrapper{
          opacity: 1;
        }
      }
  }
`;