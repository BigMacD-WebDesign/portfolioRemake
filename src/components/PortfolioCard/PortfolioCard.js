import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";

const PortfolioCard = (props) => {
//   const theme = useTheme();
//   const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Card>
        <CardMedia />
        <CardContent>
          <Typography variant="h5" component="div">
            Trivia With Friends
          </Typography>
          <Typography>
            Utilizes jQuery, Bulma CSS, API's, HTML, SoundManager2, AJAX, JSON
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default PortfolioCard;
