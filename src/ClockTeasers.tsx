// @ts-nocheck
import React, { FunctionComponent, useEffect, useState, useRef } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import debounce from "lodash.debounce";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

interface ClockTeasersProps {
  sectionName: string;
  teasers: Array<string>;
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
      transition: "all 1s ease-in",
      "&>img": { height: "100%", overflow: "auto" },
    },
  })
);
const ClockTeasers: FunctionComponent<ClockTeasersProps> = ({
  teasers,
  sectionName,
}) => {
  const classes = useStyles();
  const [teasersOrdered, setTeasersOrdered] = useState(teasers);
  const [src0, src1, src2, src3, src4] = teasersOrdered;

  const scrollHandler = (e) => {
    setTeasersOrdered((prev: ClockTeasersProps["teasers"]) => {
      const prevOrdered = [...prev];

      return [
        prevOrdered[1],
        prevOrdered[2],
        prevOrdered[3],
        prevOrdered[4],
        prevOrdered[0],
      ];
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(scrollHandler, 100), {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", scrollHandler, { passive: true });
    };
  }, []);

  return (
    <div className={classes.root}>
      <h3>{sectionName}</h3>
      <Grid container spacing={3}>
        <Grid justify="center" container spacing={3}>
          <Grid item xs={3}>
            <div className={classes.videoContainer}>
              <PlayCircleOutlineIcon />
              <img src={src0} />
            </div>
          </Grid>
        </Grid>

        <Grid justify="center" container spacing={3}>
          <Grid item xs={3}>
            <div className={classes.videoContainer}>
              <PlayCircleOutlineIcon />
              <img src={src1} />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.videoContainer}>
              <PlayCircleOutlineIcon />
              <img src={src2} />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.videoContainer}>
              <PlayCircleOutlineIcon />
              <img src={src3} />
            </div>
          </Grid>
        </Grid>

        <Grid container justify="center" spacing={3}>
          <Grid item xs={3}>
            <div className={classes.videoContainer}>
              <PlayCircleOutlineIcon />
              <img src={src4} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ClockTeasers;
