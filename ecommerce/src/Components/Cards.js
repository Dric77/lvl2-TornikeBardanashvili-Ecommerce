import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 300,
    backgroundColor: "#000"
  },
  cardHeight: {
    height: "auto"
  }
});

function Cards() {
  const classes = useStyles();
  return (
    <Card className={classes.cardHeight}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Card Tittle
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            $99.99
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cards;
