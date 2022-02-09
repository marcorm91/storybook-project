
import { StyledButtonIcon } from './button-icon.styles';
import '../../assets/global/_variables.css';
import '../../assets/global/_icons.css';
import '../../assets/fonts/_fonts.css';
import { Icon } from '../../utils/enums/Icons';

export interface ButtonIconProps{
  text: string;
  type?: 'btn-primary' | 'btn-secondary' | 'btn-tertiary' | 'btn-quaternary' | 'btn-quinary' | 'btn-sextarian';
  size?: 'mobile' | 'small' | 'medium' | 'big';
  icon: Icon;
  position?: 'left-icon' | 'right-icon';
  disabled?: boolean;
  action?: Function;
}

export const ButtonIcon = ({text, icon ,type = 'btn-primary', size = 'medium', position = 'left-icon', disabled = false, action = () => undefined}: ButtonIconProps) => {
  return (
    <StyledButtonIcon onClick={() => action()} className={type +' '+ size + ' ' + position} disabled={disabled} data-icon={icon}>{text}</StyledButtonIcon>
  )
}

export default ButtonIcon;