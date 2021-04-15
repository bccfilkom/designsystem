import { css } from "styled-components";
import { colors } from "../../_utils/variables";

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
    &:hover {
      background: #53a7e0;
    }
  `,
  text: css`
    color: ${colors.biru};
    border-color: ${colors.white};
    background-color: ${colors.putih};
    &:hover {
      background: #e4f4ff;
    }
  `,
  textDisabled: css`
    color: #888888;
  `,
  secondary: css`
    color: ${colors.biru};
    background: ${colors.putih};
    &:hover {
      color: ${colors.biru};
      background: #e4f4ff;
    }
  `,
  secondaryDisabled: css`
    color: #888888;
    border-color: #888888;
  `,
  success: css`
    background: #2DCC70;
    border-color: #2DCC70;
    &:hover{
      background: #4CD485;
    }
  `,
  error: css`
    background: #e84c3d;
    border-color: #e84c3d;
    &:hover{
      background: #EB675A;
    }
  `,
};
