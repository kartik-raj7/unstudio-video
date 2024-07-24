import { useState } from "react";
import { MyVideo } from "./MyVideo";
import { Upload } from "./Upload";
import { Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";

export const RemotionRoot: React.FC = () => {
  const [introSrc, setIntroSrc] = useState('');
  const [introMedia, setIntroMedia] = useState(false);
  const [url, setUrl] = useState('https://example.com/video.mp4'); // Replace with actual URL
  const [outroSrc, setOutroSrc] = useState('');
  const [outroMedia, setOutroMedia] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [urlError, setUrlError] = useState('');
  const isValidUrl = (url: string) => {
    const urlPattern = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    return urlPattern.test(url);
  };
  // const uploadMedia = async (file:any) => {
  //   const formData = new FormData();
  //   formData.append('media', file);
  //   try {
  //     const response = await fetch('http://localhost:3001/unstudio/upload', {
  //       method: 'POST',
  //       body: formData,
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Failed to upload Media');
  //     }
  
  //     const data = await response.json();
  //     console.log('Video URL:', data.url);
  //     return data.url;
  //   } catch (error) {
  //     console.error('Error uploading Media:', error);
  //   }
  // };
  const handleIntroUpload = (file: File, isVideo: boolean) => {
    setIntroSrc(URL.createObjectURL(file));
    setIntroMedia(isVideo);
    // uploadMedia(file)
    // .then((url) => {
    //   if (url) {
    //     console.log('Video uploaded successfully:', url);
        
    //   }
    // })
    // .catch((error) => {
    //   console.error('Video upload failed:', error);
    // });
  };
  const handleVideoUrl = () => {
    if (isValidUrl(videoUrl)) {
      setUrl(videoUrl);
      setUrlError('');
      console.log('Video URL updated successfully:', videoUrl);
    } else {
      setUrlError('Invalid URL format. Please enter a valid URL.');
      setUrl('');
    }
  };
  const handleOutroUpload = (file: File, isVideo: boolean) => {
    setOutroSrc(URL.createObjectURL(file));
    setOutroMedia(isVideo);
    // uploadMedia(file)
    // .then((url) => {
    //   if (url) {
    //     console.log('Media uploaded successfully:', url);
    //   }
    // })
    // .catch((error) => {
    //   console.error('Media upload failed:', error);
    // });
  };

  return (
    <>
      <div className="flex gap-2 flex-col pt-2">
       <Upload label="Upload Intro" onUpload={handleIntroUpload} />
       <div>
          <FormControl isInvalid={!!urlError} className="flex flex-row w-full">
            <FormLabel className="text-white ml-4">Add Video Url</FormLabel>
            <Input
              type="text"
              className="w-1/4 ml-3 rounded-sm"
              placeholder="Add video URL here"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
            <Button
              className="bg-blue-500 px-3 ml-2 rounded-lg text-white"
              onClick={handleVideoUrl}
            >
              Add URL
            </Button>
            <FormErrorMessage>{urlError}</FormErrorMessage>
          </FormControl>
        </div>
       <Upload label="Upload Outro" onUpload={handleOutroUpload} />
       </div>
       {introSrc && outroSrc && videoUrl &&(
        <MyVideo
          introSrc={introSrc}
          introIsVideo={introMedia}
          url={videoUrl}
          outroSrc={outroSrc}
          outroIsVideo={outroMedia}
        />
      )}
    </>
  );
};
