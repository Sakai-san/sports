// @ts-nocheck
import React, { FunctionComponent, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { CSSTransition } from "react-transition-group";
import Grid from "@material-ui/core/Grid";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";

import "./ClockTeasers.css";

interface ClockTeasersProps {
  sectionName: string;
  teasers: Array<string>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "50px",
    },
    "@keyframes fadeAnimation": {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    gridRow: {
      margin: "10px",
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
  const [inProp, setInProp] = useState(true);
  const classes = useStyles();
  const [src0, src1, src2, src3] = teasers;
  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <div className={classes.root}>
      <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <h3>{sectionName}</h3>
      </CSSTransition>

      <Grid container>
        <Grid item justify="center" container className={classes.gridRow}>
          <Grid item xs={7}>
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
