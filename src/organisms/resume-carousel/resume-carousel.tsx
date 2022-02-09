import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import ButtonIcon from '../../molecules/button-icon/button-icon';
import { Carousel }  from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '../../atoms/button/button';
import MobileBreakpoint from '../../utils/responsive-utilities/mobile_breakpoint';
import { Icon } from '../../utils/enums/Icons';
import { StyledResumeCarousel } from './resume-carousel.styles';

export interface ResumeCarouselProps{
  title?: string;
  carousel: {
    srcImage: string;
  }[]
  configurationOptions?: boolean;
}

export const ResumeCarousel = ({ title, carousel, configurationOptions = false }: ResumeCarouselProps) => {
  return (
    <StyledResumeCarousel>
      <div className="column-1">
        <h5>{title}</h5>
        <ButtonIcon icon={Icon['B_download_blue-icon']} position="right-icon" size="mobile" text="Lorem ipsum" type="btn-sextarian" />
      </div>
      <div className="column-2">
        <Carousel showIndicators={false} showStatus={false}>
          {carousel.map((item, index) =>
            <div key={index}><img src={item.srcImage}/></div>
          )}
        </Carousel>
      </div>
      <MobileBreakpoint>
        {configurationOptions 
          ? <Button text='Opciones de configuración' size='medium'></Button>
          : null }
      </MobileBreakpoint>      
    </StyledResumeCarousel>
  )
}

export default ResumeCarousel;
