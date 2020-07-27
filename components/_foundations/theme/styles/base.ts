import { css } from "styled-components";
import { colors, fonts } from "../../../_utils/variables";
import BCCTabsStyle from "./BCCTabsStyle";

const skeleton = `
.skeleton {
	min-height: 15px;
	border-radius: 4px;
  font-size: 0px;
  line-height: 1em;
	background-color: #e2e5e7;
	background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
	background-size: 40px 100%;
	background-repeat: no-repeat;
	background-position: left -40px top 0;
  animation: shine 1s ease infinite;
    &.w15 {
      max-width: 15%;
    } 
    & > span {
      display: none;
      width:50px;
    } 
  }
  li&.skeleton {    
    padding: 0 45px;
    margin: 0 calc(8px + .25rem);
    font-size: initial;
    &:first-child,
    &.first-child {
      &:before,
      &.before {
        content: "";
      }
      margin-left: 0;
    }
  
    &:last-child,
    &.last-child {
      margin-right: 0;
    }
    &:before,
    &.before {
      left: -1rem;
    }
  }

@keyframes shine {
	to {
		background-position: right -40px top 0;
	}
}
`;

const base = css`
  ${skeleton}
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  body {
    font-family: ${fonts};
    font-weight: 400;
    background-color: ${colors["bg-secondary"]};
    color: ${colors.black};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .noscroll {
    overflow: hidden;
  }

  .noselect {
    user-select: none;
  }

  .full-size {
    height: 100%;
    width: 100%;
  }

  .full-size-layout {
    height: 100%;
    min-height: 100vh;
    width: 100%;
  }

  .drag-handle {
    cursor: move;
    display: inline-block;

    &::before {
      content: "......";
      display: inline-block;
      width: 10px;
      word-break: break-word;
      white-space: normal;
      letter-spacing: 2px;
      line-height: 4.5px;
      text-align: center;
      height: 18px;
    }
  }

  /* https://github.com/reach/reach-ui/blob/master/packages/skip-nav/styles.css */
  [data-reach-skip-link] {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    position: absolute;
  }

  [data-reach-skip-link]:focus {
    padding: 1rem;
    position: fixed;
    top: 10px;
    left: 10px;
    background: white;
    z-index: 100;
    width: auto;
    height: auto;
    clip: auto;
  }

  ${BCCTabsStyle}
`;

export default base;
