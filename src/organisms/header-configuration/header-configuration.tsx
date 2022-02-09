import Button from '../../atoms/button/button';
import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import TabletBreakpoint from '../../utils/responsive-utilities/tablet_breakpoint';
import DesktopBreakpoint from '../../utils/responsive-utilities/desktop_breakpoint';
import ButtonIcon from '../../molecules/button-icon/button-icon';
import { Icon } from '../../utils/enums/Icons';
import { StyledHeaderConfiguration } from './header-configuration.styles';

export interface HeaderConfigurationProps {
  backText: string;
  titleTextSmall: string;
  titleTextBig: string;
  textNextButton: string;
  disabledNextButton: boolean;
}

export const HeaderConfiguration = ({ backText, titleTextSmall, titleTextBig, textNextButton, disabledNextButton }: HeaderConfigurationProps) => {
  return (
    <StyledHeaderConfiguration>
      <div className="first-column">
        <ButtonIcon position="left-icon" text={backText} type="btn-quinary" size="big" disabled={false} icon={Icon['W_chevron-left_white-icon']} />
      </div>
      <div className="second-column">
        <TabletBreakpoint>
          <a href="#">{titleTextSmall}</a>
        </TabletBreakpoint>
        <span>{titleTextBig}</span>
      </div>
      <div className="third-column">
        <DesktopBreakpoint>
          <a href="#">{titleTextSmall}</a>
        </DesktopBreakpoint>
        <Button size="small" type="btn-quaternary" text={textNextButton} disabled={disabledNextButton} />
      </div>
    </StyledHeaderConfiguration>
  )
}

export default HeaderConfiguration;