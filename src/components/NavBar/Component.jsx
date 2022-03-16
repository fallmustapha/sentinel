import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import  { useEffect, useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import {withStyles} from "@mui/styles"
import Styles from "./styles"
const NavBar= (props) => {
    const [isOpen,setIsOpen] = useState(props.isOpen)
    useEffect(()=>{
      setIsOpen(props.isOpen)
    },[props.isOpen])
    const classes= Styles()
    console.log(classes)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.nav_bar,isOpen?classes.nav_bar_reduced:classes.nav_bar_extended} open={isOpen}  elevation={0} >
        <Toolbar>
        <Box sx={{flexGrow:1}}></Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
