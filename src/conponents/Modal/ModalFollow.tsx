import { ReactNode } from "react";
import { ModalTitle } from "react-bootstrap";
import { Modal, ModalBody } from "reactstrap";
import styled from "styled-components";

interface GlobalModalProps {
  children: ReactNode;
  id: string;
  toggle: () => void;
  title: string;
}
function ModalFollow({ children, id, toggle, title }: GlobalModalProps) {
  return (
    <ModalStyled
      isOpen={!!id}
      toggle={toggle}
      centered
      className="modal border-none"
    >
      <div className="">
        <ModalBody className="p-0 d-flex flex-column">
          <ModalTitle className="text-center h6 py-2 title">{title}</ModalTitle>
          {children}
        </ModalBody>
      </div>
    </ModalStyled>
  );
}

const ModalStyled = styled(Modal)`
  width: 300px;
  height: 350px;
  max-width: none !important;
  .modal-body {
    height: 350px;

    img {
      object-fit: cover;
    }
  }
  .modal-content {
    border: none;
    .modal-header > .modal-title {
      font-size: 16px;
    }
  }
  .modal-backdrop.show {
    opacity: 0.85;
  }
  .title {
    border-bottom: 1px solid rgba(219, 219, 219, 1);
  }
  a {
    color: #212529;
    text-decoration: none;
  }
`;
const AvatarStyled = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
`;

export default ModalFollow;
