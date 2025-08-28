import { useState } from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";
import "./css/arrow-animation.css"
import { useTheme } from "@/context/theme-context";


export default function ProjectDemo({ videoUrls }: { videoUrls: string[] }) {
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? videoUrls.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === videoUrls.length - 1 ? 0 : prev + 1));
  };

  function getYouTubeId(url: string) {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : "";
  }

  return (
    <div>
      {/* Trigger Button */}
      <a
        href="#_"
        onClick={() => {
          setCurrent(0);
          setShowModal(true);
        }}
        className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold ${
          theme !== "light" ? "text-white" : "dark:text-white/50"
        } rounded-md shadow-2xl group`}
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
        <span className="relative z-10">Project Demo</span>
      </a>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-4xl w-full shadow-2xl relative">
            <button
              className="absolute top-3 right-3 text-xl text-gray-500 hover:text-black dark:hover:text-white"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
              Project Demo ({current + 1}/{videoUrls.length})
            </h2>

            {/* Layout: Button - Video - Button */}
            {/* Layout: Arrow - Video - Arrow */}
            <div className="flex items-center justify-center gap-4 w-full relative">
              {/* Left Arrow */}
              {videoUrls.length > 1 && (
                <button onClick={handlePrev} className="reveal-button left">
                  <span className="reveal-text">Prev</span>
                  <RxDoubleArrowLeft className="reveal-arrow text-3xl" />
                </button>
              )}

              {/* Sliding Video Container */}
              <div className="relative overflow-hidden w-full max-w-[640px]">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {videoUrls.map((url, index) => (
                    <iframe
                      key={index}
                      src={`https://www.youtube.com/embed/${getYouTubeId(url)}`}
                      title={`YouTube video ${index}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[360px] flex-shrink-0 rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              {videoUrls.length > 1 && (
                <button onClick={handleNext} className="reveal-button right">
                  <span className="reveal-text">Next</span>
                  <RxDoubleArrowRight className="reveal-arrow text-3xl" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
