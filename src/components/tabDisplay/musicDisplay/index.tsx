import { useState } from 'react';
import './MusicDisplay.css';
import { ReactComponent as AppleMusicLogo } from '../../../assets/logos/appleMusic.svg';
import { ReactComponent as SoundCloudLogo } from '../../../assets/logos/soundcloud.svg';
import { ReactComponent as SpotifyLogo } from '../../../assets/logos/spotify.svg';
import { ReactComponent as TidalLogo } from '../../../assets/logos/tidal.svg';
import { ReactComponent as YouTubeLogo } from '../../../assets/logos/youtube.svg';
import Content from '../../../types/content';

type MusicTabService = {
  title: string,
  player: (id: string) => JSX.Element,
  logo?: JSX.Element,
  contentProp: keyof Content
};

type MusicTabProps = MusicTabService & {
  selected: boolean;
  onClick: (...params: any[]) => any,
  open: boolean;
  content: Content;
};

type MusicTabDisplayProps = {
  content: Content
}

const services: MusicTabService[] = [
  {
    title: 'Spotify',
    player: (id: string) => (
      <iframe style={{borderRadius: '12px', width: '100%', border: 'none', margin: 0, padding: 0}} height="100%" src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
    ),
    logo: (<SpotifyLogo className="service-logo" />),
    contentProp: 'spotifyId'
  },
  {
    title: 'Apple Music',
    player: (id: string) => (
      <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" style={{width: '100%', overflow: 'hidden', background: 'transparent', border: 'none'}} height="100%" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={`https://embed.music.apple.com/us/album/pressure/${id}`} />
    ),
    logo: (<AppleMusicLogo className="service-logo" />),
    contentProp: 'appleId'
  },
  {
    title: 'Tidal',
    player: (id: string) => (
      <iframe src={`https://embed.tidal.com/tracks/${id}?layout=gridify`} allowFullScreen style={{ width: '100%', height: '100%', margin: '0px auto', border: 'none'}} />
    ),
    logo: (<TidalLogo className="service-logo" />),
    contentProp: 'tidalId'
  },
  {
    title: 'YouTube Music',
    player: (id: string) => (
      <iframe style={{ width: '100%', height: '100%', border: 'none' }} src={`https://www.youtube-nocookie.com/embed/${id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
    ),
    logo: (<YouTubeLogo className="service-logo" />),
    contentProp: 'youtubeId'
  },
  {
    title: 'SoundCloud',
    player: (id: string) => (
      <iframe style={{ border: 'none', height: '100%', width: '100%' }} allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%235b28b8&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`} />
    ),
    logo: (<SoundCloudLogo className="service-logo" />),
    contentProp: 'soundcloudId'
  }
];

function MusicTab({ selected, onClick, player, open, logo, contentProp, content }: MusicTabProps) {
  return (
    <div className={`music-tab${!selected ? ' unselected' : ''}`}>
      <button onClick={() => onClick()}>
        {logo}
      </button>
      <div className={`music-tab-player${open ? ' open' : ''}`}>
        {player(content[contentProp] as string)}
      </div>
    </div>
  )
}

export default function MusicDisplay({ content }: MusicTabDisplayProps) {
  const [ selected, setSelected ] = useState<MusicTabService | null>(null);

  const contentProps = Object.keys(content);

  return (
    <div className="music-tabs">
      {services.map(service => {
        const isSelected = selected === service;
        return (contentProps.includes(service.contentProp) && <MusicTab {...service} selected={!selected || isSelected} onClick={() => setSelected(isSelected ? null : service)} open={isSelected} content={content} />)
      })}
    </div>
  )
}