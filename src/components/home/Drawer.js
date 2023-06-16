import React from "react";
import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = () => {
  const [openDrawar, setopenDrawar] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawar}
        onClose={() => setopenDrawar(false)}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>login</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={() => setopenDrawar(!openDrawar)}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
