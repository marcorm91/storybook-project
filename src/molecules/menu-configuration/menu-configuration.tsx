import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { Icon } from '../../utils/enums/Icons';
import { StyledMenuConfiguration } from './menu-configuration.styles';
import { useState } from 'react';

export interface MenuConfigurationProps{
  border: boolean;
  blueType: boolean;
  backNavigation: boolean;
  textNav: string;
}


export const MenuConfiguration = ({border, blueType, backNavigation, textNav}: MenuConfigurationProps) => {

  const [isVisibleContent, setIsvisibleComponent] = useState<boolean>(false);

  const borderClass = border ? 'border-nav' : '';
  const blueTypeClass= blueType ? 'blue-type' : '';

  return (
    <StyledMenuConfiguration className={`${borderClass} ${blueTypeClass}`}>
      {backNavigation 
        ? <div className="back-navigation">
            <div>
              <a href="#" data-icon={Icon['B_chevron-left_blue-icon']}></a>
            </div>
            <div>
              <span>{textNav}</span>
            </div>
          </div>
        : <div className="next-navigation" onClick={() => setIsvisibleComponent(!isVisibleContent)}>
            <div>
              <span>{textNav}</span>
            </div>
            <div>
              <a href="#" data-icon={Icon['B_chevron-right_blue-icon']}></a>
            </div>
          </div>
      }
    </StyledMenuConfiguration>
  )
}

export default MenuConfiguration;
