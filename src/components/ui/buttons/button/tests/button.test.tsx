import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "..";

describe("Button Test", () => {
  it("Button should have Submit text", () => {
    const { container } = render(<Button>Submit</Button>);

    expect(container.querySelector("button")?.textContent).toBe("Submit");
  });

  it("Button should be disabled", () => {
    const { container } = render(<Button disabled={true}>Submit</Button>);

    expect(container.querySelector("button")?.disabled).toBeTruthy();
  });
});
