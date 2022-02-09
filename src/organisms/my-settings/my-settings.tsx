import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import ButtonIcon from '../../molecules/button-icon/button-icon';
import DesktopBreakpoint from '../../utils/responsive-utilities/desktop_breakpoint';
import TabletBreakpoint from '../../utils/responsive-utilities/tablet_breakpoint';
import { useState } from 'react';
import { Icon } from '../../utils/enums/Icons';
import { StyledMySettings } from './my-settings.styles';

export interface IListHover1{
  iconButton: Icon;
  name: string;
}

export interface IListHover2{
  href: string;
  name: string;
  action: Function;
}

export interface MySettingsProps{
  image: string;
  date: string;
  title: string;
  description: string;
  priceType: string;
  price: string;
  favoriteMarked: boolean;
  listHover1: IListHover1[];
  listHover2: IListHover2[];
}

export const MySettings = ({ image, date, title, description, priceType, price, favoriteMarked, listHover1, listHover2 }: MySettingsProps) => {

  const [stateBox, setStateBox] = useState(false);
  const [stateBox2, setStateBox2] = useState(false);

  return (
    <StyledMySettings displayBox={stateBox} displayBox2={stateBox2}>
      <div className="column-1">
        <div style={{backgroundImage: `url(${image})`}}></div>
      </div>
      <div className="column-2">
        <time>{date}</time>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="price-wrapper">
          <span>{priceType}</span>
          <span>{price}</span>
        </div>
      </div>
      <TabletBreakpoint>
        <div className="abs-1-wrapper-mobile">
          <button data-icon={Icon['B_menu_blue-icon']} onClick={()=>{setStateBox2(!stateBox2)}}></button>
          <ul>
          {listHover1.map((item, index) => <li key={index}>{item.name}</li> )}
          </ul>
        </div>
      </TabletBreakpoint>
      <DesktopBreakpoint>
        <div className="abs-1-wrapper">
          {listHover1.map((item, index) => 
            <div key={index} className={index == 1 && favoriteMarked ? 'icon-marked' : ''}>
              {index == 1 && favoriteMarked
                ? <button data-icon={Icon['B_favorite-marked_blue-icon']}></button>
                : <button data-icon={item.iconButton}></button>
              }
              <span>{item.name}</span>
            </div>
          )}
        </div>
      </DesktopBreakpoint>
      <div className="abs-2-wrapper">
        <ButtonIcon disabled={false} position="left-icon" icon={Icon['B_edit_blue-icon']} size="mobile" text="Editar" type="btn-tertiary" />
        <div>
          <ButtonIcon action={()=>{setStateBox(!stateBox)}} disabled={false} position="left-icon" icon={Icon['B_chevron-bottom_blue-icon']} size="mobile" text="" type="btn-secondary"/>
          <ul>
            { listHover2.map((item, index) => <li key={index}><a href={item.href}>{item.name}</a></li> )}
          </ul>
        </div>  
      </div>
    </StyledMySettings>
  )
}

export default MySettings;
