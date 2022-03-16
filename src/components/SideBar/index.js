import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../redux/navigation/navigationSlice";
import { side_bar_state_selector } from "../../redux/navigation/selectors";
import SideBarComponent from "./Component";


const SideBar=()=>{
    const dispatch=useDispatch()
    const isOpen=useSelector(side_bar_state_selector)
    const handleToggle=()=>{
        dispatch(toggleSideBar())
    }
    return (
        <SideBarComponent onToggle={handleToggle} isOpen={isOpen}/>
    )
}
export default SideBar;