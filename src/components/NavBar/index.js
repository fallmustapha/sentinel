import { connect, useSelector,useDispatch } from "react-redux";
import { compose } from "recompose";
import { side_bar_state_selector } from "../../redux/navigation/selectors";
import {toggleSideBar} from "../../redux/navigation/navigationSlice"
import NavBar from "./Component";



const NavBarContainer=()=>{
     const   isOpen=useSelector(side_bar_state_selector)
    return (
        <NavBar isOpen={isOpen}/>
    )
}
export default NavBarContainer;