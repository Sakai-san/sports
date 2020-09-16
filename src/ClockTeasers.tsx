import React, { FunctionComponent, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { ParallaxBanner } from "react-scroll-parallax";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import Modal from "react-modal";
import VisibilitySensor from "react-visibility-sensor";

import "./ClockTeasers.css";

const duration = 1000;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const defaultStyle = {
  transition: `opacity ${duration}ms ease-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: {
    opacity: 1,
  },
  entered: {
    opacity: 1,
  },
  exiting: {
    opacity: 0,
  },
  exited: {
    opacity: 0,
  },
};

interface ClockTeasersProps {
  sectionName: string;
  teasers: Array<string>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "50px",
      "&>h3": {
        marginLeft: "10px",
      },
    },
    gridRow: {
      margin: "10px",
    },
    videoContainer: {
      cursor: "pointer",
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

Modal.setAppElement("#root");

const ClockTeasers: FunctionComponent<ClockTeasersProps> = ({
  teasers,
  sectionName,
}) => {
  const classes = useStyles();
  const [src0, src1, src2, src3] = teasers;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isInViewport, setIsInViewport] = useState<boolean>(false);
  const [isTitleInViewport, setIsTitleInViewport] = useState<boolean>(false);

  const onChange = (isVisible: boolean) => setIsInViewport(isVisible);
  const onChangeTitle = (isVisible: boolean) => setIsTitleInViewport(isVisible);

  return (
    <VisibilitySensor partialVisibility onChange={onChange}>
      <div
        className={`${classes.root} ${
          isInViewport ? "fade-enter-active" : "fade-exit-active"
        }`}
      >
        <VisibilitySensor onChange={onChangeTitle}>
          <h3
            className={
              isTitleInViewport ? "move-enter-active" : "move-exit-active"
            }
            style={
              isTitleInViewport
                ? { transform: "translateY(10px)" }
                : { transform: "translateY(-10px)" }
            }
          >
            {sectionName}
          </h3>
        </VisibilitySensor>

        <ParallaxBanner
          layers={[
            {
              props: { style: { opacity: 0.2 } },
              image: src0,
              amount: 0.1,
            },
          ]}
          style={{
            height: "500px",
          }}
        >
          <Grid container>
            <Grid item justify="center" container className={classes.gridRow}>
              <Grid item xs={7}>
                <div
                  className={classes.videoContainer}
                  style={{ height: "300px" }}
                  onClick={() => setIsOpen(true)}
                >
                  {isOpen ? (
                    <Modal
                      isOpen={isOpen}
                      onRequestClose={() => setIsOpen(false)}
                      style={customStyles}
                    >
                      <>
                        <button
                          style={{ display: "none" }}
                          onClick={() => setIsOpen(false)}
                        >
                          close
                        </button>
                        <iframe
                          width={(600 * 3) / 2}
                          height={600}
                          src="https://www.youtube.com/embed/nmdK3SDZTSM?autoplay=1"
                          // @ts-ignore
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        />
                      </>
                    </Modal>
                  ) : (
                    <>
                      <div className={classes.iconWrapper}>
                        <PlayCircleOutlineOutlinedIcon
                          style={{ fontSize: 50 }}
                        />
                      </div>
                      <img src={src0} />
                    </>
                  )}
                </div>
              </Grid>
            </Grid>

            <Grid item justify="center" container className={classes.gridRow}>
              <Grid item xs={3}>
                <div
                  className={classes.videoContainer}
                  style={{ height: "100px" }}
                  onClick={() => setIsOpen(true)}
                >
                  {isOpen ? (
                    <Modal
                      isOpen={isOpen}
                      onRequestClose={() => setIsOpen(false)}
                      style={customStyles}
                    >
                      <>
                        <button
                          style={{ display: "none" }}
                          onClick={() => setIsOpen(false)}
                        >
                          close
                        </button>
                        <iframe
                          width={(600 * 3) / 2}
                          height={600}
                          src="https://www.youtube.com/embed/nmdK3SDZTSM?autoplay=1"
                          // @ts-ignore
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        />
                      </>
                    </Modal>
                  ) : (
                    <>
                      <div className={classes.iconWrapper}>
                        <PlayCircleOutlineOutlinedIcon />
                      </div>
                      <img src={src1} />
                    </>
                  )}
                </div>
              </Grid>
              <Grid item xs={3}>
                <div
                  className={classes.videoContainer}
                  style={{ height: "100px" }}
                  onClick={() => setIsOpen(true)}
                >
                  {isOpen ? (
                    <Modal
                      isOpen={isOpen}
                      onRequestClose={() => setIsOpen(false)}
                      style={customStyles}
                    >
                      <>
                        <button
                          style={{ display: "none" }}
                          onClick={() => setIsOpen(false)}
                        >
                          close
                        </button>
                        <iframe
                          width={(600 * 3) / 2}
                          height={600}
                          src="https://www.youtube.com/embed/nmdK3SDZTSM?autoplay=1"
                          // @ts-ignore
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        />
                      </>
                    </Modal>
                  ) : (
                    <>
                      <div className={classes.iconWrapper}>
                        <PlayCircleOutlineOutlinedIcon />
                      </div>
                      <img src={src2} />
                    </>
                  )}
                </div>
              </Grid>
              <Grid item xs={3}>
                <div
                  className={classes.videoContainer}
                  style={{ height: "100px" }}
                  onClick={() => setIsOpen(true)}
                >
                  {isOpen ? (
                    <Modal
                      isOpen={isOpen}
                      onRequestClose={() => setIsOpen(false)}
                      style={customStyles}
                    >
                      <>
                        <button
                          style={{ display: "none" }}
                          onClick={() => setIsOpen(false)}
                        >
                          close
                        </button>
                        <iframe
                          width={(600 * 3) / 2}
                          height={600}
                          src="https://www.youtube.com/embed/nmdK3SDZTSM?autoplay=1"
                          // @ts-ignore
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        />
                      </>
                    </Modal>
                  ) : (
                    <>
                      <div className={classes.iconWrapper}>
                        <PlayCircleOutlineOutlinedIcon />
                      </div>
                      <img src={src3} />
                    </>
                  )}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </ParallaxBanner>
      </div>
    </VisibilitySensor>
  );
};

export default ClockTeasers;
