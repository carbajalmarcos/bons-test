import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../test/testUtils";
import Modal from "./Modal";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const setup = (baseProps) => {
  return mount(<Modal {...baseProps} />);
};

test("Checking function and modal elements ", () => {

  const baseProps = {
    content: <p>Hola mundo</p>,
    onClose: jest.fn(),
  };

  const wrapper = setup(baseProps);
  let element = findByTestAttr(wrapper, "close-button");
  element.first().simulate("click");

  expect(baseProps.onClose).toHaveBeenCalledTimes(1);

  element = findByTestAttr(wrapper, "modal-content");
  expect(element.children().first().type()).toEqual("p");
  expect(element.children().first().text()).toEqual("Hola mundo");
});
