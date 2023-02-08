import { isFreestyle, isMusic, isVideo } from "../../assets/content";
import Content from "../../types/content"
import MusicDisplay from "./musicDisplay";
import YoutubeDisplay from "./youtubeDisplay";
import './TabDisplay.css';
import SoundcloudDisplay from "./soundcloudDisplay";

type TabDisplayProps = {
  content: Content;
}

export default function TabDisplay({ content }: TabDisplayProps) {
  return (
    <div className="tab-display-canvas">
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