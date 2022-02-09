import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { StyledBottomBar } from './bottom-bar.styles';
import Button from '../../atoms/button/button';

export interface BottomBarProps{
  col1: boolean;
  title?: string | "";
  descriptions?: {name: string}[];
  textPrevButton: string;
  textNextButton: string;
}

export const BottomBar = ({ col1, title, descriptions, textPrevButton, textNextButton }: BottomBarProps) => {
  return (
    <StyledBottomBar>
      <div className="column-1">
        {col1 
        ? 
        <>
          <h3>{title}</h3>
          <ul>
            {descriptions != null ? 
            <>
              {descriptions.map((item, index) => 
                <li key={index}>{item.name}</li>
              )}
            </>
            : null }
          </ul>
        </>
        : null }
      </div>
      <div className="column-2">
        <Button disabled={false} size="small" text={textPrevButton} type="btn-secondary"></Button>
        <Button disabled={false} size="small" text={textNextButton} type="btn-primary"></Button>
      </div>
    </StyledBottomBar>
  )
}

export default BottomBar;
