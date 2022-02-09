import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { StyledFilterInputs } from './filter-inputs.styles';
import MobileBreakpoint from '../../utils/responsive-utilities/mobile_breakpoint';

export interface FilterInputsProps{
  orderSelect: string[];
  filterSelect: string[];
  searchInput: string;
}

export const FilterInputs = ({ orderSelect, filterSelect, searchInput }: FilterInputsProps) => {
  return (
    <StyledFilterInputs>
        <div className="order-select-wrapper">
          <select>
            {orderSelect.map((item, i) => <option key={i}>{item}</option> )}
          </select>
        </div>
        <div className="filter-select-wrapper">
          <select>
            {filterSelect.map((item, i) => <option key={i}>{item}</option> )}
          </select>
        </div>
        <div className="search-input-wrapper">
          <input type="text" placeholder={searchInput} />
        </div>
        <MobileBreakpoint>
        <div className="search-input-mobile-wrapper">
          <button></button>
        </div>
        </MobileBreakpoint>
    </StyledFilterInputs>
  )
}

export default FilterInputs;
