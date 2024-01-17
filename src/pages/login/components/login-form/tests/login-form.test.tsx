import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LoginForm from "..";

describe("Login form", () => {
  it("Should render the components", () => {
    render(<LoginForm />);

    expect(screen.getByTestId("form-header")?.textContent).toBe(
      "Welcome to DUKAAN"
    );
    expect(screen.getByTestId("form-headline")?.textContent).toBe(
      "Your go to online shop"
    );

    expect(screen.getByTestId("email-label")?.textContent).toBe("Email");
    expect(screen.getByTestId("email-input")?.textContent).toBe("");

    expect(screen.getByTestId("password-label")?.textContent).toBe("Password");
    expect(screen.getByTestId("password-input")?.textContent).toBe("");

    expect(screen.getByTestId("submit-btn")?.textContent).toBe("Login");

    expect(screen.getByTestId("register-label")?.textContent).toBe(
      "New to DUKAAN?"
    );
    expect(screen.getByTestId("register-anchor")?.textContent).toBe(
      "Create an account"
    );
  });

  it("Input field change event", () => {
    render(<LoginForm />);

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");

    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");

    fireEvent.change(emailInput, {
      target: { value: "Test@gmail.com" }
    });

    fireEvent.change(passwordInput, {
      target: { value: "Test@123" }
    });

    expect(emailInput.value).toBe("Test@gmail.com");
    expect(passwordInput.value).toBe("Test@123");
  });
});
