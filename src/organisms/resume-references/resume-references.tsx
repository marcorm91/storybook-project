import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import ButtonIcon from '../../molecules/button-icon/button-icon';
import { Icon } from '../../utils/enums/Icons';
import { StyledResumeReferences } from './resume-references.styles';

export interface ResumeReferencesProps{
  title?: string;
  list: {
    header: {
      data: any[];
    },
    body: {
      tr: {
        data: any[];
      }[]
    }
  }
}

export const ResumeReferences = ({ title, list }: ResumeReferencesProps) => {

  const getDataRowBody = (item: any, index: number) => {
    if(index == 0){
      return <div key={index} className="item-wrapper"><div className="image" style={{backgroundImage: `url(${item})`}}></div></div>
    }else{
      return <div key={index} className="item-wrapper"><span>{item}</span></div>
    }
  }

  return (
    <StyledResumeReferences>
      <div className="column-1">
        <h5>{title}</h5>
        <ButtonIcon disabled={false} icon={Icon['B_copy_blue-icon']} position="right-icon" size="mobile" text="Lorem ipsum" type="btn-sextarian" />
      </div>
      <div className="column-2">
        <div className="table-wrapper">
              <div className="header-wrapper">
                {list.header.data.map((data, index) =>
                  <div key={index}>{data}</div>
                )}
              </div>
              <div className="body-wrapper">
                {list.body.tr.map((tr, index) => 
                  <div className="row-wrapper" key={index}>
                    {tr.data.map((item, index) =>
                      getDataRowBody(item, index)
                    )}
                  </div>
                )}
              </div>
        </div>
      </div>
    </StyledResumeReferences>
  )
}

export default ResumeReferences;
