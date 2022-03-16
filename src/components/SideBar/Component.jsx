import {
  Divider,
  IconButton,
  List,
  Typography,
  useTheme,
} from "@mui/material";
import { BlockLabel, DrawerHeader, StyledDrawer } from "./styles";
import {
  ChevronLeft,
  ChevronRight,
  ContactMailOutlined,
  Dashboard
} from "@mui/icons-material";
import { useState } from "react";
import CustomMenuItem from "./components/menuItem/component"

const SideBarComponent = (props) => {
  const theme = useTheme();
  console.log(theme)
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const handleDrawerClose = () => {
    setIsOpen((value) => !value);
    props.onToggle();
  };
  return (
    <StyledDrawer variant="permanent" elevation={3} open={isOpen} theme={theme} >
      <DrawerHeader theme={theme}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" }, ml: 3 && isOpen }}
          color={theme.palette.primary.main}
          fontWeight={"bold"}
        >
          Sentinel
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {isOpen ? (
            <ChevronLeft sx={{ color: theme.palette.primary.dark }} />
          ) : (
            <ChevronRight sx={{ color: theme.palette.primary.dark }} />
          )}
        </IconButton>
      </DrawerHeader>
      {isOpen&&<Divider variant="middle"/>}
      <List>
        <CustomMenuItem text="Dashboard" icon={<Dashboard style={{ color: theme.palette.primary.main }}/>} />
      </List>
      <List>
      <BlockLabel
        variant="span"
        theme={theme}
        open={isOpen}
      >Packages</BlockLabel>
      <CustomMenuItem text="Creation" icon={<ContactMailOutlined style={{ color: theme.palette.primary.main }}/>} />
      <CustomMenuItem text="Modification" icon={<ContactMailOutlined style={{ color: theme.palette.primary.main }}/>} />
      </List>
    </StyledDrawer>
  );
};
export default SideBarComponent;
