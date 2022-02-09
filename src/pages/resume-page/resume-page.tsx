import HeaderConfiguration  from '../../organisms/header-configuration/header-configuration';
import ResumeCarousel from '../../organisms/resume-carousel/resume-carousel';
import ResumeReferences from '../../organisms/resume-references/resume-references';
import '../../assets/global/_variables.css';
import '../../assets/global/_reset.css';
import { StyledResumePage } from './resume-page.styles';
import BottomBarTwo from '../../organisms/bottom-bar-2/bottom-bar-2';
import { Icon } from '../../utils/enums/Icons';
import Field from '../../atoms/field/field';
import HeaderSecondary from '../../organisms/header-secondary/header-secondary';
import MobileBreakpoint from '../../utils/responsive-utilities/mobile_breakpoint';

export interface IHeaderProps {
  backText: string;
  titleTextSmall: string;
  titleTextBig: string;
  textNextButton: string;
  disabledNextButton: boolean;
}

export interface IHeaderSecondaryProps {
  description: string;
  title: string;
  price: string;
  priceType: string;
  priceIncludesText: string;
  fullDescriptionText: string;
}

export interface IBottomBarTwoProps{
  title: string;
  textHref: string;
  href: string;
  buttons: {
    icon: Icon;
    type: string;
    disabled: boolean;
    size: string;
    positionIcon: string;
    name: string;
    optionsPosition: string;
    options: {
      href: string,
      textHref: string,
    }[]
  }[]
}

export interface ResumePageProps {
  header: IHeaderProps;
  headerSecondary: IHeaderSecondaryProps;
  bottomBarTwo: IBottomBarTwoProps;
  imagesCarousel: any[];
  references: any;
}

export function ResumePage({ header, headerSecondary, bottomBarTwo, imagesCarousel, references }: ResumePageProps) {
  return (
    <StyledResumePage>
      <HeaderConfiguration {...header} />
      <main>
        <div className="contain-wrapper">
          <Field visibleLabel={false} label='' placeholder='Lorem ipsum...' />
          <HeaderSecondary {...headerSecondary} />
          <div className='columns-wrapper'>
            <div className="column-1">
              <ResumeCarousel carousel={imagesCarousel} configurationOptions={false} title='Lorem ipsum title'/>
            </div>
            <div className="column-2">
              <ResumeReferences list={references} />
            </div>
          </div>
          <MobileBreakpoint>
            <div className="contact-delegate-wrapper">
              <h4>Lorem ipsum title</h4>
              <a href="#">Lorem ipsum link</a>
            </div>
          </MobileBreakpoint>
        </div>
        <BottomBarTwo {...bottomBarTwo} />
      </main>
    </StyledResumePage>
  );
}

export default ResumePage;
