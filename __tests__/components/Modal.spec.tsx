import { render, screen } from "utils/testing";
import { Modal } from "components";

const MODAL_ID = "test-modal";
const MODAL_BUTTON_ID = "modal-trigger";

describe("Modal", () => {
  it("will render a modal and a button and a modal", () => {
    render(
      <Modal
        data-testid={MODAL_ID}
        buttonAttributes={{
          ["data-testid" as keyof HTMLButtonElement]: MODAL_BUTTON_ID,
        }}
      ></Modal>
    );
    expect(screen.getByTestId(MODAL_ID)).toBeInTheDocument();
    expect(screen.getByTestId(MODAL_BUTTON_ID)).toBeInTheDocument();
  });

  it("will label the modal as aria-hidden by default", () => {
    render(
      <Modal
        data-testid={MODAL_ID}
        buttonAttributes={{
          ["data-testid" as keyof HTMLButtonElement]: MODAL_BUTTON_ID,
        }}
      ></Modal>
    );
    const modal = screen.getByTestId(MODAL_ID);
    expect(modal).toHaveAttribute("aria-hidden");
    expect(modal.getAttribute("aria-hidden")).toBe("true");
  });

  it("will not label the button as aria-disabled by default", () => {
    render(
      <Modal
        data-testid={MODAL_ID}
        buttonAttributes={{
          ["data-testid" as keyof HTMLButtonElement]: MODAL_BUTTON_ID,
        }}
      ></Modal>
    );
    const button = screen.getByTestId(MODAL_BUTTON_ID);
    expect(button).toHaveAttribute("aria-disabled");
    expect(button.getAttribute("aria-disabled")).toBe("false");
  });

  it("will change the modal's aria-hidden value when the button is clicked", () => {
    render(
      <Modal
        data-testid={MODAL_ID}
        buttonAttributes={{
          ["data-testid" as keyof HTMLButtonElement]: MODAL_BUTTON_ID,
        }}
      ></Modal>
    );
    const modal = screen.getByTestId(MODAL_ID);
    const button = screen.getByTestId(MODAL_BUTTON_ID);
    expect(modal).toHaveAttribute("aria-hidden");
    expect(modal.getAttribute("aria-hidden")).toBe("true");
    button.click();
    expect(modal.getAttribute("aria-hidden")).toBe("false");
  });

  it("will disable the button when the modal is not aria-hidden", () => {
    render(
      <Modal
        data-testid={MODAL_ID}
        buttonAttributes={{
          ["data-testid" as keyof HTMLButtonElement]: MODAL_BUTTON_ID,
        }}
      ></Modal>
    );
    const modal = screen.getByTestId(MODAL_ID);
    const button = screen.getByTestId(MODAL_BUTTON_ID);

    expect(modal.getAttribute("aria-hidden")).toBe("true");
    expect(button.getAttribute("aria-disabled")).toBe("false");
    button.click();
    expect(modal.getAttribute("aria-hidden")).toBe("false");
    expect(button.getAttribute("aria-disabled")).toBe("true");
  });

  it("will not toggle the modal if the button is aria-disabled", () => {
    render(
      <Modal
        data-testid={MODAL_ID}
        buttonAttributes={{
          ["data-testid" as keyof HTMLButtonElement]: MODAL_BUTTON_ID,
        }}
      ></Modal>
    );
    const modal = screen.getByTestId(MODAL_ID);
    const button = screen.getByTestId(MODAL_BUTTON_ID);

    expect(modal.getAttribute("aria-hidden")).toBe("true");
    expect(button.getAttribute("aria-disabled")).toBe("false");
    button.click();
    expect(modal.getAttribute("aria-hidden")).toBe("false");
    expect(button.getAttribute("aria-disabled")).toBe("true");
    button.click();
    expect(modal.getAttribute("aria-hidden")).toBe("false");
    expect(button.getAttribute("aria-disabled")).toBe("true");
  });
});
