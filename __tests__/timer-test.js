import React from "react";
import Timer from "../components/timer";

import renderer from "react-test-renderer";

describe("<Timer/> test", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Timer
          minuteCounter={9}
          secondCounter={59}
          isTenSecsLeft={false}
          isTwentySecsLeft={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
