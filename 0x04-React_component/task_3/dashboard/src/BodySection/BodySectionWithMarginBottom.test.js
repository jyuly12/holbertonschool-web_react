import { shallow} from "enzyme";
import React from "react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("<BodySectionWithMarginBottom />", () => {
  it("BodySectionWithMarginBottom ", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("functionality", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children</p>
      </BodySectionWithMarginBottom>
    );

    const BodySection = wrapper.find("BodySection");

    expect(BodySection).toHaveLength(1);
    expect(BodySection.props().title).toEqual("test title");

    const internalBody = BodySection.dive();

    const h2 = internalBody.find("h2");
    const p = internalBody.find("p");

    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual("test title");

    expect(p).toHaveLength(1);
    expect(p.text()).toEqual("test children");
  });
});