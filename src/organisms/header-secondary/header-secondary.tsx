import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import TabletBreakpoint from '../../utils/responsive-utilities/tablet_breakpoint';
import { StyledHeaderSecondary } from './header-secondary.styles';

export interface HeaderSecondaryProps {
  title: string;
  description: string;
  fullDescriptionText: string;
  priceType: string;
  price: string;
  priceIncludesText: string;
}

export const HeaderSecondary = ({ title, description, fullDescriptionText, priceType, price, priceIncludesText }: HeaderSecondaryProps) => {

  return (
    <StyledHeaderSecondary>
      <div className="first-column">
        <h5>{title}</h5>
        <p>{description}</p>
        <TabletBreakpoint>
          <a href="#">{fullDescriptionText}</a>
        </TabletBreakpoint>
      </div>
      <div className="second-column">
        <div>
          <span>{priceType}</span>
          <span>{price}</span>
        </div>
        <div>
          <a href="#">{priceIncludesText}</a>
        </div>
      </div>
    </StyledHeaderSecondary>
  )
}

export default HeaderSecondary;