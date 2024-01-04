import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Button from "./Button";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function FileUpload() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [knowledgeBaseName, setKnowledgeBaseName] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const handleClick = () => {
    router.push("/chat");
  };

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);

    const formData = new FormData();
    formData.append("pdfData", file);
    formData.append("knowledgeBaseName", knowledgeBaseName);
    formData.append("description", description);
    formData.append("isPublic", JSON.stringify(isPublic));

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
    <div className="flex flex-col gap-4 justify-center items-center">
      <input
        type="text"
        placeholder="Knowledge Base Name"
        value={knowledgeBaseName}
        onChange={(e) => setKnowledgeBaseName(e.target.value)}
        className="px-4 py-2 rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="px-4 py-2 rounded"
      />
      <label className="text-gray-200">
        <input
          type="checkbox"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
          className="mr-2"
        />
        Public
      </label>
      <div
        {...getRootProps()}
        className="border border-gray-400 shadow-lg w-40 h-40 rounded-lg cursor-pointer border-dashed"
      >
        <input {...getInputProps()} />
        <p className="text-sm p-8 text-gray-200">
          Drag & drop a PDF file here, or click to select one
        </p>
      </div>
      {uploadedFile ? (
        <p className="text-gray-200">
          <i>Uploaded File: {uploadedFile?.name}</i>
        </p>
      ) : (
        <p className="text-gray-200">
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
