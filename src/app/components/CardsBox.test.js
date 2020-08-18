import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../test/testUtils";
import CardsBox from "./CardsBox";
import { cardsMock } from "../test/mocks";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const setup = (baseProps) => {
  return mount(<CardsBox {...baseProps} />);
};

test("card selection flow ", () => {
  const baseProps = {
    selected: cardsMock[1], // the selected card is the second
    setCard: jest.fn(),
    cards: cardsMock,
  };

  const wrapper = setup(baseProps);
  const element = findByTestAttr(wrapper, "set-selected-card");
  //...but, we clicking the first card
  element.first().simulate("click");

  expect(baseProps.setCard).toHaveBeenCalledTimes(1);
  expect(baseProps.setCard).toHaveBeenCalledWith(cardsMock[0]["id"]);
});
