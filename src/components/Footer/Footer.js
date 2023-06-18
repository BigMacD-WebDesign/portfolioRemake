import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  // Tabs,
  // Tab,
  useTheme,
  useMediaQuery,
  // IconButton,
  // Box,
  // MenuIcon
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Footer = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // const [value, setValue] = useState();
  const handlePageChange = () => {
    window.location.href="pageLink"
  }

  return (
    <AppBar sx={{ backgroundColor: "black", position: 'fixed', top: '93%', placeItems: "center"}}>
      <Toolbar>
        {isMatch ? (
          <>
            <Typography>
                <GitHubIcon sx={{ paddingRight: '20px'}}/>
                <EmailIcon sx={{ paddingRight: '20px'}}/>
                <LinkedInIcon />
            </Typography>
          </>
        ) : ( 
          <Grid sx={{ placeItems: "center" }} container >
             <Typography >
                <GitHubIcon sx={{ paddingRight: '20px'}} onClick={ handlePageChange } />
                <EmailIcon sx={{ paddingRight: '20px'}} />
                <LinkedInIcon />
            </Typography>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
