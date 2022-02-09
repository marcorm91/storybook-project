import HeaderPrimario  from '../../organisms/header/header';
import Menu from '../../organisms/menu/menu';
import Field from '../../atoms/field/field';
import Button from '../../atoms/button/button';
import Textarea from '../../atoms/textarea/textarea';
import '../../assets/global/_icons.css';
import '../../assets/global/_reset.css';
import { Icon } from '../../utils/enums/Icons';
import { StyledHelpPage } from './help-page.styles';

export interface IHeaderProps {
  isLogged: boolean;
  titleLogo: string;
  rightPanel: boolean;
  titleButton: string;
  titleLogin: string;
  profileDescription: string;
  profileName: string;
  profileAbbr: string;
  listMenuItems?: IListMenu[];
}

export interface IListMenu {
  href: string;
  title: string;
  selected: boolean;
  icon: Icon;
  isNotification: boolean;
  notificationNumber: number;
}

export interface HelpPageProps {
  header: IHeaderProps;
  listMenu: IListMenu[];
}

export function HelpPage({ header, listMenu }: HelpPageProps) {
  return (
    <StyledHelpPage>
      <HeaderPrimario {...header} />     
      <Menu
        listMenu={listMenu}
        firstTextFooter="Marco Romero" 
        secondTextFooter="All right reserved." />
      <main>
        <div className="content-wrapper">
         <h2>Lorem ipsum title</h2>
         <form>
          <Textarea disabled={false} label="Lorem ipsum label" placeholder="Lorem ipsum dolor..." size="normal" type="normal" visibleLabel={true} />
          <Field label="Lorem ipsum label" placeholder="Lorem ipsum dolor..." />
          <Button type="btn-primary" size="small" text="Lorem ipsum button" />
         </form>
         <h2>Lorem ipsum title</h2>
         <div>
           <span><i data-icon={Icon['B_phone_blue-icon']}></i>Phone ipsum:</span>
           <h3>777 722 333</h3>
           <ul>
             <li>Lorem ipsum dolor</li>
             <li>Lorem ipsum dolor</li>
           </ul>
         </div>
        </div>
      </main>
    </StyledHelpPage>
  );
}

export default HelpPage;
