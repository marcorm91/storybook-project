import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { StyledSwitch } from './switcher.styles';

export interface SwitchProps{
  textOne: string;
  textTwo: string;
  onClickOptionOne: Function;
  onClickOptionTwo: Function;
}

export const Switcher = ({textOne, textTwo, onClickOptionOne, onClickOptionTwo}: SwitchProps) => {
  return (
    <StyledSwitch>
          <input className="toggle toggle-left" name="toggle" value="false" type="radio" defaultChecked />
          <label onClick={()=>onClickOptionOne()} className="btn">{textOne}</label>
          <input className="toggle toggle-right" name="toggle" value="true" type="radio" />
          <label onClick={()=>onClickOptionTwo()} className="btn">{textTwo}</label>
    </StyledSwitch>
  )
}

export default Switcher;