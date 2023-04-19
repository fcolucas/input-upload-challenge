import { DragEvent, useState } from "react";
import { IconUpload } from "../icons";
import classNames from "classnames";

type UploadInputProps = {
  onUpload: (files: FileList) => void;
};

const UploadInput = ({ onUpload }: UploadInputProps) => {
  const [uploading, isUploading] = useState(false);

  const readFile = (e: DragEvent) => {
    onUpload(e.dataTransfer.files);
  };

  const handleDrag = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const { type } = event;
    switch (type) {
      case "dragover":
      case "dragenter":
        isUploading(true);
        break;
      case "dragleave":
        isUploading(false);
        break;
      case "drop":
        isUploading(false);
        readFile(event);
    }
  };

  return (
    <div
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrag}
      className={classNames(
        "h-[10rem] w-full bg-purple-50 flex flex-col items-center justify-center border border-dashed border-purple-200 rounded-lg transition-colors",
        {
          "bg-purple-150": uploading,
        }
      )}
    >
      <input type="file" className="hidden" />
      <IconUpload className="text-purple-900" />
      <p className="mt-3 font-bold text-purple-500">Importe seus arquivos</p>
      <p className="text-sm text-gray-500">
        Arraste ou clique para fazer upload
      </p>
    </div>
  );
};

export default UploadInput;
