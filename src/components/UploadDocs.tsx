import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Button from "./Button";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export const UploadDocs = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const router = useRouter();
  const { data: session } = useSession();

  const uploadFile = async () => {
    if (!uploadedFile) return; // Exit if no file is selected

    const formData = new FormData();
    formData.append("pdfData", uploadedFile); // Use "pdfData" as the key

    try {
      const response = await axios.post(
        "https://boostio-ai-backend.onrender.com/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-user-id": session?.user?.id, // Ensure this header is needed by your backend
          },
        }
      );
      console.log("File uploaded successfully:", response.data);
      router.push("/chat"); // Navigate after successful upload
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleClick = () => {
    uploadFile(); // Call uploadFile when button is clicked
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div
        {...getRootProps()}
        className="border border-gray-400 shadow-lg w-40 h-40 rounded-lg cursor-pointer border-dashed"
      >
        <input {...getInputProps()} />
        <p className="text-sm p-8 text-gray-400">
          Drag & drop a PDF file here, or click to select one
        </p>
      </div>
      {uploadedFile ? (
        <p className="text-gray-400">
          <i>Uploaded File: {uploadedFile.name}</i>
        </p>
      ) : (
        <p className="text-gray-400">
          <i>No file chosen</i>
        </p>
      )}
      {uploadedFile && <Button onClick={handleClick}>Upload and Chat</Button>}
    </div>
  );
};
