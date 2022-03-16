import { ClassNames } from "@emotion/react"
import Styles from "./styles"
import useWindowsDimensions from "../../hooks/WindowsDimensions"

const MainContent=()=>{
    const classes=Styles()
    const {width,height}=useWindowsDimensions()
   return (
       <div className={classes.main_content} style={{height:height}}>
           <h1>main content</h1>
       </div>
   )
}
export default MainContent;