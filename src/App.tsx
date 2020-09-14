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
            "https://www.ticketcorner.ch/obj/media/CH-eventim/galery/kuenstler/s/schweizer-handball-nationalmannschaft-12.jpg",
            "https://www.srf.ch/static/cms/images/branded_srf_sport/32e0fd.jpg",
            "https://static.az-cdn.ch/__ip/LNrACSImmpoguhKyRhOPxQ33d9k/c7b6ae412f04d54370632a2b6112277e490ee017/n-wide2x-16x9-far",
            "https://www.ndr.de/sport/handball/stegefelt100_v-contentgross.jpg",
          ]}
        />
      </Container>
    </div>
  );
}

export default App;
