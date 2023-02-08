import Content from '../../../types/content';
import './SoundcloudDisplay.css';

type SoundcloudDisplayProps = {
  content: Content;
}

export default function SoundcloudDisplay({ content }: SoundcloudDisplayProps) {
  return (
    <div className="player-canvas">
      {content.soundcloudId ? (
        <iframe
          className="player"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${content.soundcloudId}&color=%235b28b8&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
        />
      ) : 'SoundCloud Title not found 🤷‍♂️'}
    </div>
  )
}