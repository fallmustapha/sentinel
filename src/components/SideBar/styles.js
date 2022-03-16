import styled from "styled-components";
import { Drawer, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const drawerWidth=230

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow:"2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
    overflowX: 'hidden',
    border:"none"
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    border:"none",
    overflowX: 'hidden',
    width: `calc(${theme.spacing(5)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(6)} + 1px)`,
    },
  });
  

export const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    padding: theme.spacing(0, 1),
    backgroundColor:"transparent",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  export const BlockLabel= styled(Typography)(
    ({ theme, open })=>({
      fontSize:13,
      color:grey[500],
      padding: theme.spacing(0, 1),
      margin:"0 0 0 5px",
      ...theme.mixins.toolbar,
      display:!open&&"none"
    })
  );