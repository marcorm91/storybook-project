import HeaderConfiguration from '../../organisms/header-configuration/header-configuration';
import FilterInputs2 from '../../organisms/filter-2-inputs/filter-2-inputs';
import Paginator from '../../molecules/paginator/paginator';
import PredefinedSettings from '../../organisms/predefined-settings/predefined-settings';
import ResultsPage from '../../molecules/results-page/results-page';
import BottomBar from '../../organisms/bottom-bar/bottom-bar';
import '../../assets/global/_variables.css';
import '../../assets/global/_reset.css';
import { StyledConfigurationList } from './configuration-list.styles';

export interface IHeaderProps {
  backText: string;
  titleTextSmall: string;
  titleTextBig: string;
  textNextButton: string;
  disabledNextButton: boolean;
}

export interface IFilterProps {
  label: string;
  disabled: boolean;
  visibleLabel: boolean;
  options: string[];
}

export interface IPredefinedSettingsProps {
  image: string;
  description: string;
  price: string;
  customizable: boolean;
  href: string;
}

export interface ConfigurationListProps {
  header: IHeaderProps;
  titleFilter: string;
  listFilter: IFilterProps[];
  listPredefinedConfig: IPredefinedSettingsProps[];
}

export function ConfigurationList({ header, titleFilter, listFilter, listPredefinedConfig }: ConfigurationListProps) {
  return (
    <StyledConfigurationList>
      <HeaderConfiguration {...header} />
      <main>
        <FilterInputs2 title={titleFilter} listSelect={listFilter} />
        <div className="content-wrapper">
          <div className="results-pag-wrapper">
            <ResultsPage selectResults={["10 per page", "20 per page"]} totalResults={listPredefinedConfig.length} />
            <Paginator />
          </div>
          <ul>
            {listPredefinedConfig.map((item, index) =>
              <li key={index}><PredefinedSettings {...item} /></li>
            )}
          </ul>
          <div className="results-pag-wrapper">
            <ResultsPage selectResults={["10 per page", "20 per page"]} totalResults={listPredefinedConfig.length} />
            <Paginator />
          </div>
        </div>
        <BottomBar col1={true}
          title="Tu selección"
          descriptions={[
            {
              name: "Caja de pared de empotrar de 2 módulos configurables"
            },
          ]}
          textNextButton="Ir a resumen"
          textPrevButton="Personalizar"
        />
      </main>
    </StyledConfigurationList>
  );
}

export default ConfigurationList;
