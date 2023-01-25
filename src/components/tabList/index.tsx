import './TabList.css';

type ArrowProps = {
  right?: boolean
}

export type TabListItem = {
  tab: string;
  onClick: () => any;
}

type TabListProps = {
  tabs: TabListItem[]
}

function Arrow({ right }: ArrowProps) {
  return (
    <div className={`arrow${right ? ' right' : ''}`} />
  )
}

export default function TabList({ tabs }: TabListProps) {
  return (
    <div>
      <Arrow />
      {tabs.map(tab => (
        <button className="tab" onClick={tab.onClick}>{tab.tab}</button>
      ))}
      <Arrow right />
    </div>
  )
}