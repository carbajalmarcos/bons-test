import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../testUtils";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../../pages/Login";
import Gameboard from "../../pages/GameBoard";
import { MockedProvider } from "@apollo/react-testing";
import { createGameMock } from "../mocks";
import { CREATE_GAME } from "../../../model/mutations";
import { GET_GAME } from "../../../model/queries";
Enzyme.configure({
  adapter: new EnzymeAdapter(),
});
const setup = (mocks) => {
  return mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/gameboard" component={Gameboard} />
        </Switch>
      </Router>
    </MockedProvider>
  );
};

describe("app flow", () => {
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
});
