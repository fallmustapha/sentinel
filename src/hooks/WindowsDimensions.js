import { useEffect, useState } from "react"

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const useWindowsDimensions=()=>{
    const [dimentions, setDimentions] = useState(getWindowDimensions())
    useEffect(() => {
      const handleResize=()=>{
        setDimentions(getWindowDimensions)
        
      }
      window.addEventListener('resize',handleResize)
      return ()=>window.removeEventListener('resize',handleResize)
    }, [])
    return dimentions
}
export default useWindowsDimensions;

