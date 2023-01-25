import Content from "../types/content";

const content: Content[] = [
  {
    name: 'Test 1',
    youtubeId: 'LClR14Figq4'
  },
  {
    name: 'Test 2',
    youtubeId: 'MXXlloCdbHw',
    spotifyId: 'test'
  }
]

export function isMusicContent(content: Content): boolean {
  const entries: [string, string][] = Object.entries(content).filter(([key, _]) => key !== 'name' && key !== 'youtubeId');

  return entries.find(([_, value]) => value !== undefined) !== undefined
}

export default content;