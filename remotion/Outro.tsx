import { useVideoConfig, Video, Img } from 'remotion';

export const Outro: React.FC<{ src: string; isVideo: boolean }> = ({ src, isVideo }) => {
  const { width, height } = useVideoConfig();

  return (
    <div style={{ width, height, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {isVideo ? (
        <Video src={src} style={{ width, height }} />
      ) : (
        <Img src={src} style={{ width, height }} />
      )}
    </div>
  );
};
