import MobileBreakpoint from '../../utils/responsive-utilities/mobile_breakpoint';
import Select from '../../molecules/select/select';
import ButtonIcon from '../../molecules/button-icon/button-icon';
import Button from '../../atoms/button/button';
import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { useState } from 'react';
import { Icon } from '../../utils/enums/Icons';
import { StyledFilterInputs2 } from './filter-2-inputs.styles';

export interface FilterInputs2Props{
  title: string;
  listSelect: ISelectProps[];
}

export interface ISelectProps{
  label: string;
  disabled: boolean;
  visibleLabel: boolean;
  options: string[];
}

export const FilterInputs2 = ({ title, listSelect }: FilterInputs2Props) => {
  const [stateFilter, setDisplayFilter] = useState(false);
  return (
    <StyledFilterInputs2 displayFilter={stateFilter}>
        <div>
          <div className="title-wrapper">
            <h2>{title}</h2>
            <MobileBreakpoint>
              <>
                <ButtonIcon action={()=>{setDisplayFilter(!stateFilter)}} disabled={false} position='left-icon' icon={Icon['B_filter2_blue-icon']} size='mobile' text='Filtrar' type='btn-secondary' />
                <div className="block-filter-wrapper">
                  <div className="title-wrapper">
                    <h2>Filtros</h2>
                    <Button action={()=>{setDisplayFilter(!stateFilter)}} disabled={false} size='mobile' text='Cerrar' type='btn-secondary' />
                  </div>
                  <div className="content-select-wrapper">
                    {listSelect.map((item, i) => 
                      <Select key={i} {...item} />
                    )}
                  </div>
                  <div className="footer-wrapper">
                    <Button action={()=>{setDisplayFilter(!stateFilter)}} disabled={false} size='small' text='Mostrar resultados' type='btn-primary' />
                  </div>
                </div>
              </>
            </MobileBreakpoint>
          </div>
          <div className="content-select-wrapper">
            {listSelect.map((item, i) => 
              <Select key={i} {...item} />
            )}
          </div>
        </div>
    </StyledFilterInputs2>
  )
}

export default FilterInputs2;
