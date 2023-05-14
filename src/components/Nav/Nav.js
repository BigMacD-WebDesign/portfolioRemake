import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Drawer from "../Drawer/DrawerComp";
import profileImg from '../../assets/images/profile_pic.jpg';

const Navbar = ({ links }) => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const [value, setValue] = useState();
  return (
    <AppBar
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(9,9,121,1) 9%, rgba(0,212,255,1) 58%, rgba(0,36,4,1) 97%);",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Typography>
                {/* To change later: Make the Shopping cart Icon a logo photo */}
                <Avatar sx={{width: 50, height: 50}} alt="Scott MacDonald Profile" src={profileImg} />
              </Typography>
              <Typography sx={{ marginLeft: 21, align: 'center', fontWeight: 'bold' }} variant="h4"> Scott MacDonald </Typography>
            <Drawer links={links}/>
          </>
        ) : (
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={2}>
              <Typography>
                {/* To change later: Make the Shopping cart Icon a logo photo */}
                <Avatar sx={{width: 50, height: 50}} alt="Scott MacDonald" src={profileImg} />
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6"> Scott MacDonald </Typography>
            </Grid>
            <Grid sx={{marginLeft:"auto"}} item xs={6}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                {links.map((link, index) => {
                  return <Tab key={index} label={link} />;
                })}
              </Tabs>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
