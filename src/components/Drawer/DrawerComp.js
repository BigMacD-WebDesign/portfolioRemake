import { React, useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{ sx: { backgroundColor: "rgba(0,212,255,1)" } }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {links.map((link, index) => {
            return (
              <ListItemButton
                onClick={() => setOpen(false)}
                key={index}
                divider
              >
                <ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>{link}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
