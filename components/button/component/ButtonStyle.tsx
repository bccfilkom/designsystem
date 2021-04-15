import { css } from "styled-components";
import { colors, radiuss } from "../../_utils/variables";

export default {
  skeleton: css`
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
  `,
  icon: css`
    padding-left: 16px;
    .icon {
      width: 12px;
      color: ${colors.biru};
      margin-right: 8px;
    }
  `,
  baseButtonStyle: css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.putih};
    font-weight: 600;
    font-size: 14px;
    background-position: center;
    background-color: ${colors.biru};
    border-radius: ${radiuss.md}px;
    border: 1.5px solid ${colors.biru};
    &:focus {
      outline: 0;
    }
    transition: background 0.8s;
  `,
  primary: css`
    &:hover {
      background: #3598DB
        radial-gradient(circle, transparent 1%, #3598DB 1%)
        center/15000%;
    }
    &:active {
      background-color: #53A7E0;
      background-size: 100%;
      transition: background 0s;
    }
  `,
  text: css`
    color: ${colors.biru};
    border-color: ${colors.white};
    background-color: ${colors.putih};
    &:hover {
      background: ${colors.putih}
        radial-gradient(circle, transparent 1%, ${colors.putih} 1%)
        center/15000%;
    }
    &:active {
      background-color: #e4f4ff;
      background-size: 100%;
      transition: background 0s;
    }
  `,
  textDisabled: css`
    color: #888888;
  `,
  secondary: css`
    color: ${colors.biru};
    background: ${colors.putih};
    &:hover {
      background: ${colors.putih}
        radial-gradient(circle, transparent 1%, ${colors.putih} 1%)
        center/15000%;
    }
    &:active {
      background-color: #e4f4ff;
      background-size: 100%;
      transition: background 0s;
    }
  `,
  secondaryDisabled: css`
    color: #888888;
    border-color: #888888;
  `,
  success: css`
    background: #2dcc70;
    border-color: #2dcc70;
    &:hover {
      background: #2dcc70 radial-gradient(circle, transparent 1%, #2dcc70 1%)
        center/15000%;
    }
    &:active {
      background-color: #4cd485;
      background-size: 100%;
      transition: background 0s;
    }
  `,
  error: css`
    background: #e84c3d;
    border-color: #e84c3d;
    &:hover {
      background: #e84c3d radial-gradient(circle, transparent 1%, #e84c3d 1%)
        center/15000%;
    }
    &:active {
      background-color: #eb675a;
      background-size: 100%;
      transition: background 0s;
    }
  `,
};
