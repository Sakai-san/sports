import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import { ParallaxBanner } from "react-scroll-parallax";
import Paper from "@material-ui/core/Paper";
import ClockTeasers from "./ClockTeasers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    container: {
      marginTop: "10px",
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Container className={classes.container}>
        <Paper elevation={3}>
          <ParallaxBanner
            layers={[
              {
                image:
                  "https://www.handball.ch/media/7851/awa_handshvoym-2-_bildgroesse-aendern.jpg?width=2280&preferFocalPoint=false&useCropDimensions=false&maxwidth=2500&maxheight=2500&quality=80&lazyload=true&lazyloadPixelated=false&c.focalPoint=0.5%2C0.5&mode=crop&c.finalmode=crop&c.zoom=false",
                amount: 0.2,
              },
            ]}
            style={{
              height: "500px",
            }}
          ></ParallaxBanner>
        </Paper>
        <ClockTeasers
          sectionName="Featured videos"
          teasers={[
            "https://www.ticketcorner.ch/obj/media/CH-eventim/galery/kuenstler/s/schweizer-handball-nationalmannschaft-12.jpg",
            "https://www.srf.ch/static/cms/images/branded_srf_sport/32e0fd.jpg",
            "https://static.az-cdn.ch/__ip/LNrACSImmpoguhKyRhOPxQ33d9k/c7b6ae412f04d54370632a2b6112277e490ee017/n-wide2x-16x9-far",
            "https://www.ndr.de/sport/handball/stegefelt100_v-contentgross.jpg",
          ]}
        />

        <ClockTeasers
          sectionName="National-mannschaft"
          teasers={[
            "https://www.ticketcorner.ch/obj/media/CH-eventim/galery/kuenstler/s/schweizer-handball-nationalmannschaft-12.jpg",
            "https://www.srf.ch/static/cms/images/branded_srf_sport/32e0fd.jpg",
            "https://static.az-cdn.ch/__ip/LNrACSImmpoguhKyRhOPxQ33d9k/c7b6ae412f04d54370632a2b6112277e490ee017/n-wide2x-16x9-far",
            "https://www.ndr.de/sport/handball/stegefelt100_v-contentgross.jpg",
          ]}
        />
        <ClockTeasers
          sectionName="Swiss league"
          teasers={[
            "https://www.ticketcorner.ch/obj/media/CH-eventim/galery/kuenstler/s/schweizer-handball-nationalmannschaft-12.jpg",
            "https://www.srf.ch/static/cms/images/branded_srf_sport/32e0fd.jpg",
            "https://static.az-cdn.ch/__ip/LNrACSImmpoguhKyRhOPxQ33d9k/c7b6ae412f04d54370632a2b6112277e490ee017/n-wide2x-16x9-far",
            "https://www.ndr.de/sport/handball/stegefelt100_v-contentgross.jpg",
            "https://www.zak.de/Bilder/Oddur-Gretarsson-und-der-HBW-Balingen-Weilstetten-steigen-113365.jpg",
          ]}
        />
        <ClockTeasers
          sectionName="Amateur league"
          teasers={[
            "https://www.ticketcorner.ch/obj/media/CH-eventim/galery/kuenstler/s/schweizer-handball-nationalmannschaft-12.jpg",
            "https://www.srf.ch/static/cms/images/branded_srf_sport/32e0fd.jpg",
            "https://static.az-cdn.ch/__ip/LNrACSImmpoguhKyRhOPxQ33d9k/c7b6ae412f04d54370632a2b6112277e490ee017/n-wide2x-16x9-far",
            "https://www.ndr.de/sport/handball/stegefelt100_v-contentgross.jpg",
          ]}
        />
        <ClockTeasers
          sectionName="Related videos"
          teasers={[
            "https://juntanlaycosports.com/img/s/v-10/p3014362453-3.jpg",
            "https://www.sueddeutsche.de/image/sz.1.4551655/704x396?v=1564854000",
            "https://lh3.googleusercontent.com/proxy/sCIYVhPC8Gzh-XyyFKFnmXnPwLBuJUkZaSVgz_9ktAqy4pzjXNd3pcIaZJg7AyHh5LNpCK71kxeDsyNYhkzGBKnUzctSqjIBFjoeFYMvI-mpmBi8nuH1saKa73quT7qwLp5WlL47dY26VEdvKLGoztLw",
            "https://s2.dmcdn.net/v/NSjkz1Qt87T-sO6xz/x1080",
          ]}
        />
      </Container>
    </div>
  );
}

export default App;
