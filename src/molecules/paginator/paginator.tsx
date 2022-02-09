import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { Icon } from '../../utils/enums/Icons';
import { StyledPaginator } from './paginator.styles';
export interface PaginatorProps{

}

export const Paginator = ({  }: PaginatorProps) => {
  return (
    <StyledPaginator>
        <ul>
          <li className="first-page disabled"><a href="#" data-icon={Icon['O_chevrons-left-icon']}></a></li>
          <li className="previous-page disabled"><a href="#" data-icon={Icon['O_chevron-left-icon']}></a></li>
          <li className="active"><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a>...</a></li>
          <li><a href="#">7</a></li>
          <li><a href="#">8</a></li>
          <li><a href="#">9</a></li>
          <li className="next-page"><a href="#" data-icon={Icon['O_chevron-right-icon']}></a></li>
          <li className="last-page"><a href="#" data-icon={Icon['O_chevrons-right-icon']}></a></li>
        </ul>
    </StyledPaginator>
  )
}

export default Paginator;
