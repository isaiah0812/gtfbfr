import { useState } from "react";
import Content from "../../types/content";
import TabDisplay from "../tabDisplay";
import TabList, { TabListItem } from "../tabList";
import './Tabs.css';

type TabsProps = {
  tabs: Content[]
}

export default function Tabs({ tabs }: TabsProps) {
  const tabNames: string[] = tabs.map(tab => tab.name);
  const [ selected, setSelected ] = useState<Content>(tabs[0])

  const tabList: TabListItem[] = tabs.map((tab): TabListItem => {
    return {
      tab: tab.name,
      onClick: () => setSelected(tab)
    }
  })

  return (
    <div className="main-component">
      <TabList tabs={tabList} />
      <TabDisplay content={selected} />
    </div>
  )
}