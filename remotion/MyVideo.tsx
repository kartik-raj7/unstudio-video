import { Composition } from 'remotion';
import { CombinedVideo } from './CombinedVideo';

export const MyVideo: React.FC<{
  introSrc: string;
  introIsVideo: boolean;
  url: string;
  outroSrc: string;
  outroIsVideo: boolean;
}> = ({ introSrc, introIsVideo, url, outroSrc, outroIsVideo }) => {
  const totalDuration = 150 + 300 + 150; // Total duration of all sequences

  return (
    <Composition
      id="CombinedVideo"
      component={CombinedVideo}
      durationInFrames={totalDuration}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        introSrc,
        introIsVideo,
        url,
        outroSrc,
        outroIsVideo
      }}
    />
  );
};
