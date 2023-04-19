import { useEffect, useId, useState } from "react";
import { File, UploadInput } from "./components";
import { IconUpload } from "./icons";

type FileUpload = {
  id: string;
  file: File;
  progress: number;
  error: boolean;
};

function App() {
  const fileId = useId();
  const [files, setFiles] = useState<FileUpload[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setFiles((prev) =>
        prev.map((file) => {
          if (file.progress < 100) {
            return {
              ...file,
              progress: file.progress + 10,
            };
          }
          return file;
        })
      );
    }, 1000);
  }, [files]);

  const handleUploadFiles = (files: FileList) => {
    for (const file of files) {
      setFiles((prev) => [
        ...prev,
        {
          id: fileId,
          file,
          progress: 0,
          error: false,
        },
      ]);
    }
  };

  return (
    <div className="max-w-[27.5rem] mx-auto h-full flex justify-center items-center flex-col gap-5 py-36">
      <UploadInput onUpload={handleUploadFiles} />

      <div className="flex w-full flex-col gap-3">
        {files.map((file) => (
          <File key={file.id} item={file} />
        ))}
      </div>
    </div>
  );
}

export default App;
