import Content from '../../../types/content';
import './YoutubeDisplay.css';

type YoutubeDisplayProps = {
  content: Content;
}

export default function YoutubeDisplay({ content }: YoutubeDisplayProps) {
  return (
    content.youtubeId ? (
      <iframe 
        className="video"
        src={`https://www.youtube-nocookie.com/embed/${content.youtubeId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen />
    ) : <div className="video">YouTube video not found 🤷‍♂️</div>
  );
}