import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  // Typography,
  // Tabs,
  // Tab,
  useTheme,
  useMediaQuery,
  Button,
  Link,
  // IconButton,
  // Box,
  // MenuIcon
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Footer = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // const [value, setValue] = useState();
  // const handlePageChange = () => {
  //   window.location.href = "pageLink";
  // };

  return (
    <AppBar
      sx={{
        backgroundColor: "black",
        position: "fixed",
        top: "93%",
        placeItems: "center",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Link href="https://github.com/BigMacD-WebDesign" target="_blank">
              <Button sx={{ color: "white" }}>
                <GitHubIcon sx={{ paddingRight: "20px" }} />
              </Button>
            </Link>
            {/* <Button sx={{ color: 'white' }}>
                <EmailIcon sx={{ paddingRight: "20px" }} />
              </Button>
              <Button sx={{ color: "white" }}>
                <LinkedInIcon href="https://www.linkedin.com/in/scott-macdonald-b7b741a5/" />
              </Button> */}
          </>
        ) : (
          <Grid sx={{ placeItems: "center" }} container>
            
            <Link href="https://github.com/BigMacD-WebDesign" target="_blank">
              <Button sx={{ color: "white" }}>
                <GitHubIcon
                  sx={{ paddingRight: "20px" }}
                  href="https://github.com/BigMacD-WebDesign"
                />
              </Button>
            </Link>

            <Link>
            <Button sx={{ color: 'white' }}>
                <EmailIcon sx={{ paddingRight: "20px" }} />
              </Button>
              </Link>
              <Button sx={{ color: "white" }}>
                <LinkedInIcon href="https://www.linkedin.com/in/scott-macdonald-b7b741a5/" />
              </Button>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
