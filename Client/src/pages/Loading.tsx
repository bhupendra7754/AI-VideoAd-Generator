import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

const Loading = () => {

  const [exit, setExit] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      setExit(true);
    }, 4000);

    setTimeout(() => {
      window.location.href = "/";
    }, 4700);

  }, []);

  return (

    <div className="h-screen flex items-center justify-center bg-black overflow-hidden">

      <div className="relative flex items-center justify-center">

        {/* pulse ring */}
        <div
          className={`absolute size-24 rounded-full border border-indigo-500/30
          animate-ping ${exit && "scale-[6] opacity-0 transition-all duration-700"}`}
        />

        {/* second ring */}
        <div
          className={`absolute size-16 rounded-full border border-indigo-400/40
          animate-pulse ${exit && "scale-[5] opacity-0 transition-all duration-700"}`}
        />

        {/* main loader */}
        <Loader
          className={`size-10 text-indigo-400 animate-spin transition-all duration-700
          ${exit && "scale-[4] opacity-0 rotate-180"}`}
        />

      </div>

    </div>

  );

};

export default Loading;
