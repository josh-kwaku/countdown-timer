import React from "react";
import Form from "../components/form";

import renderer from "react-test-renderer";

describe("<Form/> test", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Form
          startCountdown={() => {}}
          pauseCountdown={() => {}}
          minuteCounter={9}
          secondCounter={59}
          isDone={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
