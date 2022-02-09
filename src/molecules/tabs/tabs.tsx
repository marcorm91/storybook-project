import { useState, ReactElement } from 'react';
import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { StyledTabs } from './tabs.styles';

export interface IListTab{
  nameTab: string;
  component: ReactElement;
}

export interface TabsProps{
  listTabs: IListTab[];
  defaultSelectIndex: number;
}

export const Tabs = ({listTabs, defaultSelectIndex}: TabsProps) => {
  const [tabSelectedIndex, setTabSelectedIndex] = useState(defaultSelectIndex);
  return (
    <StyledTabs>
      <ul>
        {listTabs.map((tab, index)=>(<li onClick={()=>setTabSelectedIndex(index)} className={index === tabSelectedIndex ? 'active' : ''} key={index}>{tab.nameTab}</li>))}
      </ul>
      <div>
        {listTabs[tabSelectedIndex].component}
      </div>
    </StyledTabs>
  )
}

export default Tabs;
