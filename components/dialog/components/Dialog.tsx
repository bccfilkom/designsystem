import React, { useRef } from "react";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Button } from "../../button";

interface DialogProps {
  visible: boolean;
  title: string;
  footer?: ReactNode[];
  children: ReactNode;
  onCancel?: Function;
  type?: "list" | "input";
  confirmation?: boolean;
  primaryButton: {
    text: string;
    onClick: Function;
  };
  secondaryButton?: {
    text: string;
    onClick: Function;
  };
}

const primaryText = "#143045";
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
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.08);
  height: auto;
  border-radius: 10px;
  background: white;
`;

const Title = styled.h6`
  font-weight: 500;
  font-size: 20px;
  padding: 24px;
  margin: 0;
  color: ${primaryText};
  ${(props) =>
    props.type === "list" &&
    css`
      border-bottom: 1px solid #c0c0c0;
    `}
`;

const Content = styled.div`
  margin: 0px 12px;
  padding: 0 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${primaryText};
  ${(props) => {
    switch (props.type) {
      case "input": {
        return css`
          > div,
          input {
            width: 100%;
          }
        `;
      }
      case "list": {
        return css`
          min-height: 200px;
          max-height: 400px;
          overflow-y: auto;
          padding: 8px 12px;
          &::-webkit-scrollbar {
            width: 3px;
            border-radius: 13px;
          }
          &::-webkit-scrollbar-thumb {
            background: #d8d8d8;
          }
        `;
      }
    }
  }}
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 24px 16px 16px 0px;
  ${(props) =>
    props.type === "list" &&
    css`
      border-top: 1px solid #c0c0c0;
      padding-top: 16px;
    `}
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
    confirmation,
    visible,
    type,
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
          <Title type={type}>{title}</Title>
          <Content type={type}>{children}</Content>
          {confirmation && (
            <Footer type={type}>
              <Button onClick={primaryButton.onClick}>
                {primaryButton.text}
              </Button>
              {secondaryButton && (
                <Button type="text" onClick={secondaryButton.onClick}>
                  {secondaryButton.text}
                </Button>
              )}
            </Footer>
          )}
        </Container>
      </Wrapper>
    </>
  );
};

Dialog.defaultProps = {
  confirmation: true,
};

export default Dialog;
