import { ReactElement } from 'react';
import HeaderPrimario  from '../../organisms/header/header';
import Menu from '../../organisms/menu/menu';
import Tabs from '../../molecules/tabs/tabs';
import Field from '../../atoms/field/field';
import BottomBar from '../../organisms/bottom-bar/bottom-bar';
import '../../assets/global/_variables.css';
import '../../assets/global/_reset.css';
import { Icon } from '../../utils/enums/Icons';
import { StyledMyData } from './my-data.styles';

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
export interface IFieldProps{
  title: string;
  placeholder: string;
  typeInput: string;
}

export interface MyDataProps {
  nameTitle: string;
  header: IHeaderProps;
  listMenu: IListMenu[];
  fieldsPersonalData: IFieldProps[];
  fieldsPwdData: IFieldProps[];
  conditionsData: ReactElement<any>;
}

const personalData = (fieldsPersonalData: any[]) =>
  <>
    <div className="content-tab-wrapper">
      {fieldsPersonalData.map((item, i) =>
        <Field key={i} label={item.title} placeholder={item.placeholder} typeInput={item.typeInput} />
      )}
    </div>
  </>

const pwdData = (fieldsPwdData: any[]) =>
  <>
    <div className="content-tab-wrapper">
      {fieldsPwdData.map((item, i) =>
        <Field key={i} label={item.title} placeholder={item.placeholder} typeInput={item.typeInput} />
      )}
      <a href="#">Lorem ipsum link</a>
    </div>
  </>

const conditions = (conditionsData: any) =>
  <>
    <div className="content-tab-wrapper">
      {conditionsData}
    </div>
  </>

export function MyData({ nameTitle, header, listMenu, fieldsPersonalData, fieldsPwdData, conditionsData}: MyDataProps) {
  return (
    <StyledMyData>
      <HeaderPrimario {...header} />
      <Menu
        listMenu={listMenu}
        firstTextFooter="Marco Romero"
        secondTextFooter="All right reserved." />
      <main>
        <div className="content-wrapper">
          <h2>{nameTitle}</h2>
          <Tabs listTabs={[
            { nameTab: "Lorem ipsum 1", component: personalData(fieldsPersonalData) },
            { nameTab: "Lorem ipsum 2", component: pwdData(fieldsPwdData) },
            { nameTab: "Lorem ipsum 3", component: conditions(conditionsData) }, ]} defaultSelectIndex={0} />
          <BottomBar  col1={false}
                  textNextButton="Back"
                  textPrevButton="Next" />
        </div>
      </main>
    </StyledMyData>
  );
}

export default MyData;
