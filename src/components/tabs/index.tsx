import { useState } from "react";
import Content from "../../types/content";
import TabDisplay from "../tabDisplay";
import TabList, { TabListItem } from "../tabList";
import './Tabs.css';

type TabsProps = {
  tabs: Content[]
}

export default function Tabs({ tabs }: TabsProps) {
  const [ selected, setSelected ] = useState<Content>(tabs[0]);
  const [ changing, setChanging ] = useState<boolean>(false);
  const [ visible, setVisible ] = useState<boolean>(false);

  const handleChange = (tab: Content) => {
    setChanging(true);
    setTimeout(() => {
      setSelected(tab);
      setChanging(false);
    }, 500)
  }

  const tabList: TabListItem[] = tabs.map((tab): TabListItem => {
    return {
      tab: tab.name,
      onClick: () => handleChange(tab),
      content: tab
    }
  })

  return (
    <div className={`main-component${visible ? ' visible' : ''}`} onLoad={() => setVisible(true)}>
      <TabList tabs={tabList} selected={selected} />
      <TabDisplay content={selected} changing={changing} />
    </div>
  )
}