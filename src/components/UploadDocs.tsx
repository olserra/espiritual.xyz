import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Button from "./Button";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { set } from "js-cookie";

interface UploadResponse {
  message: string;
  filename?: string;
}

export const UploadDocs: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [openaiApiKey, setOpenaiApiKey] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [droppedFile, setDroppedFile] = useState<boolean>(false);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    // set disabled to true when droppedFile is true and openaiApiKey is valid
    if (droppedFile && openaiApiKey) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [droppedFile, openaiApiKey]);

  const uploadFile = async () => {
    if (!uploadedFile || !openaiApiKey) return;

    const formData = new FormData();
    formData.append("file", uploadedFile, uploadedFile.name + ".zip");

    try {
      const response = await axios.post<UploadResponse>(
        "https://boostio-ai-backend.onrender.com/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-user-id": session?.user?.id,
            "x-openai-api-key": openaiApiKey,
          },
        }
      );
      console.log("File uploaded successfully:", response.data);
      setUploadStatus(`Success: ${response.data.message}`);
      router.push("/analysis");
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Error: Failed to upload file. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenaiApiKey(e.target.value);
    setDisabled(false); // Enable the button if the API key format is valid
  };

  const handleClick = () => {
    if (uploadedFile && openaiApiKey) {
      uploadFile();
    } else {
      setUploadStatus(
        "Error: Please select a file and enter your OpenAI API key."
      );
    }
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);
    setDroppedFile(true);
    setUploadStatus(null);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col gap-8 justify-center items-center py-36">
      <div
        {...getRootProps()}
        className="border border-gray-400 shadow-lg w-40 h-40 rounded-lg cursor-pointer border-dashed"
      >
        <input {...getInputProps()} />
        <p className="text-sm p-8 text-gray-400">
          Drag & drop a ZIP file with a text file inside, or click to select one
        </p>
      </div>
      <input
        type="text"
        placeholder="Enter OpenAI API Key"
        value={openaiApiKey}
        onChange={handleChange}
        className="border border-gray-400 rounded-md p-2 w-64"
      />
      {uploadedFile && (
        <p className="text-gray-400">
          <i>Uploaded File: {uploadedFile.name}</i>
        </p>
      )}
      {uploadStatus && <p className="text-gray-400">{uploadStatus}</p>}
      {/* Conditionally render the button based on file upload and API key validity */}
      <Button onClick={handleClick} disabled={disabled}>
        Upload
      </Button>
    </div>
  );
};
