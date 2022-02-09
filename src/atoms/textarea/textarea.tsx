import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { StyledTextarea } from './textarea.styles';

export interface TextareaProps{
  label: string;
  size?: 'normal' | 'small';
  type: 'normal' | 'error' | 'success';
  placeholder: string;
  disabled?: boolean;
  visibleLabel?: boolean;
}

export const Textarea = ({label, visibleLabel = true, placeholder, size = 'normal', type = 'normal', disabled = false}: TextareaProps) => {
  return (
    <StyledTextarea className={size +' '+ type}>
      <label data-visible-label={visibleLabel}>{label}</label>
      <textarea placeholder={placeholder} disabled={disabled}></textarea>
    </StyledTextarea>
  )
}

export default Textarea;