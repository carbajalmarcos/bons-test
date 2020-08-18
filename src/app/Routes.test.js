import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "./test/testUtils";
import Routes from "./Routes";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const setup = () => {
  return mount(<Routes />);
};

test("Routes", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "app-component");

  expect(component.length).toBe(1);
});
