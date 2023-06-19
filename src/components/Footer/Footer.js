import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  useTheme,
  useMediaQuery,
  Button,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Resume from '../../assets/Resume/Resume.pdf';

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
        // marginLeft: "20px"
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Link href="https://github.com/BigMacD-WebDesign" target="_blank">
              <Button sx={{ color: "white" }}>
                <GitHubIcon sx={{ marginLeft: "20px", paddingRight: "20px" }} />
              </Button>
            </Link>

            <Link href="mailto:scottmacd88@yahoo.com">
              <Button sx={{ color: "white" }}>
                <EmailIcon sx={{ paddingRight: "10px" }} />
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/scott-macdonald-b7b741a5/"
              target="_blank"
            >
              <Button sx={{ color: "white" }}>
                <LinkedInIcon />
              </Button>
            </Link>

            <Link href={Resume} target="_blank">
              <Button sx={{ color: "white" }}>
                <PictureAsPdfIcon sx={{ paddingRight: "20px" }} />
              </Button>
            </Link>
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

            <Link href="mailto:scottmacd88@yahoo.com">
              <Button sx={{ color: "white" }}>
                <EmailIcon sx={{ paddingRight: "10px" }} />
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/scott-macdonald-b7b741a5/"
              target="_blank"
            >
              <Button sx={{ color: "white" }}>
                <LinkedInIcon sx={{ paddingRight: "20px" }} />
              </Button>
            </Link>

            <Link href={Resume} target="_blank">
              <Button sx={{ color: "white" }}>
                <PictureAsPdfIcon sx={{ paddingRight: "20px" }} />
              </Button>
            </Link>

          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
