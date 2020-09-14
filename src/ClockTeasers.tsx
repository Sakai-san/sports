// @ts-nocheck
import React, { FunctionComponent, useEffect, useState, useRef } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import debounce from "lodash.debounce";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import { relative } from "path";

interface ClockTeasersProps {
  sectionName: string;
  teasers: Array<string>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    gridRow: {
      margin: "10px",
    },
    paper: {
      height: "50px",
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    videoContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.2s ease-in-out",
      "&>img": { height: "100%", overflow: "auto" },
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    iconWrapper: {
      position: "absolute",
      "&>svg": { color: "white" },
    },
  })
);
const ClockTeasers: FunctionComponent<ClockTeasersProps> = ({
  teasers,
  sectionName,
}) => {
  const classes = useStyles();
  const [teasersOrdered, setTeasersOrdered] = useState(teasers);
  const [src0, src1, src2, src3] = teasersOrdered;

  const scrollHandler = (e) => {
    setTeasersOrdered((prev: ClockTeasersProps["teasers"]) => {
      const prevOrdered = [...prev];

      return [prevOrdered[1], prevOrdered[2], prevOrdered[3], prevOrdered[0]];
    });
  };
  /*
  useEffect(() => {
    window.addEventListener("scroll", debounce(scrollHandler, 100), {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", scrollHandler, { passive: true });
    };
  }, []);
  */

  return (
    <div className={classes.root}>
      <h3>{sectionName}</h3>
      <Grid container>
        <Grid item justify="center" container className={classes.gridRow}>
          <Grid item xs={12}>
            <div className={classes.videoContainer} style={{ height: "300px" }}>
              <div className={classes.iconWrapper}>
                <PlayCircleOutlineOutlinedIcon style={{ fontSize: 50 }} />
              </div>
              <img src={src0} />
            </div>
          </Grid>
        </Grid>

        <Grid item justify="center" container className={classes.gridRow}>
          <Grid item xs={3}>
            <div className={classes.videoContainer} style={{ height: "100px" }}>
              <div className={classes.iconWrapper}>
                <PlayCircleOutlineOutlinedIcon />
              </div>
              <img src={src1} />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.videoContainer} style={{ height: "100px" }}>
              <div className={classes.iconWrapper}>
                <PlayCircleOutlineOutlinedIcon />
              </div>
              <img src={src2} />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.videoContainer} style={{ height: "100px" }}>
              <div className={classes.iconWrapper}>
                <PlayCircleOutlineOutlinedIcon />
              </div>
              <img src={src3} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ClockTeasers;
