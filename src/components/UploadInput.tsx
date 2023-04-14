import { IconUpload } from "../icons";

const UploadInput = () => {
  return (
    <div className="h-[10rem] w-full bg-purple-50 flex flex-col items-center justify-center border border-dashed border-purple-200 rounded-lg">
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
