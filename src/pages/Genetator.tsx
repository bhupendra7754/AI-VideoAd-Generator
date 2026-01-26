import React, { useState } from "react";
import Title from "../components/Title";
import UploadZone from "../components/UploadZone";
import { Loader2Icon, RectangleHorizontalIcon, RectangleVerticalIcon, Wand2Icon } from "lucide-react";
import { PrimaryButton } from "../components/Buttons";

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
          <div className="w-full ">
            <div className="mb-4 text-gray-300">
              <label htmlFor="name" className="block text-sm mb-4">
                Project Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name your project"
                required
                className="w-full bg-white/3 rounded-lg border-2 p-4
              text-sm border-violet-200/10 focus:border-violet-500/50 
              outline-none transition-all"
              />
            </div>
            <div className="mb-4 text-gray-300">
              <label htmlFor="productName" className="block text-sm mb-4">
                productName
              </label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Name your product"
                required
                className="w-full bg-white/3 rounded-lg border-2 p-4
              text-sm border-violet-200/10 focus:border-violet-500/50 
              outline-none transition-all"
              />
            </div>

            <div className="mb-4 text-gray-300">
              <label
                htmlFor="productDescription"
                className="block text-sm mb-4"
              >
                productDescription{" "}
                <span className="text-xs text-violet-400">(optional)</span>
              </label>
              <textarea
                id="productDecription"
                rows={4}
                value={productDecription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Enter the description of the product"
                className="w-full bg-white/3 rounded-lg border-2 p-4 textsm
              border-violet-200/10 focus:border-violet-500/50 outline-none resize-none transition-all"
              ></textarea>
            </div>

            <div className=" mb-4 text-gray-300">
              <label className=" block text-sm mb-4">Aspect Radio</label>
              <div className="flex gap-3">
              <RectangleVerticalIcon  onClick={()=>setAspectRatio('9:16')}
                className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2
                ring-transparent cursor-pointer ${aspectRatio === '9:16' ? 'ring-violet-500/50 bg-white/10' : ''}`}/>

                <RectangleHorizontalIcon  onClick={()=>setAspectRatio('16:9')}
                className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2
                ring-transparent cursor-pointer ${aspectRatio === '16:9' ? 'ring-violet-500/50 bg-white/10' : ''}`}/>
                </div>
            </div>

            <div className="mb-4 text-gray-300">
              <label
                htmlFor="userPromt"
                className="block text-sm mb-4"
              >
                User Prompt{" "}
                <span className="text-xs text-violet-400">(optional)</span>
              </label>
              <textarea
                id="userPromt"
                rows={4}
                value={userPromt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Describe how you want  the narration to be.."
                className="w-full bg-white/3 rounded-lg border-2 p-4 textsm
              border-violet-200/10 focus:border-violet-500/50 outline-none resize-none transition-all"
              ></textarea>
            </div>

          </div>

        </div>

        {/* button */}
        <div className="flex justify-center mt-10">
          <PrimaryButton disabled ={isGenerating} className="px-10 py-3
          rounded-full disabled:opacity-70 disabled:cursor-not-allowed">
            {isGenerating ? (<>
            <Loader2Icon className="size-5 animate-spin"/>Generating...

            </>
          
          ) : (<>
          <Wand2Icon className="size-5"/>Genarate Image
          </>)}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default Genetator;
