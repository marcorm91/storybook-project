import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { StyledSelectors } from './selectors.styles';

export interface SelectorsProps{
 image: string;
 title: string;
 href: string;
 disabled?: boolean;
}

export const Selectors = ({ href, image, title, disabled = false }: SelectorsProps) => {
  return (
    <StyledSelectors href={href} className={disabled ? 'disabled-item' : ''}>
      <div className="column-1">
        <div style={{backgroundImage: `url(${image})`}}></div>
      </div>
      <div className="column-2">
        <span>{title}</span>
      </div>
    </StyledSelectors>
  )
}

export default Selectors;
