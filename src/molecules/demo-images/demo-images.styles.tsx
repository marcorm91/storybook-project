import styled from 'styled-components';

export const StyledDemoImages = styled.div`
  &{
    > div{
      width: 320px;
      height: 220px;
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
      @media (max-width: 767px){
        width: 160px;
        height: 120px;
      }
      &.image-selected{
        filter: grayscale(1);
      }
    }
  }
`;