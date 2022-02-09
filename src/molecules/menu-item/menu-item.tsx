import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { Icon } from '../../utils/enums/Icons';
import { StyledMenuItem } from './menu-item.styles';

export interface MenuItemProps{
  href: string;
  title: string;
  selected: boolean;
  icon: Icon;
  isNotification: boolean;
  notificationNumber?: number;
}

export const MenuItem = ({href, selected, title, icon, isNotification, notificationNumber}: MenuItemProps) => {
  return (
    <StyledMenuItem className={selected === true ? 'item-selected' : ''}>
      <a href={href}>
        <div className={'icon-menu'} data-icon={icon}></div>
        <span className="title">{title}</span>
        {isNotification
          ? <span className="notification-number">{notificationNumber}</span>
          : ''
        }
      </a>
    </StyledMenuItem>
  )
}

export default MenuItem;
