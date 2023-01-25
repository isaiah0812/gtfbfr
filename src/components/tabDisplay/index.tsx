import { isMusicContent } from "../../assets/content";
import Content from "../../types/content"
import MusicDisplay from "./musicDisplay";
import YoutubeDisplay from "./youtubeDispay";

type TabDisplayProps = {
  content: Content;
}

export default function TabDisplay({ content }: TabDisplayProps) {
  return (
    <div>
      {content.youtubeId ? (
          <YoutubeDisplay content={content} />
        ) : (isMusicContent(content) ? (
            <MusicDisplay />
          ) : `No content assigned for ${content.name}`
        )
      }
    </div>
  )
}