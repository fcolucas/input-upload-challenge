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
      const isCompleted = files.every((file) => file.progress === 100);

      if (!isCompleted) {
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
      }
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

  const handleDelete = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-[27.5rem] mx-auto h-full flex justify-center items-center flex-col gap-5 py-36">
      <UploadInput onUpload={handleUploadFiles} />

      <div className="flex w-full flex-col gap-3">
        {files.map((file, index) => (
          <File key={index} item={file} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
