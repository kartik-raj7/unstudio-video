import React from 'react';
import { Sequence } from 'remotion';
import { Intro } from './Intro';
import { Middle } from './Middle';
import { Outro } from './Outro';

export const CombinedVideo: React.FC<{
  introSrc: string;
  introIsVideo: boolean;
  url: string;
  outroSrc: string;
  outroIsVideo: boolean;
}> = ({ introSrc, introIsVideo, url, outroSrc, outroIsVideo }) => {
  const introDuration = 150; // duration in frames
  const middleDuration = 300; // duration in frames
  const outroDuration = 150; // duration in frames

  return (
    <>
      <Sequence durationInFrames={introDuration}>
        <Intro src={introSrc} isVideo={introIsVideo} />
      </Sequence>
      <Sequence from={introDuration} durationInFrames={middleDuration}>
        <Middle url={url} />
      </Sequence>
      <Sequence from={introDuration + middleDuration} durationInFrames={outroDuration}>
        <Outro src={outroSrc} isVideo={outroIsVideo} />
      </Sequence>
    </>
  );
};
