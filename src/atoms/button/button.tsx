import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { StyledButton } from './button.styles';

export interface ButtonProps{
  text: string;
  type?: 'btn-primary' | 'btn-secondary' | 'btn-tertiary' | 'btn-quaternary' | 'btn-quinary';
  size?: 'mobile' | 'small' | 'medium' | 'big';
  disabled?: boolean;
  action?: Function;
}

export const Button = ({action = () => undefined, text, type = 'btn-primary', size = 'medium', disabled = false}: ButtonProps) => {
  return (
    <StyledButton onClick={() => action()} className={type +' '+ size} disabled={disabled}>{text}</StyledButton>
  )
}

export default Button;