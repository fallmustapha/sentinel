import { Badge, ListItem, ListItemIcon, ListItemText, MenuItem, Typography } from "@mui/material";
import Styles from "./styles";

const CustomMenuItem = ({ text = "Name", icon }) => {
  const classes = Styles();

  return (
    <ListItem button key={text} className={classes.menuItem}>
      <ListItemIcon className={classes.icon}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} primaryTypographyProps={{ fontWeight:300 }} className={classes.menuText}/>
    </ListItem>
  );
};
export default CustomMenuItem;
