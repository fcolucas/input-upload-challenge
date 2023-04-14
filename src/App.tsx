import { File, UploadInput } from "./components";
import { IconUpload } from "./icons";

function App() {
  return (
    <div className="max-w-[27.5rem] mx-auto h-full flex justify-center items-center flex-col gap-5 py-36">
      <UploadInput />

      <div className="flex w-full flex-col gap-3">
        <File />
        <File />
        <File />
      </div>
    </div>
  );
}

export default App;
