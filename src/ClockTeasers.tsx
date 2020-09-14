import React, { FunctionComponent } from "react";

interface ClockTeasersProps {
  teasers?: any[];
}

const ClockTeasers: FunctionComponent<ClockTeasersProps> = ({ teasers }) => {
  return (
    <div>
      <div>Teaser 1</div>
      <div>
        <div>Teaser 2</div>
        <div>Teaser 3</div>
        <div>Teaser 4</div>
      </div>
      <div>Teaser 5</div>
    </div>
  );
};

export default ClockTeasers;
