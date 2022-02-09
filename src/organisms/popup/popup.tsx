import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { ReactElement } from 'react';
import { StyledPopup } from './popup.styles';

export interface IModalWrapperProps {
  title: string;
  children: ReactElement;
}

export const ModalWrapper = ({title, children}: IModalWrapperProps) => {
  return (
    <StyledPopup>
      <div className="popup-wrapper">
        <div className="row-1">
          <h4>{title}</h4>
          <button></button>
        </div>
        {children}
      </div>
    </StyledPopup>
  )
}

export default ModalWrapper;