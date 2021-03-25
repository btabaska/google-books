import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { addBook, deleteBook } from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function BookContainer({ props, mode }) {
  console.log(props._id);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <h2>{props.title}</h2>
              {props.subtitle ? <h4>{props.subtitle}</h4> : void [0]}
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              {props.authors ? "Author: " + props.authors : "No Author Found"}
              <br></br>
              {props.publisher
                ? "Publisher: " + props.publisher
                : "No Publisher Found"}
              <br></br>
              {props.publishedDate
                ? "Published Date: " + props.publishedDate
                : "No Published Date Found"}
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>
              {mode === "search" ? (
                <Button href={props.infoLink}>View</Button>
              ) : (
                <Button href={props.link}>View</Button>
              )}
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>
              {mode === "search" ? (
                <Button onClick={() => addBook(props)}>Add</Button>
              ) : (
                <Button onClick={() => deleteBook(props._id)}>Delete</Button>
              )}
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper}>
              {props.image ? (
                <img src={props.image} alt="book cover " />
              ) : props.imageLinks.thumbnail ? (
                <img src={props.imageLinks.thumbnail} alt="book cover " />
              ) : (
                void [0]
              )}
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              {props.description
                ? "Description: \n" + props.description
                : "No Description Found"}
            </Paper>
          </Grid>
        </Grid>
      </Paper>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
}
