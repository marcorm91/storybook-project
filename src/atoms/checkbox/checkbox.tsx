import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { StyledCheckbox } from './checkbox.styles';
import { useState, ReactElement } from 'react';

export interface CheckboxProps{
  text: ReactElement;
  checked?: boolean;
  disabled?: boolean;
  clickCheckbox: Function;
}

export const Checkbox = ({text, checked = false, disabled = false, clickCheckbox}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  return (
    <StyledCheckbox className="form-control">
        <input onChange={()=>{
            setIsChecked(!isChecked) 
            clickCheckbox()
          }} 
          type="checkbox" name="checkbox" checked={isChecked} disabled={disabled} />
        {text}
    </StyledCheckbox>
  )
}

export default Checkbox;