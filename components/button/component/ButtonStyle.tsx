import { css } from "styled-components";
import { colors, radiuss } from "../../_utils/variables";

const skeleton = css`
  border: none;
  cursor: inherit;
  color: transparent;
  background-color: #e2e5e7;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );
  background-size: 40px 100%;
  background-repeat: no-repeat;
  background-position: left -40px top 0;
  animation: shine 1s ease infinite;
  @keyframes shine {
    to {
      background-position: right -40px top 0;
    }
  }
`;

const icon = css`
  padding-left: 16px;
  .icon {
    width: 12px;
    color: ${colors.biru};
    margin-right: 8px;
  }
`;

const baseButtonStyle = css`
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.putih};
  font-weight: 600;
  font-size: 14px;
  background-position: center;
  border-radius: ${radiuss.md}px;
  background-color: ${colors.biru};
  border: none;
  transition: 0.2s ease;
  &:focus {
    outline: 0;
  }
`;

const rippleBase = css`
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #ffffff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }

  &:active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`;

const primary = css`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  ${rippleBase}
  &:hover {
    background-color: #53a7e0;
  }
`;

const text = css`
  background-color: initial;
  color: #3598db;
  border: none;
  ${rippleBase}
  &:hover {
    background-color: #EDF8FF;
  }
  &:after {
    background-image: radial-gradient(circle, #3598db 10%, transparent 10.01%);
  }
  &:focus {
    background: #EDF8FF;
  }
`;

const textDisabled = css`
  color: #888888;
  &:hover {
    background-color: #ffffff;
  }
`;

const secondary = css`
  color: ${colors.biru};
  background: ${colors.putih};
  border: 1.5px solid ${colors.biru};
  ${rippleBase}
  &:hover {
    background: #e4f4ff;
  }
  &:after {
    background-image: radial-gradient(circle, #3598db 10%, transparent 10.01%);
  }
`;

const secondaryDisabled = css`
  color: #888888;
  border-color: #888888;
  &:hover {
    background: #ffffff;
  }
`;

const success = css`
  background: #2dcc70;
  border-color: #2dcc70;
  ${rippleBase}
  &:hover {
    background: #4cd485;
  }
  &:focus {
    background: #61D994;
  }
`;

const error = css`
  background: #e84c3d;
  border-color: #e84c3d;
  ${rippleBase}
  &:hover {
    background: #eb675a;
  }
  &:focus {
    background: #ee796e;
  }
`;

export default {
  skeleton,
  icon,
  baseButtonStyle,
  rippleBase,
  primary,
  text,
  textDisabled,
  secondary,
  secondaryDisabled,
  success,
  error,
};
