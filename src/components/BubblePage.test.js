import React from "react";
import { render } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from './Bubbles'
test("Renders BubblePage without errors", () => {
  // Finish this test
  //1. Setup test for basic rendering of component
  render(<BubblePage/>)
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  render(<BubblePage/>)
  expect((<Bubbles/>).toBeInTheDocument)
});

//Task List

//2. Setup test for initial rendering of bubbles on loading