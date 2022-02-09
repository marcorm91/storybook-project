import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { StyledField } from './field.styles';

export interface FieldProps{
  label: string;
  size?: 'small' | 'normal';
  type?: 'none' | 'error' | 'success';
  placeholder: string;
  disabled?: boolean;
  typeInput?: 'password' | "text";
  visibleLabel?: boolean;
}

export const Field = ({ label, 
                        visibleLabel = true, 
                        placeholder, 
                        size = 'normal',
                        type = 'none', 
                        typeInput = 'text', 
                        disabled = false}: FieldProps) => {
  return (
    <StyledField className={size +' '+ type}>
      {visibleLabel ? <label>{label}</label> : null}
      <input type={typeInput} placeholder={placeholder} disabled={disabled}></input>
    </StyledField>
  )
}

export default Field;