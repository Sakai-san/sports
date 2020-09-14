import React, { FunctionComponent } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

interface ClockTeasersProps {
  sectionName: string;
  teasers?: any[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: "50px",
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);
const ClockTeasers: FunctionComponent<ClockTeasersProps> = ({
  teasers,
  sectionName,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>{sectionName}</h3>
      <Grid container spacing={3}>
        <Grid justify="center" container spacing={3}>
          <Grid item xs={3}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "blue" }}
            >
              <PlayCircleOutlineIcon />
            </Paper>
          </Grid>
        </Grid>

        <Grid justify="center" container spacing={3}>
          <Grid item xs={3}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "violet" }}
            >
              <PlayCircleOutlineIcon />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "orange" }}
            >
              <PlayCircleOutlineIcon />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "brown" }}
            >
              <PlayCircleOutlineIcon />
            </Paper>
          </Grid>
        </Grid>

        <Grid container justify="center" spacing={3}>
          <Grid item xs={3}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "pink" }}
            >
              <PlayCircleOutlineIcon />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ClockTeasers;
