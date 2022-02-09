import HeaderConfiguration  from '../../organisms/header-configuration/header-configuration';
import Selectors from '../../molecules/selectors/selectors';
import BottomBar from '../../organisms/bottom-bar/bottom-bar';
import '../../assets/global/_variables.css';
import '../../assets/global/_reset.css';
import { StyledTypeProductSelected } from './type-product-selected.styles';

export interface IHeaderProps {
  backText: string;
  titleTextSmall: string;
  titleTextBig: string;
  textNextButton: string;
  disabledNextButton: boolean;
}

export interface ISelectorProps {
  image: string;
  title: string;
  href: string;
  disabled: boolean;
}

export interface TypeProductSelectedProps {
  header: IHeaderProps;
  surfaceSelectors: ISelectorProps[];
  modulesSelectors: ISelectorProps[];
  finishSelectors: ISelectorProps[];
}

export function TypeProductSelected({ header, surfaceSelectors, modulesSelectors, finishSelectors }: TypeProductSelectedProps) {
  return (
    <StyledTypeProductSelected>
      <HeaderConfiguration {...header} />
      <main>
        <div>
          <h2>Lorem ipsum title</h2>
          <ul>
            {surfaceSelectors.map((item, i) => 
              <li key={i}><Selectors {...item} /></li>
            )}
          </ul>
        </div>
        <div>
          <h2>Lorem ipsum title</h2>     
          <ul>
            {modulesSelectors.map((item, i) => 
              <li key={i}><Selectors {...item} /></li>
            )}
          </ul>
        </div>
        <div>
          <h2>Lorem ipsum title</h2>
          <ul>
            {finishSelectors.map((item, i) => 
              <li key={i}><Selectors {...item} /></li>
            )}
          </ul>
        </div>
      </main>
      <BottomBar  col1={true}
                  title="Lorem ipsum title" 
                  descriptions={[
                    {
                      name: "Lorem ipsum 1"
                    },
                    {
                      name: "Lorem ipsum 2"
                    },
                    {
                      name: "Lorem ipsum 3"
                    },
                    {
                      name: "Lorem ipsum 4"
                    },
                    {
                      name: "Lorem ipsum 5"
                    },
                    {
                      name: "Lorem ipsum 6"
                    },
                    {
                      name: "Lorem ipsum 7"
                    },
                  ]}
                  textNextButton="Next"
                  textPrevButton="Cancel" />
    </StyledTypeProductSelected>
  );
}

export default TypeProductSelected;
