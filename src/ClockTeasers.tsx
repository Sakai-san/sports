// @ts-nocheck
import React, { FunctionComponent } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";

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
    title: {
      animation: "1s fadeAnimation",
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
  const classes = useStyles();
  const [src0, src1, src2, src3] = teasers;

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>{sectionName}</h3>
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
