import { useState } from "react";
import { uploadFile, getFileUrl } from "../../services/api";

export const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    try {
      await uploadFile(file, "materials", `public/${file.name}`);
      const url = await getFileUrl("materials", `public/${file.name}`);
      console.log("File uploaded:", url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};
