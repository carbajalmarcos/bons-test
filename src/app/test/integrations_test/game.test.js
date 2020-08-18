import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../testUtils";
import Gameboard from "../../pages/GameBoard";
import { createGameMock, nextTurn } from "../mocks";
import { GET_GAME } from "../../../model/queries";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// inilizing test cache
const cache = new InMemoryCache({ addTypename: false });

const client = new ApolloClient({
  cache,
});

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const setup = () => {
  //mocking cache
  client.writeQuery({
    query: GET_GAME,
    data: createGameMock,
  });
  return mount(
    <ApolloProvider client={client}>
      <Gameboard />
    </ApolloProvider>
  );
};

describe("app flow", () => {
  test("checking load data", async () => {
    const wrapper = setup();

    await new Promise((resolver) => setTimeout(resolver, 0));
    wrapper.update();
    let element = findByTestAttr(wrapper, "set-selected-card");
    expect(element.length).toBe(3);
    element = findByTestAttr(wrapper, "entity-name");
    expect(element.children().first().text()).toEqual("marcos");
    expect(element.children().last().text()).toEqual("Cthulhu");
  });

  test("next turn ", async () => {
    const wrapper = setup();

    client.writeQuery({
      query: GET_GAME,
      data: nextTurn,
    });

    let element = findByTestAttr(wrapper, "past-label");
    expect(element.children().text()).toEqual("--");
    await new Promise((resolver) => setTimeout(resolver, 0));
    wrapper.update();
    element.first().simulate("click");
    wrapper.update();
    element = findByTestAttr(wrapper, "past-label");
    expect(element.text()).toEqual("0");
    element = findByTestAttr(wrapper, "turns-left");
    expect(element.text()).toEqual("19");
  });
});
