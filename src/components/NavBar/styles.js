import { AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";

const drawerWidth=240;
export const AppLogo=styled.h1`
    display: inline-block;
    font-size: 2em;
    margin: 0 0 0.5rem 0;
`;
const  Styles=makeStyles(theme=>(
  {
  nav_bar:{
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  nav_bar_extended:{
    marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
  },
  nav_bar_reduced:{
    width:`calc(100% - ${theme.spacing(9)})`
  },
}))
export const StyledAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    ...(!open &&{
      width:`calc(100% - ${theme.spacing(9)})`
    })
  }));
  export default Styles;