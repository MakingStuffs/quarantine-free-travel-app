import { EventHandler, HTMLAttributes, useState } from "react";
import styled from "styled-components";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  openLabel?: string;
  openCallback?: () => void;
  closeCallback?: () => void;
  genericCallback?: () => void;
  openButtonId: string;
}

const Modal: React.FC<ModalProps> = ({
  openCallback,
  closeCallback,
  genericCallback,
  openButtonId,
  openLabel,
  children,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal: React.MouseEventHandler<HTMLSpanElement> = (
    e: React.MouseEvent<HTMLSpanElement>
  ) => {
    if (isOpen) {
      setIsOpen(false);
      if (!!openCallback) openCallback();
    } else {
      setIsOpen(true);
      if (!!closeCallback) closeCallback();
    }
    if (!!genericCallback) genericCallback();
  };

  return (
    <>
      <StyledModal aria-hidden={!isOpen} {...rest}>
        <span
          aria-label={`Close ${rest.id ? rest.id : "modal"}`}
          onClick={toggleModal}
        ></span>
        <StyledModalBody>
          <StyledModalContent>{children}</StyledModalContent>
        </StyledModalBody>
      </StyledModal>
      <StyledButton id={openButtonId} onClick={toggleModal}>
        {openLabel ? openLabel : "Open Modal"}
      </StyledButton>
    </>
  );
};

const StyledModal = styled.aside``;

const StyledModalBody = styled.div``;

const StyledModalContent = styled.div``;

const StyledButton = styled.button``;

export { Modal };
