import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import allReducers from "./reducers";
import { shallow, mount } from "enzyme";
import React, { Component, Fragment } from "react";
const store = createStore(
  allReducers
  // applyMiddleware(logger)
);

Enzyme.configure({ adapter: new Adapter() });
export const renderWithStore=(Component)=>(
    mount(
    <Provider store={store}>
        <Component />
      </Provider>
    )
);