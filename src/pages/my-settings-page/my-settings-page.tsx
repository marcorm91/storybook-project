import Tabs from '../../molecules/tabs/tabs';
import ButtonIcon from '../../molecules/button-icon/button-icon';
import FilterInputs from '../../organisms/filter-inputs/filter-inputs';
import Paginator from '../../molecules/paginator/paginator';
import ResultsPage from '../../molecules/results-page/results-page';
import MySettings from '../../organisms/my-settings/my-settings';
import TabletBreakPoint from '../../utils/responsive-utilities/tablet_breakpoint';
import '../../assets/global/_variables.css';
import '../../assets/global/_reset.css';
import HeaderPrimario from '../../organisms/header/header';
import Menu from '../../organisms/menu/menu';
import { Icon } from '../../utils/enums/Icons';
import { StyledMySettingsPage } from './my-settings-page.styles';

interface IFilterOptions {
  titleOrder: string;
  titleFilter: string;
  searchInputText: string;
  options: {
    createdAt: string;
    updatedLast: string;
    alphabeticalOrder: string;
  }
}

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

export interface ITabSettingsContent {
  title: string;
  filterOptions: IFilterOptions;
  notResultText: string;
  selectResults: string[]
}

export interface ITabsSettings {
  all: ITabSettingsContent;
  favorites: ITabSettingsContent
}
export interface IListMenu {
  href: string;
  title: string;
  selected: boolean;
  icon: Icon;
  isNotification: boolean;
  notificationNumber: number;
}
export interface ISettingTabProps {
  image: string;
  date: string;
  title: string;
  description: string;
  priceType: string;
  price: string;
  favoriteMarked: boolean;
  listHover1: any[];
  listHover2: any[];
}
export interface MySettingsPageProps {
  titlePage: string;
  allSettings: ISettingTabProps[];
  favSettings: ISettingTabProps[];
  tabs: ITabsSettings;
  header: IHeaderProps;
  listMenu: IListMenu[];

}

const allTab = (allSettings: any[], tabContent: ITabSettingsContent) =>
  <>
    <FilterInputs
      orderSelect={[
        tabContent.filterOptions.titleOrder,
        tabContent.filterOptions.options.createdAt,
        tabContent.filterOptions.options.updatedLast,
        tabContent.filterOptions.options.alphabeticalOrder]}
      filterSelect={[
        tabContent.filterOptions.titleFilter,
        tabContent.filterOptions.options.createdAt,
        tabContent.filterOptions.options.updatedLast,
        tabContent.filterOptions.options.alphabeticalOrder]}
      searchInput={tabContent.filterOptions.searchInputText} />
    {allSettings.length > 0
      ?
      <>
        <div className="filter-wrapper">
          <ResultsPage selectResults={tabContent.selectResults} totalResults={allSettings.length} />
          <Paginator />
        </div>
        <div className="content-results-wrapper">
          <ul>
            {allSettings.map((item, i) =>
              <li key={i}>
                <MySettings
                  title={item.title}
                  date={item.date}
                  description={item.description}
                  favoriteMarked={item.favoriteMarked}
                  image={item.image}
                  listHover1={item.listHover1}
                  listHover2={item.listHover2}
                  price={item.price}
                  priceType={item.priceType}
                />
              </li>
            )}
          </ul>
        </div>
        <div className="filter-wrapper">
          <ResultsPage selectResults={tabContent.selectResults} totalResults={allSettings.length} />
          <Paginator />
        </div>
      </>
      :
      <>
        <div className="content-results-wrapper">
          <span>{tabContent.notResultText}</span>
        </div>
      </>
    }
  </>

const favouriteTab = (favSettings: any[], tabContent: ITabSettingsContent) =>
  <>
    <FilterInputs
      orderSelect={[
        tabContent.filterOptions.titleOrder,
        tabContent.filterOptions.options.createdAt,
        tabContent.filterOptions.options.updatedLast,
        tabContent.filterOptions.options.alphabeticalOrder]}
      filterSelect={[
        tabContent.filterOptions.titleFilter,
        tabContent.filterOptions.options.createdAt,
        tabContent.filterOptions.options.updatedLast,
        tabContent.filterOptions.options.alphabeticalOrder]}
      searchInput={tabContent.filterOptions.searchInputText} />
    {favSettings.length > 0
      ?
      <>
        <div className="filter-wrapper">
          <ResultsPage selectResults={tabContent.selectResults} totalResults={favSettings.length} />
          <Paginator />
        </div>
        <div className="content-results-wrapper">
          <ul>
            {favSettings.map((item, i) =>
              <li key={i}>
                <MySettings
                  title={item.title}
                  date={item.date}
                  description={item.description}
                  favoriteMarked={item.favoriteMarked}
                  image={item.image}
                  listHover1={item.listHover1}
                  listHover2={item.listHover2}
                  price={item.price}
                  priceType={item.priceType}
                />
              </li>
            )}
          </ul>
        </div>
        <div className="filter-wrapper">
          <ResultsPage selectResults={tabContent.selectResults} totalResults={favSettings.length} />
          <Paginator />
        </div>
      </>
      :
      <>
        <div className="content-results-wrapper">
          <span>{tabContent.notResultText}</span>
        </div>
      </>
    }
  </>

export function MySettingsPage({ titlePage, header ,allSettings, favSettings, tabs, listMenu }: MySettingsPageProps) {
  return (
    <StyledMySettingsPage>
      <HeaderPrimario {...header} />
      <Menu
        listMenu={listMenu}
        firstTextFooter="Marco Romero"
        secondTextFooter="All right reserved." />
      <main>
        <div className="content-wrapper">
          <TabletBreakPoint>
            <div className="title-tablet-wrapper">
              <h2>{titlePage}</h2>
              <ButtonIcon type="btn-primary" size="mobile" text="Nueva" icon={Icon['W_plus_white-icon']} position="left-icon" disabled={false}/>
            </div>
          </TabletBreakPoint>
          <Tabs listTabs={[
            { nameTab: tabs.all.title, component: allTab(allSettings, tabs.all) },
            { nameTab: tabs.favorites.title, component: favouriteTab(favSettings, tabs.favorites) }]} defaultSelectIndex={0} />
          <ButtonIcon type="btn-primary" size="small" text="Lorem ipsum button" icon={Icon['W_plus_white-icon']}  position="left-icon" disabled={false} />
        </div>
      </main>
    </StyledMySettingsPage>
  );
}

export default MySettingsPage;
