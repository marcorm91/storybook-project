import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { StyledLabel } from './label.styles';

export interface LabelProps{
  text: string;
  size: 'small' | 'big';
}

export const Label = ({text, size}: LabelProps) => {
  return (
    <StyledLabel className={size}>{text}</StyledLabel>
  )
}

export default Label;