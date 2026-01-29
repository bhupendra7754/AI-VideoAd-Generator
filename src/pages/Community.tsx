import { useEffect, useState } from "react";
import type { Project } from "../types";
import { dummyGenerations } from "../assets/assets";
import { div } from "framer-motion/client";
import { Loader2Icon } from "lucide-react";
import ProjectCard from "../components/ProjectCard";


const Community = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    setTimeout(() => {
      setProjects(dummyGenerations);
      setLoading(false);
    }, 3000);
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  return loading ? (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2Icon className="size-7 animate-spin text-indigo-400" />
    </div>
  ) : (
    <div className="min-h-screen text-white p-6 md:p-12 my-28">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
        <h1 className="font-semibold md:text-4xl mb-4 text-3xl">Community</h1>
        <p className="text-gray-400">see what others are creating with UGC.ai</p>
        </header>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {projects.map((project)=>(
            <ProjectCard key={project.id} gen={project} setGenerations={setProjects}
            ForCommunity={true}/>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
