import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { StyledBottomBarTwo } from './bottom-bar-2.styles';
import ButtonIcon from '../../molecules/button-icon/button-icon';
import { Icon } from '../../utils/enums/Icons';
import { useState } from 'react';

export interface BottomBarTwoProps{
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

export const BottomBarTwo = ({  title, textHref, href, buttons }: BottomBarTwoProps) => {

  const [stateMenu, setStateMenu] = useState(false);

  const getButton = (button: any, index: number) => {
    return  button.options.length > 0 ? buttonWithOptions(button, index) : buttonWithoutOptions(button, index)
  }
  
  const buttonWithOptions = (button: any, index: number) => {
    return(
      <>
        <div>
          <ButtonIcon 
                action={()=>{setStateMenu(!stateMenu)}}
                key={index}
                disabled={button.disabled} 
                icon={button.icon}
                position={button.positionIcon}
                size={button.size}
                text={button.name}
                type={button.type} />
          <ul className={button.optionsPosition}>
            {button.options.map((option: any, index: number) =>
              <li key={index}><a href={option.href}>{option.textHref}</a></li>
            )}
          </ul>
        </div>
      </>
    )
  }
  
  const buttonWithoutOptions = (button: any, index: number) => {
    return(
      <ButtonIcon 
        key={index}
        disabled={button.disabled} 
        icon={button.icon}
        position={button.positionIcon}
        size={button.size}
        text={button.name}
        type={button.type} />
    )
  }

  return (
    <StyledBottomBarTwo displayMenu={stateMenu}>
      <div className="column-1">
        <span>{title}</span>
        <a href={href}>{textHref}</a>
      </div>
      <div className="column-2">
        {buttons.map((button, index) => 
          getButton(button, index)
        )}
      </div>
    </StyledBottomBarTwo>
  )
}

export default BottomBarTwo;
