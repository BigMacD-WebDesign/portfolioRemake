import { React } from "react";
import {
  Grid,
  Typography,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import profileImg from "../assets/images/profile_pic.jpg";

const AboutMe = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <Grid
      sx={{ textAlign: "center", paddingTop: 10, margin: "auto" }}
      container
      xs={12}
    >
      {isMatch ? (
        <>
          <Avatar
            sx={{ width: 200, height: 200, margin: "auto" }}
            alt="Scott MacDonald Profile Picture"
            src={profileImg}
          />
          <Grid item xs={12} md={12}>
            <Typography
              variant="h2"
              style={{ color: "white", paddingTop: 10, fontWeight: "bold", fontSize: '30px' }}
            >
              About Me
            </Typography>
          </Grid>
          <Typography
            variant=""
            style={{
              color: "white",
              paddingTop: 20,
              fontWeight: "bold",
              fontSize: '18px'
            }}
          >
            I am a Full Stack Web Developer with an intense passion for code and
            problem solving. Certified AWS Cloud Practitioner and skilled in
            HTML, HTML5, CSS, CSS3, JavaScript, jQuery, Bootstrap React.JS,
            Node.JS, Express, MySQL, MongoDB, Handlebars, Sequelize, AJAX, JSON,
            Web API. With experience with Google TagManager and Google
            Analytics. Coding fills me with great satisfaction.
          </Typography>
          <Typography
            variant=""
            style={{
              color: "white",
              fontWeight: "bold",
              paddingTop: 5,
              paddingBottom: 20,
            }}
          >
            "The capacity to learn is a gift; the ability to learn is a skill;
            the willingness to learn is a choice" -Brian Herbert.
          </Typography>
        </>
      ) : (
        <>
          <Grid item xs={12} md={12}>
            <Avatar
              sx={{ width: 300, height: 300, margin: "auto" }}
              alt="Scott MacDonald Profile Picture"
              src={profileImg}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h2"
              style={{ color: "white", paddingTop: 10, fontWeight: "bold", fontSize: 30 }}
            >
              About Me
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ maxWidth: "50% !important", margin: "auto" }}
          >
            <Typography
              variant="h6"
              style={{
                color: "white",
                paddingTop: 10,
                fontSize: 18
              }}
            >
              I am a Full Stack Web Developer with an intense passion for code
              and problem solving. Skilled in Google Tag Manager and Google
              Analytics, HTML, HTML5, CSS, CSS3, JavaScript, jQuery, Bootstrap
              React.JS, Node.JS, Express, MySQL, MongoDB, Handlebars, Sequelize,
              AJAX, JSON, Web API. Coding fills me with great satisfaction.
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="h6" style={{ color: "white", paddingTop: 10, fontSize: 18 }}>
              "The capacity to learn is a gift; the ability to learn is a skill;
              the willingness to learn is a choice" -Brian Herbert.
            </Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default AboutMe;
