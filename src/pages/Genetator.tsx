import React, { useState } from "react";
import Title from "../components/Title";
import UploadZone from "../components/UploadZone";

const Genetator = () => {
  const [name, setName] = useState("");
  const [productName, setProductName] = useState("");
  const [productDecription, setProductDescription] = useState("");
  const [aspectRatio, setAspectRatio] = useState("9:16");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [modelImage, setModelImage] = useState<File | null>(null);
  const [userPromt, setUserPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "product" | "model",
  ) => {
    if (e.target.files && e.target.files[0]) {
      if (type === "product") {
        setProductImage(e.target.files[0]);
      } else {
        setModelImage(e.target.files[0]);
      }
    }
  };
  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen text-white p-6 md:p-12 mt-28">
      <form className="max-w-4xl mx-auto mb-40" onSubmit={handleGenerate}>
        <Title
          heading="Create In-Context Image"
          description="Upload your prodect and model image to geneerate stunning UGC,
              short-form videos and social posts"
        ></Title>
        <div className="flex gap-20 max-sm:flex-col items-start justify-between">
            <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
          {/* lrft column */}
          <UploadZone
            label="Product Image"
            file={productImage}
            onClear={() => setProductImage(null)}
            onChange={(e) => handleFileChange(e, "product")}
          />
          <UploadZone
            label="Model Image"
            file={modelImage}
            onClear={() => setModelImage(null)}
            onChange={(e) => handleFileChange(e, "model")}
          />
          </div>

          {/* right column */}
          <div>
            <p>right column</p>
            </div>
        </div>
      </form>
    </div>
  );
};

export default Genetator;
