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
              SwissSports
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
                  "https://static5.depositphotos.com/1012338/418/v/950/depositphotos_4184789-stock-illustration-handball-poster.jpg",
                amount: 0.1,
              },
            ]}
            style={{
              height: "400px",
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
            "https://www.bote.ch/storage/image/4/2/5/7/1477524_fancybox_1rCRZ0_w0v326.jpg",
            "https://cdn.unitycms.io/image/ocroped/1200,1200,1000,1000,0,0/CBgXCp_6ivo/20pVGjfTKJNADHCg5u0ROq.jpg",
            "https://static.az-cdn.ch/__ip/_Ggl8-Ui_zusUgazYT5CHzdzX9g/4c0af02b9871906cb092109d430763838eb0bb7f/remote.adjust.rotate=0&remote.size.w=2000&remote.size.h=1125&local.crop.h=1125&local.crop.w=2000&local.crop.x=0&local.crop.y=0&r=0,n-ch12-16x9-far",
            "https://www.zdf.de/assets/hb-portugal-100~2400x1350?cb=1579717225234",
          ]}
        />
        <ClockTeasers
          sectionName="Swiss league"
          teasers={[
            "https://regiosport.ch/wp-content/uploads/2020/02/handball_1.liga_sv-fides-1.jpg",
            "https://sport-fan.ch/wp/wp-content/uploads/2015/02/Q3Q9770.jpg",
            "https://sport-fan.ch/wp/wp-content/uploads/2018/03/HCW_SCF.jpg",
            "https://c.nau.ch/i/KJOgp/1024/handballspieler-zelebriert-sein-tor.jpg",
          ]}
        />
        <ClockTeasers
          sectionName="Amateur leagues"
          teasers={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpsn8ENq6RrP-QjIWfeI5t4omMKtwNqWvcGw&usqp=CAU",
            "https://www.bielertagblatt.ch/sites/bielertagblatt.ch/files/styles/bt_teaser_large_landscape/hash/db/c2/dbc22911450dcc79b950d04b91502de9.jpg?itok=cfX014Fl",
            "https://docplayer.org/docs-images/105/167600255/images/5-0.jpg",
            "data:image/jpeg;base64,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",
          ]}
        />
        <ClockTeasers
          sectionName="Related videos"
          teasers={[
            "https://mauritiusdirectory.org/wp-content/uploads/2017/07/DEeO_feXgAEP7O5.jpg",
            "https://www.sueddeutsche.de/image/sz.1.4551655/704x396?v=1564854000",
            "https://www.visitbournemouth.com/images/beachhandball/beachhandball%205.jpg",
            "https://s2.dmcdn.net/v/NSjkz1Qt87T-sO6xz/x1080",
          ]}
        />
      </Container>
    </div>
  );
}

export default App;
