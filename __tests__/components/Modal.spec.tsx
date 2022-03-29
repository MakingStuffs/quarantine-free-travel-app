import { render, screen } from "utils/testing";
import { Modal } from "components";

const MODAL_ID = "test-modal";
const MODAL_BUTTON_ID = "modal-trigger";

describe("Modal", () => {
  it("will render a modal and a button", () => {
    const { baseElement } = render(
      <Modal data-testid={MODAL_ID} openButtonId={MODAL_BUTTON_ID}></Modal>
    );
    expect(screen.getByTestId(MODAL_ID)).toBeInTheDocument();
    expect(
      baseElement.querySelector(`#${MODAL_BUTTON_ID}`)
    ).toBeInTheDocument();
  });
});
