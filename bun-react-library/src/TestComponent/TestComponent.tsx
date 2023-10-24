import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { KeyboardArrowDown, Person, Map } from "@mui/icons-material";

const TestComponent: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Card sx={{backgroundColor: '#484848', color: 'white'}}>
      <CardContent>
        <Box sx={{display: 'flex', flexDirection: "row", justifyContent: "space-between"}}>
          <Box>
            <Typography variant="h4">Flight Centre</Typography>
            <Typography>powered by Bun</Typography>
          </Box>
          <Button 
            sx={{color: 'white', borderRadius: 5}}
            endIcon={<KeyboardArrowDown />} 
            onClick={handleClick} 
            onMouseOver={handleClick} 
          >
            <Avatar sx={{fontSize: 16}}>CR</Avatar>
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <ListItemIcon><Person /></ListItemIcon>
              <ListItemText>Account</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon><Map /></ListItemIcon>
              <ListItemText>Trips</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Sign out</MenuItem>
          </Menu>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TestComponent;
