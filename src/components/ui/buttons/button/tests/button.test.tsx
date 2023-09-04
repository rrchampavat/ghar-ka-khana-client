import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "..";

describe("Button Test", () => {
  it("Button should have Submit text", () => {
    const { container } = render(<Button>Submit</Button>);

    expect(container.querySelector("button")?.textContent).toBe("Submit");
  });

  it("Button should be disabled", () => {
    const { container } = render(<Button disabled></Button>);

    expect(container.querySelector("button")?.disabled).toBeTruthy();
  });

  // it("Button should react to click event", () => {
  //   render(<Button onClick={() => console.log("Clicked")}>Submit</Button>);

  //   const button = screen.getByRole("button");

  //   fireEvent.click(button);
  // });

  // it("Button width should be 100%", () => {
  //   const { container } = render(<Button fullWidth>Submit</Button>);

  //   expect(container.querySelector("button")?.offsetWidth).toBe("100%");
  // });
});
