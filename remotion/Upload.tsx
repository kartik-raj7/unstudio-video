import React, { useState } from 'react';

export const Upload: React.FC<{ label: string; onUpload: (file: File, isVideo: boolean) => void }> = ({ label, onUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0] || null;
    if (uploadedFile) {
      setFile(uploadedFile);
      const isVideo = uploadedFile.type.startsWith('video/');
      onUpload(uploadedFile, isVideo);
    }
  };

  return (
    <div>
      <label className='p-4 text-white'>{label}</label>
      <input type="file" accept="image/*,video/*" onChange={handleFileChange} className='text-blue-400 pl-1'/>
    </div>
  );
};
