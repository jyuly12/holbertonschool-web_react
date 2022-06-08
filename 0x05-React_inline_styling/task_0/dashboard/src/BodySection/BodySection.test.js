import { shallow } from "enzyme";
import React from "react";
import BodySection from "./BodySection";

describe("<BodySection />", () => {
  it("BodySection renders", () => {
    shallow(<BodySection />);
  });

  it("BodySection renders", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children</p>
      </BodySection>
    );

    const h2 = wrapper.find("h2");
    const p = wrapper.find("p");

    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual("test title");

    expect(p).toHaveLength(1);
    expect(p.text()).toEqual("test children");
  });
});