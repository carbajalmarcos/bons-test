import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../testUtils";
import Routes from "../../Routes";
import { MockedProvider } from "@apollo/react-testing";
import { createGameMock } from "../mocks";
import { CREATE_GAME } from "../../../model/mutations";
Enzyme.configure({
  adapter: new EnzymeAdapter(),
});
const setup = (mocks) => {
  return mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Routes />
    </MockedProvider>
  );
};
describe("some of testing to Login flow", () => {
  test("should render without error", () => {
    mount(
      <MockedProvider mocks={[]}>
        <Routes />
      </MockedProvider>
    );
  });

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

  test("should render loading spinner", () => {
    const loginMutationMock = [
      {
        request: {
          query: CREATE_GAME,
          variables: {
            name: "marcos",
          },
        },
        result: { data: createGameMock },
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
  });
});
