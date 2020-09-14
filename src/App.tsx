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
          teasers={["#32a852", "#eb83cd", "#153c52", "#2e4534"]}
        />
        <ClockTeasers
          sectionName="Swiss league"
          teasers={["#0c7a29", "#a3a324", "#462647", "#736b6a"]}
        />
        <ClockTeasers
          sectionName="Amateur league"
          teasers={["#2d2f80", "#304541", "#c2aebc", "#7d5937"]}
        />
        <ClockTeasers
          sectionName="Related videos"
          teasers={["#aceefa", "#f2d9d8", "#403333", "#91838d"]}
        />
      </Container>
    </div>
  );
}

export default App;
