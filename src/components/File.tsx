import { IconClose, IconFile } from "../icons";

const File = () => {
  return (
    <div className="w-full flex gap-3 bg-white drop-shadow p-2 rounded-lg">
      <div className="px-3 py-4 bg-purple-100 rounded">
        <IconFile className="text-purple-400" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="w-full flex justify-between gap-2">
          <div className="w-full flex flex-col gap-0.5">
            <p className="text-sm text-gray-600 font-bold">Scann_158.pdf</p>
            <span className="text-xs text-gray-300 font-medium">
              30 MB / 74 MB
            </span>
          </div>
          <IconClose className="text-purple-800" />
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-full h-2 bg-gray-100 rounded-full" />
          <span className="text-gray-200 text-xs font-medium">46%</span>
        </div>
      </div>
    </div>
  );
};

export default File;
