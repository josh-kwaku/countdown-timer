import React from "react";
import Speedup from "../components/speedup";

import renderer from "react-test-renderer";

describe("<Speedup/> test", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Speedup
          minuteCounter={9}
          secondCounter={59}
          speedUp={1.9}
          isCountingDown={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
