import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../testUtils";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../../pages/Login";
import { MockedProvider } from "@apollo/react-testing";
import { createGameMock } from "../mocks";
import { CREATE_GAME } from "../../../model/mutations";
Enzyme.configure({
  adapter: new EnzymeAdapter(),
});
const setup = (mocks) => {
  return mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </MockedProvider>
  );
};

describe("some of login flow test ", () => {
  test("name empty", () => {
    const loginMutationMock = [
      {
        request: {
          query: CREATE_GAME,
          variables: {
            name: "marcos",
          },
        },
        result: () => {
          return {
            data: createGameMock,
          };
        },
      },
    ];

    const wrapper = setup(loginMutationMock);
    const input = findByTestAttr(wrapper, "login-name");
    const mockEvent = { target: { value: "" } };

    input.first().simulate("change", mockEvent);

    const element = findByTestAttr(wrapper, "login-button");
    element.first().simulate("click");

    // let spinner = findByTestAttr(wrapper, "login-spinner");
    // expect(spinner.type().name).toEqual("Spinner");
    expect(wrapper.children().debug()).not.toContain("Spinner");
  });

  test("loding test", async () => {
    const loginMutationMock = [
      {
        request: {
          query: CREATE_GAME,
          variables: {
            name: "marcos",
          },
        },
        result: () => {
          return {
            data: createGameMock,
          };
        },
      },
    ];

    const wrapper = setup(loginMutationMock);
    const input = findByTestAttr(wrapper, "login-name");
    const mockEvent = { target: { value: "marcos" } };

    input.first().simulate("change", mockEvent);

    const element = findByTestAttr(wrapper, "login-button");
    element.first().simulate("click");

    // let spinner = findByTestAttr(wrapper, "login-spinner");
    // expect(spinner.type().name).toEqual("Spinner");
    expect(wrapper.children().debug()).toContain("Spinner");
    await new Promise((resolver) => setTimeout(resolver, 0));
    wrapper.update();
    expect(wrapper.children().debug()).not.toContain("Spinner");
  });
});
