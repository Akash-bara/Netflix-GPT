import { body_img } from "../utilities/constant"
import GptMovieSugestion from "./GptMovieSugestion"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-10">
            <img className="w-full h-full object-cover" 
            src={body_img}
            
            alt ="Logo"/>
            </div>
      <GptSearchBar/>
      <GptMovieSugestion/>
    </div>
  )
}

export default GptSearch
