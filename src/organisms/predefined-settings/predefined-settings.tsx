import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import Label from '../../atoms/label/label';
import { StyledPredefinedSettings } from './predefined-settings.styles';

export interface PredefinedSettingsProps{
 image: string;
 description: string;
 price: string;
 customizable: boolean;
 href: string;
}

export const PredefinedSettings = ({ href, customizable, image, description, price }: PredefinedSettingsProps) => {
  return (
    <StyledPredefinedSettings href={href}>
      <div className="column-1">
        {customizable
          ? <Label size="small" text="Lorem ipsum"/>
          : null
        }
      </div>
      <div className="column-2">
        <div style={{backgroundImage: `url(${image})`}}></div>
      </div>
      <div className="column-3">
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </StyledPredefinedSettings>
  )
}

export default PredefinedSettings;
