import React from "react";
import Container from "@material-ui/core/Container";
import ClockTeasers from "./ClockTeasers";

function App() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
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
