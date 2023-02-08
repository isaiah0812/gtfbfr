import Content from '../../types/content';
import './TabList.css';

type ArrowProps = {
  right?: boolean
}

export type TabListItem = {
  tab: string;
  onClick: () => any;
  content?: Content;
}

type TabListProps = {
  tabs: TabListItem[];
  selected: Content;
}

function Arrow({ right }: ArrowProps) {
  return (
    <div className={`arrow${right ? ' right' : ''}`} />
  )
}

export default function TabList({ tabs, selected }: TabListProps) {
  return (
    <div className="tab-list">
      <Arrow />
      {tabs.map(tab => (
        <button className={`tab${tab.content === selected ? ' selected' : ''}`} onClick={tab.onClick}>{tab.tab}</button>
      ))}
      <Arrow right />
    </div>
  )
}