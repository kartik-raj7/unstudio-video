import { Video } from 'remotion';

export const Middle: React.FC<{ url: string }> = ({ url }) => {
  return <Video src={url} />;
};
