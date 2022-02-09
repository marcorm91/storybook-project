
import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { StyledSelect } from './select.styles';

export interface SelectProps{
  label: string;
  disabled?: boolean;
  visibleLabel?: boolean;
  options: string[];
}

export const Select = ({label, visibleLabel = true, disabled = false, options}: SelectProps) => {
  return (
    <StyledSelect>
      <label data-visible-label={visibleLabel}>{label}</label>
      <select className={disabled ? 'disabled-select' : ''}>
      {options.map((item, i) => 
        <option key={i}>{item}</option>
      )}
      </select>
    </StyledSelect>
  )
}

export default Select;