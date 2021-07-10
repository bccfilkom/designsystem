import React, { useRef } from "react";
import { ReactNode } from "react";
import styled from "styled-components";
import { Button } from "../../button";

interface DialogProps {
  visible: boolean;
  title: string;
  footer?: ReactNode[];
  children: ReactNode;
  onCancel?: Function;
  primaryButton: {
    text: string;
    onClick: Function;
  };
  secondaryButton?: {
    text: string;
    onClick: Function;
  };
}

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: all 0.3s;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  @media screen and (min-width: 576px) {
    width: 296px;
  }

  @media screen and (min-width: 768px) {
    width: 480px;
  }

  @media screen and (min-width: 1200px) {
    width: 560px;
  }

  height: auto;
  border-radius: 10px;
  background: white;
`;

const Content = styled.div`
  margin: 24px;
  font-weight: 400;
  font-size: 14px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0 16px 16px 0px;
  > * {
    margin-left: 8px;
  }
`;

const _getClickPosition = (e: MouseEvent) => {
  return {
    x: e.pageX,
    y: e.pageY,
  };
};

const Dialog = (props: DialogProps) => {
  const {
    title,
    children,
    primaryButton,
    secondaryButton,
    visible,
    onCancel,
  } = props;
  const dialogRef = useRef();

  const onWrapperClick = (e: MouseEvent) => {
    const clickPosition = _getClickPosition(e);
    const dialog: HTMLElement = dialogRef.current;
    const boundingRect = dialog.getBoundingClientRect();
    if (
      !(
        clickPosition.x >= boundingRect.x &&
        clickPosition.x <= boundingRect.x + boundingRect.width &&
        clickPosition.y >= boundingRect.y &&
        clickPosition.y <= boundingRect.y + boundingRect.height
      )
    ) {
      onCancel?.();
    }
  };

  return (
    <>
      <Wrapper visible={visible} onClick={onWrapperClick}>
        <Container ref={dialogRef}>
          <h6 style={{ margin: "24px 24px 0 24px" }}>{title}</h6>
          <Content>{children}</Content>
          <Footer>
            <Button onClick={primaryButton.onClick}>
              {primaryButton.text}
            </Button>
            {secondaryButton && (
              <Button type="text" onClick={secondaryButton.onClick}>
                {secondaryButton.text}
              </Button>
            )}
          </Footer>
        </Container>
      </Wrapper>
    </>
  );
};

export default Dialog;
