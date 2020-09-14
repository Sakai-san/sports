// @ts-nocheck
import React, { FunctionComponent, useEffect, useState, useRef } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import debounce from "lodash.debounce";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

interface ClockTeasersProps {
  sectionName: string;
  teasers: [string, string, string, string];
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
    videoContainer: {
      height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
const ClockTeasers: FunctionComponent<ClockTeasersProps> = ({
  teasers,
  sectionName,
}) => {
  const classes = useStyles();
  const [teasersOrdered, setTeasersOrdered] = useState(teasers);
  const [teaser1, teaser2, teaser3, teaser4] = teasersOrdered;

  useEffect(() => {
    window.addEventListener(
      "scroll",
      debounce((e) => {
        ///        console.log(e);

        setTeasersOrdered((prev: ClockTeasersProps["teasers"]) => {
          const prevOrdered = prev;

          return [
            prevOrdered[1],
            prevOrdered[2],
            prevOrdered[3],
            prevOrdered[0],
          ];
        });
      }, 100),
      { passive: true }
    );

    return () => {
      window.removeEventListener("scroll", () => null);
    };
  }, []);

  return (
    <div className={classes.root}>
      <h3>{sectionName}</h3>
      <Grid container spacing={3}>
        <Grid justify="center" container spacing={3}>
          <Grid item xs={3}>
            <div
              className={classes.videoContainer}
              style={{ backgroundColor: teaser1 }}
            >
              <PlayCircleOutlineIcon />
            </div>
          </Grid>
        </Grid>

        <Grid justify="center" container spacing={3}>
          <Grid item xs={3}>
            <div
              className={classes.videoContainer}
              style={{ backgroundColor: teaser2 }}
            >
              <PlayCircleOutlineIcon />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div
              className={classes.videoContainer}
              style={{ backgroundColor: teaser3 }}
            >
              <PlayCircleOutlineIcon />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div
              className={classes.videoContainer}
              style={{ backgroundColor: teaser4 }}
            >
              <PlayCircleOutlineIcon />
            </div>
          </Grid>
        </Grid>

        <Grid container justify="center" spacing={3}>
          <Grid item xs={3}>
            <div
              className={classes.videoContainer}
              style={{ backgroundColor: "pink" }}
            >
              <PlayCircleOutlineIcon />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ClockTeasers;
