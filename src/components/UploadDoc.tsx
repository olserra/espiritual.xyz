import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Button from "./Button";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function FileUpload() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const router = useRouter();
  const { data: session } = useSession();
  const handleClick = () => {
    router.push("/chat");
  };

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);

    const formData = new FormData();
    formData.append("pdfData", file); // Use "pdfData" as the key

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-user-id": session?.user?.id,
        },
      });
      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div
        {...getRootProps()}
        className="border border-gray-400 shadow-lg w-40 h-40 rounded-lg cursor-pointer border-dashed"
      >
        <input {...getInputProps()} />
        <p className="text-sm p-8 text-gray-500">
          Drag & drop a PDF file here, or click to select one
        </p>
      </div>
      {uploadedFile ? (
        <p>
          <i>Uploaded File: {uploadedFile?.name}</i>
        </p>
      ) : (
        <p>
          <i>No file chosen</i>
        </p>
      )}
      {uploadedFile && (
        <Button onClick={handleClick} className="text-white">
          Chat
        </Button>
      )}
    </div>
  );
}

export default FileUpload;
