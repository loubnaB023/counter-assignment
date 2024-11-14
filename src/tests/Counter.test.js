// import necessary react testing library helpers here
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
// import the Counter component here
import Counter from "../components/Counter";

test("renders counter message", () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const header = screen.getByText(/Counter/i);
  expect(header).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);

  // Check if the count has incremented to 1
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);

  // Check if the count has decremented to -1
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("-1");
});
