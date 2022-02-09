import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { StyledResultsPage } from './results-page.styles';

export interface ResultsPageProps{
  totalResults: number;
  selectResults: string[];
}

export const ResultsPage = ({ totalResults, selectResults }: ResultsPageProps) => {
  return (
    <StyledResultsPage>
        <div className="results-wrapper">
          <span>{totalResults} Results:</span>
          <select>
            {selectResults.map((item, i) => <option key={i}>{item}</option> )}
          </select>
        </div>
    </StyledResultsPage>
  )
}

export default ResultsPage;
