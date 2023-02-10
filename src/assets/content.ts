import Content from "../types/content";

const content: Content[] = [
  {
    name: 'Test 1',
    youtubeId: 'LClR14Figq4'
  },
  {
    name: 'Test 2',
    youtubeId: 'MXXlloCdbHw',
    spotifyId: '0cLOol1ZQ7ILyluO78oMwi',
    appleId: '1614979061?i=1614979062',
  },
  {
    name: 'Test 3',
    soundcloudId: '1358195254'
  },
  {
    name: 'Test 4',
  },
  {
    name: 'Test 5',
    youtubeId: 'LClR14Figq4'
  },
  {
    name: 'Test 6',
    youtubeId: 'MXXlloCdbHw',
    spotifyId: '0cLOol1ZQ7ILyluO78oMwi',
    appleId: '1614979061?i=1614979062',
  },
  {
    name: 'Test 7',
    soundcloudId: '1358195254'
  },
  {
    name: 'Test 8',
  },
  {
    name: 'Test 9',
    youtubeId: 'LClR14Figq4'
  },
  {
    name: 'Test 10',
    youtubeId: 'MXXlloCdbHw',
    spotifyId: '0cLOol1ZQ7ILyluO78oMwi',
    appleId: '1614979061?i=1614979062',
  },
  {
    name: 'Test 11',
    soundcloudId: '1358195254'
  },
  {
    name: 'Test 12',
  },
]

export function isVideo(content: Content): boolean {
  const keys: string[] = Object.keys(content);

  return keys.length === 2 && keys.includes('youtubeId');
}

export function isMusic(content: Content): boolean {
  const entries: [string, string][] = Object.entries(content).filter(([key, _]) => key !== 'name');

  return !isVideo(content) && !isFreestyle(content) && entries.find(([_, value]) => value !== undefined) !== undefined
}

export function isFreestyle(content: Content): boolean {
  const keys: string[] = Object.keys(content);

  return keys.length === 2 && keys.includes('soundcloudId');
}

export default content;