import Button from '../../atoms/button/button';
import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import TabletBreakpoint from '../../utils/responsive-utilities/tablet_breakpoint';
import DesktopBreakpoint from '../../utils/responsive-utilities/desktop_breakpoint';
import MenuItem from '../../molecules/menu-item/menu-item';
import { useState } from 'react';
import { Icon } from '../../utils/enums/Icons';
import { StyledHeader } from './header.styles';

export interface HeaderProps {
  titleLogo: string;
  titleLogin: string;
  titleButton: string;
  rightPanel: boolean;
  isLogged: boolean;
  profileAbbr?: string;
  profileName?: string;
  profileDescription?: string;
  listMenuItems?: IListMenuItemsProps[];
}

export interface IListMenuItemsProps {
  href: string;
  title: string;
  selected: boolean;
  icon: Icon;
  isNotification: boolean;
  notificationNumber?: number;
}

export const Header = ({ titleLogo,
  rightPanel,
  titleLogin,
  titleButton,
  isLogged,
  profileAbbr,
  profileName,
  profileDescription,
  listMenuItems }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const rightPanelElement = () =>
    <div className="second-column">
      <a href="#">{titleLogin}</a>
      <DesktopBreakpoint>
        <Button type="btn-secondary" size="big" text={titleButton} disabled={false} />
      </DesktopBreakpoint>
    </div>

  const renderRightPanel = () => {
    if (isLogged) {
      return <>
        <DesktopBreakpoint>
          <div className="second-column is-logged">
            <div className="profile-img">{profileAbbr}</div>
            <div className="profile-data">
              <span>{profileName}</span>
              <span>{profileDescription}</span>
            </div>
          </div>
        </DesktopBreakpoint>
        <TabletBreakpoint>
          <div className="second-column is-logged">
            <button className="btn-icon" data-icon={showMenu ? Icon['B_plus_blue-icon'] : Icon['B_hamburguer_blue-icon']} onClick={() => { setShowMenu(!showMenu) }}></button>
            {(listMenuItems !== undefined && isLogged)
              ?
              <div className="menu-wrapper">
                <ul>
                  {listMenuItems.map((item, i) =>
                    <MenuItem key={i} {...item} />
                  )}
                </ul>
                <div className="separator"></div>
                <div className="block-2">
                  <div>
                    <div className="profile-img">{profileAbbr}</div>
                    <div className="profile-data">
                      <span>{profileName}</span>
                      <span>{profileDescription}</span>
                    </div>
                  </div>
                  <MenuItem href='#' icon={Icon['O_logout-gray-icon']} isNotification={false} selected={false} title='Cerrar sesión' />
                </div>
              </div>
              : null}
          </div>
        </TabletBreakpoint>
      </>
    } else {
      return <>
        {rightPanelElement()}
      </>
    }
  }

  return (
    <StyledHeader displayMenu={showMenu}>
      <div className="first-column">
        <div data-icon={Icon['B_index-icon']}></div><span>{titleLogo}</span>
      </div>
      {
        rightPanel && renderRightPanel()
      }
    </StyledHeader>
  )
}

export default Header;
