import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../test/testUtils";
import EntityPlayer from "./EntityPlayer";
import { monsterMock, playerMock } from "../test/mocks";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const setup = (baseProps) => {
  return mount(<EntityPlayer {...baseProps} />);
};
describe("Elements by entity", () => {
  test("check elements of the component when entity is a monster ", () => {
    const baseProps = {
      data: monsterMock,
    };

    const wrapper = setup(baseProps);
    const element = findByTestAttr(wrapper, "image-box");
    expect(element.children().length).toBe(1);
    expect(element.children().type()).toBe("img");
  });

  test("check elements of the component when entity is a player", () => {
    const baseProps = {
      data: playerMock,
    };

    const wrapper = setup(baseProps);
    const element = findByTestAttr(wrapper, "image-box");

    expect(element.children().length).toBe(0);
  });
});
