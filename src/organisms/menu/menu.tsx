import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import MenuItem from '../../molecules/menu-item/menu-item';
import DesktopBreakpoint from '../../utils/responsive-utilities/desktop_breakpoint';
import { Icon } from '../../utils/enums/Icons';
import { StyledMenu } from './menu.styles';

export interface IListMenu{
  href: string;
  title: string;
  selected: boolean;
  icon: Icon;
  isNotification: boolean;
  notificationNumber: number;
}
export interface MenuProps{
  listMenu: IListMenu[];
  firstTextFooter: string;
  secondTextFooter: string;
}

export const Menu = ({ firstTextFooter, secondTextFooter, listMenu }: MenuProps) => {
  return (
    <DesktopBreakpoint>
      <StyledMenu>
        <div>
          <ul>
            {listMenu.map((menu, index)=>(
              <MenuItem key={index}
                href={menu.href} 
                icon={menu.icon} 
                isNotification={menu.isNotification} 
                notificationNumber={menu.notificationNumber} 
                selected={menu.selected}
                title={menu.title} />
            ))}
          </ul>
        </div>
        <div>
          <span>© {new Date().getFullYear()} {firstTextFooter}</span>
          <span>{secondTextFooter}</span>
        </div>
      </StyledMenu>
    </DesktopBreakpoint>
  )
}

export default Menu;
