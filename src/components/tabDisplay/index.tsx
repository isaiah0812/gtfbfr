import { isFreestyle, isMusic, isVideo } from "../../assets/content";
import Content from "../../types/content"
import MusicDisplay from "./musicDisplay";
import YoutubeDisplay from "./youtubeDisplay";
import './TabDisplay.css';
import SoundcloudDisplay from "./soundcloudDisplay";
import { useEffect, useState } from "react";

type TabDisplayProps = {
  content: Content;
  changing?: boolean;
}

export default function TabDisplay({ content, changing }: TabDisplayProps) {
  const [ music, setMusic ] = useState<boolean>(false);
  useEffect(() => {
    setMusic(isMusic(content));
  }, [content])
  return (
    <div className={`tab-display-canvas${changing ? ' changing' : ''}${music ? ' music' : ''}`}>
      <div className="tab-display">
        {isVideo(content) ? (
            <YoutubeDisplay content={content} />
          ) : (isFreestyle(content) ? (
              <SoundcloudDisplay content={content} />
              ) : (isMusic(content) ? (
                <MusicDisplay content={content} />
              ) : `No content assigned for ${content.name}`
            )
          )
        }
      </div>
    </div>
  )
}