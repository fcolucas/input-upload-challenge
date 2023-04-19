import classNames from "classnames";
import { IconClose, IconFile } from "../icons";

type FileUpload = {
  id: string;
  file: File;
  progress: number;
  error: boolean;
};

type FileProps = {
  item: FileUpload;
};

const File = ({ item }: FileProps) => {
  const { error, file, id, progress } = item;
  return (
    <div className="w-full flex gap-3 bg-white drop-shadow p-2 rounded-lg">
      <div className="px-3 py-4 bg-purple-100 rounded">
        <IconFile className="text-purple-400" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="w-full flex justify-between gap-2">
          <div className="w-full flex flex-col gap-0.5">
            <p className="text-sm text-gray-600 font-bold">{file.name}</p>
            <span className="text-xs text-gray-300 font-medium">
              {(file.size / 1024).toFixed(2)} MB
            </span>
          </div>
          <IconClose className="text-purple-800" />
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-full h-2 bg-gray-100 rounded-full">
            <div
              className={classNames(`h-full rounded-full w-[${progress}%]`, {
                "bg-gradient-to-r from-violet-600 to-indigo-600":
                  progress < 100,
                "bg-green-500": progress === 100,
              })}
            />
          </div>
          <span className="text-gray-200 text-xs font-medium">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default File;
