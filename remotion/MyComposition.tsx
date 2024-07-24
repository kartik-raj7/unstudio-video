import { AbsoluteFill, Video } from "remotion";
 
type VideoProps = {
  videoURL: string;
};
 
export const MyComponent: React.FC<VideoProps> = ({ videoURL }) => {
  return (
    <AbsoluteFill>
      <Video src={videoURL} />
    </AbsoluteFill>
  );
};