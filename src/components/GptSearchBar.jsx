import { useSelector } from "react-redux";
import lang from "../utilities/languageConstants";

const GptSearchBar = () => {
    const langKey=useSelector((store)=>store.config.lang);
  return (
    <div className="flex justify-center mt-30">
      <form className="flex w-full max-w-2xl bg-[#1f1f1f] rounded-xl overflow-hidden shadow-lg">

        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="
            flex-1 px-4 py-3
            bg-transparent text-white
            outline-none placeholder-gray-400
          "
        />

        <button
          className="
            px-5
            bg-red-600 text-white font-semibold
            hover:bg-red-700 transition-colors
          "
        >
          {lang[langKey].Search}
        </button>

      </form>
    </div>
  );
};

export default GptSearchBar;
