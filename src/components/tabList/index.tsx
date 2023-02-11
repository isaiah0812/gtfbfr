import Content from '../../types/content';
import { ReactComponent as ArrowSVG } from '../../assets/figures/arrow.svg';

import './TabList.css';
import { useEffect, useRef, useState } from 'react';

type ArrowProps = {
  right?: boolean;
  onClick?: (...args: unknown[]) => any
}

export type TabListItem = {
  tab: string;
  onClick: (...args: any[]) => any | void;
  content?: Content;
}

type TabListProps = {
  tabs: TabListItem[];
  selected: Content;
}

function Arrow({ right, onClick }: ArrowProps) {
  return (
    <ArrowSVG className={`arrow${right ? ' right' : ' left'}`} onClick={onClick} />
  );
}

export default function TabList({ tabs, selected }: TabListProps) {
  const tabCollection = useRef<HTMLDivElement | null>(null);
  
  const atStart = (element: HTMLDivElement): boolean => element.scrollLeft === 0;
  const atEnd = (element: HTMLDivElement): boolean => element.scrollLeft + element.offsetWidth >= element.scrollWidth;

  const [ leftShadow, setLeftShadow ] = useState<boolean>(false);
  const [ rightShadow, setRightShadow ] = useState<boolean>(true);

  const scrollLeft = () => {
    const element = tabCollection.current!

    element.scrollTo({ left: element.scrollLeft - 150, behavior: 'smooth' });
  }

  const scrollRight = () => {
    const element = tabCollection.current!

    element.scrollTo({ left: element.scrollLeft + 150, behavior: 'smooth' });
  }

  useEffect(() => {
    const element = tabCollection.current!

    setLeftShadow(!atStart(element));
    setRightShadow(!atEnd(element));
  }, [])

  return (
    <div className="tab-list">
      <Arrow onClick={scrollLeft} />
      <div ref={tabCollection} className={`tab-collection scrollable-${leftShadow && rightShadow ? 'both' : (leftShadow ? 'left' : (rightShadow ? 'right' : ''))}`}
        onScroll={() => {
          const element = tabCollection.current!

          setLeftShadow(!atStart(element));
          setRightShadow(!atEnd(element));
        }}>
        {tabs.map(tab => (
          <button className={`tab${tab.content === selected ? ' selected' : ''}`} onClick={tab.onClick}>{tab.tab}</button>
        ))}
      </div>
      <Arrow right onClick={scrollRight} />
    </div>
  )
}