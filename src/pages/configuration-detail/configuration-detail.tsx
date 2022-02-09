import HeaderConfiguration from '../../organisms/header-configuration/header-configuration';
import HeaderSecondary from '../../organisms/header-secondary/header-secondary';
import ResumeCarousel from '../../organisms/resume-carousel/resume-carousel';
import ResumeReferences from '../../organisms/resume-references/resume-references';
import Tabs from '../../molecules/tabs/tabs';
import '../../assets/global/_variables.css';
import '../../assets/global/_reset.css';
import { StyledConfigurationDetail } from './configuration-detail.styles';
import { ReactElement, useState } from 'react';
import { StyledMenuConfiguration } from '../../molecules/menu-configuration/menu-configuration.styles';
import { Icon } from '../../utils/enums/Icons';

export interface IHeaderProps {
  backText: string;
  titleTextSmall: string;
  titleTextBig: string;
  textNextButton: string;
  disabledNextButton: boolean;
}

export interface IHeaderSecondaryProps {
  title: string;
  description: string;
  fullDescriptionText: string;
  priceType: string;
  price: string;
  priceIncludesText: string;
}

export interface IMenuConfigurationProps {
  border: boolean;
  blueType: boolean;
  textNav: string;
  backNavigationText: string;
  component: ReactElement;
}

export interface ConfigurationDetailProps {
  header: IHeaderProps;
  headerSecondary: IHeaderSecondaryProps;
  imagesCarousel: any[];
  references: any;
  listMenuConfig: IMenuConfigurationProps[];
}

export function ConfigurationDetail({ header, headerSecondary, imagesCarousel, references, listMenuConfig }: ConfigurationDetailProps) {

  const [accordionActiveIndex, setAccordionActiveIndex] = useState<number>(-1);
  const [accordionActive, setAccordionActive] = useState<boolean>(false);

  return (
    <StyledConfigurationDetail>
      <HeaderConfiguration {...header} />
      <main>
        <HeaderSecondary {...headerSecondary} />
        <div className="contain-wrapper">
          <div className="column-1">
            <Tabs listTabs={[
              {
                nameTab: "Lorem ipsum 1",
                component: <ResumeCarousel carousel={imagesCarousel} configurationOptions={true} />
              },
              {
                nameTab: "Lorem ipsum 2",
                component: <ResumeReferences list={references} />
              }]} defaultSelectIndex={0} />
          </div>
          <div className="column-2">
            <ul>
              {listMenuConfig.map((item, i) => {
                if(accordionActiveIndex === i || accordionActiveIndex === -1) {
                  return <li key={i}  >
                  <Accordion
                    onClickBackButton={() => {
                      setAccordionActiveIndex(-1)
                      setAccordionActive(false)
                    }}
                    onClickNextButton={() => {
                      setAccordionActiveIndex(i)
                      setAccordionActive(true)
                    }}
                    {...item}>{item.component}</Accordion>
                </li>
                } 
                else return null;
              })}
            </ul>
          </div>
        </div>
      </main>
    </StyledConfigurationDetail>
  );
}

interface IAccordionProps {
  children: ReactElement;
  border: boolean;
  blueType: boolean;
  backNavigationText?: string;
  textNav: string;
  onClickBackButton: Function;
  onClickNextButton: Function;
}

export const Accordion = ({ children, 
                            border, 
                            textNav, 
                            backNavigationText = 'Volver', 
                            blueType, 
                            onClickBackButton = () => { },
                            onClickNextButton = () => { } }: IAccordionProps) => {

  const [isVisibleContent, setIsVisibleContent] = useState<boolean>(false);
  const borderClass = border ? 'border-nav' : '';
  const blueTypeClass = blueType ? 'blue-type' : '';
  const renderContent = () => <div className='item-content'><div>{children}</div></div>

  return (
    <StyledMenuConfiguration className={`${borderClass} ${blueTypeClass}`}>
      {(isVisibleContent)
        ? <>
          <div className="back-navigation" onClick={() => { setIsVisibleContent(false); onClickBackButton() }}>
            <div>
              <a href="#" data-icon={Icon['B_chevron-left_blue-icon']}></a>
            </div>
            <div>
              <span>{backNavigationText}</span>
            </div>
          </div>
          {renderContent()}
        </>
        :
        <>
          <div className="next-navigation" onClick={() => { setIsVisibleContent(true); onClickNextButton() }}>
            <div>
              <span>{textNav}</span>
            </div>
            <div>
              <a href="#" data-icon={Icon['B_chevron-right_blue-icon']}></a>
            </div>
          </div>
        </>
      }
    </StyledMenuConfiguration>
  )
}

export default ConfigurationDetail;