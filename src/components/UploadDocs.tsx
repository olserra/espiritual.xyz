import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Button from "./Button";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

interface UploadResponse {
  message: string;
  filename?: string;
}

export const UploadDocs: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const router = useRouter();
  const { data: session } = useSession();

  const uploadFile = async () => {
    if (!uploadedFile) return;

    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      const response = await axios.post<UploadResponse>(
        "https://boostio-ai-backend.onrender.com/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-user-id": session?.user?.id,
          },
        }
      );
      console.log("File uploaded successfully:", response.data);
      setUploadStatus(`Success: ${response.data.message}`);
      router.push("/profiler");
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Error: Failed to upload file. Please try again.");
    }
  };

  const handleClick = () => {
    uploadFile(); // Call uploadFile when button is clicked
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);
    setUploadStatus(null); // Reset upload status on new file selection
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
          Drag & drop a JSON file here, or click to select one
        </p>
      </div>
      {uploadedFile && (
        <p className="text-gray-400">
          <i>Uploaded File: {uploadedFile.name}</i>
        </p>
      )}
      {uploadStatus && <p className="text-gray-400">{uploadStatus}</p>}
      {uploadedFile && <Button onClick={handleClick}>Upload</Button>}
    </div>
  );
};
