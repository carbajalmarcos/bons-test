import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../test/testUtils";
import TurnDashboard from "./TurnDashboard";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const setup = (baseProps) => {
  return mount(<TurnDashboard {...baseProps} />);
};
describe("Checking TurnDashboard component", () => {
  test("function and past label when current property is 0", () => {
    const baseProps = {
      current: 0,
      left: 20,
      nextTurn: jest.fn(),
    };

    const wrapper = setup(baseProps);
    let element = findByTestAttr(wrapper, "next-button");
    element.first().simulate("click");

    expect(baseProps.nextTurn).toHaveBeenCalledTimes(1);

    element = findByTestAttr(wrapper, "past-label");

    expect(element.children().text()).toEqual("--");
  });

  test("...when current propery is 4", () => {
    const baseProps = {
      current: 4,
      left: 16,
      nextTurn: jest.fn(),
    };

    const wrapper = setup(baseProps);
    const element = findByTestAttr(wrapper, "past-label");

    expect(element.children().text()).toEqual("3");
  });
});
