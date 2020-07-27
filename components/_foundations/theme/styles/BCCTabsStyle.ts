import { css } from "styled-components";
import { colors } from "../../../_utils";

const BCCTabsStyle = css`
  //Content Style
  .bcc-tabs-content {
    display: flex;
    width: 100%;
  }
  .bcc-tabs-content-holder {
    flex: auto;
  }
  .bcc-tabs-content-animated {
    transition: margin 0.3s;
  }
  
  //Tabpane Style 
  .bcc-tabs-tabpane {
    width: 100%;
    flex: none;
  }
  .bcc-tabs {
    display: flex;
  }
  .bcc-tabs-top,
  .bcc-tabs-bottom {
    flex-direction: column;
  }
  .bcc-tabs-top .bcc-tabs-ink-bar,
  .bcc-tabs-bottom .bcc-tabs-ink-bar {
    height: 3px;
  }
  .bcc-tabs-top .bcc-tabs-ink-bar {
    bottom: 0;
  }
  .bcc-tabs-bottom .bcc-tabs-nav {
    order: 1;
  }
  .bcc-tabs-bottom .bcc-tabs-content {
    order: 0;
  }
  .bcc-tabs-bottom .bcc-tabs-ink-bar {
    top: 0;
  }
  .bcc-tabs-left .bcc-tabs-nav-wrap,
  .bcc-tabs-right .bcc-tabs-nav-wrap {
    flex-direction: column;
  }
  .bcc-tabs-left .bcc-tabs-ink-bar,
  .bcc-tabs-right .bcc-tabs-ink-bar {
    width: 3px;
  }
  .bcc-tabs-left .bcc-tabs-nav,
  .bcc-tabs-right .bcc-tabs-nav {
    flex-direction: column;
    min-width: 50px;
  }
  .bcc-tabs-left .bcc-tabs-nav-list,
  .bcc-tabs-right .bcc-tabs-nav-list {
    flex-direction: column;
  }
  .bcc-tabs-left .bcc-tabs-nav-operations,
  .bcc-tabs-right .bcc-tabs-nav-operations {
    flex-direction: column;
  }
  .bcc-tabs-left .bcc-tabs-ink-bar {
    right: 0;
  }
  .bcc-tabs-right .bcc-tabs-nav {
    order: 1;
  }
  .bcc-tabs-right .bcc-tabs-content {
    order: 0;
  }
  .bcc-tabs-right .bcc-tabs-ink-bar {
    left: 0;
  }
  .bcc-tabs-rtl {
    direction: rtl;
  }
  .bcc-tabs-dropdown-rtl {
    direction: rtl;
  }
  
  //tabs-container style
  .bcc-tabs {
    // border: 1px solid gray;
    font-size: 14px;
    overflow: hidden;
    // background: ${colors.biru}
  }
  .bcc-tabs-nav {
    display: flex;
    flex: none;
    position: relative;
  }
  .bcc-tabs-nav-measure,
  .bcc-tabs-nav-wrap {
    transform: translate(0);
    position: relative;
    display: inline-block;
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
  }
  .bcc-tabs-nav-measure-ping-left::before,
  .bcc-tabs-nav-wrap-ping-left::before,
  .bcc-tabs-nav-measure-ping-right::after,
  .bcc-tabs-nav-wrap-ping-right::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .bcc-tabs-nav-measure-ping-left::before,
  .bcc-tabs-nav-wrap-ping-left::before {
    left: 0;
    border-left: 1px solid red;
  }
  .bcc-tabs-nav-measure-ping-right::after,
  .bcc-tabs-nav-wrap-ping-right::after {
    right: 0;
    border-right: 1px solid red;
  }
  .bcc-tabs-nav-measure-ping-top::before,
  .bcc-tabs-nav-wrap-ping-top::before,
  .bcc-tabs-nav-measure-ping-bottom::after,
  .bcc-tabs-nav-wrap-ping-bottom::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
  }
  .bcc-tabs-nav-measure-ping-top::before,
  .bcc-tabs-nav-wrap-ping-top::before {
    top: 0;
    border-top: 1px solid red;
  }
  .bcc-tabs-nav-measure-ping-bottom::after,
  .bcc-tabs-nav-wrap-ping-bottom::after {
    bottom: 0;
    border-top: 1px solid red;
  }
  
  //bcc-tabs-nav-list-item style
  .bcc-tabs-nav-list {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
    position: relative;
    transition: transform 0.3s;
  }
  .bcc-tabs-nav-operations {
    display: flex;
    display: none;
  }
  .bcc-tabs-nav-operations-hidden {
    position: absolute;
    visibility: hidden;
    pointer-events: none;
  }
  .bcc-tabs-nav-more {
    border: 1px solid blue;
    background: rgba(255, 0, 0, 0.1);
  }
  .bcc-tabs-nav-add {
    border: 1px solid green;
    background: rgba(0, 255, 0, 0.1);
  }

  //bcc-tabs-item style
  .bcc-tabs-tab {
    border: 0;
    min-height: 48px;
    padding: 0 32px;
    margin: 12px 0 0 12px;
    font-size: 16px;
    text-transform: uppercase;
    background: rgba(255, 255, 255, 0);
    margin: 0;
    display: flex;
    outline: none;
    cursor: pointer;
    position: relative;
    font-weight: lighter;
    align-items: center;
    font-weight: 400;
    opacity: .5;
  }
  .bcc-tabs-tab:hover {
    opacity: .8;
  }
  .bcc-tabs-tab-btn,
  .bcc-tabs-tab-remove {
    border: 0;
    background: transparent;
  }
  .bcc-tabs-tab.bcc-tabs-tab-disabled{
    opacity: .2;
    cursor: not-allowed;
  }
  .bcc-tabs-tab-btn:focus {
    outline: 0px;
  }
  .bcc-tabs-tab-remove:hover {
    color: red;
  }
  .bcc-tabs-tab-active {
    // font-weight: bolder;
    opacity: 1;
  }
  .bcc-tabs-ink-bar {
    position: absolute;
    background: red;
    pointer-events: none;
  }
  .bcc-tabs-ink-bar-animated {
    transition: all 0.3s;
  }
  .bcc-tabs-extra-content {
    flex: none;
  }

  //Primary style
  .bcc-tabs-style-Primary {
    background: ${colors.biru};
    color: ${colors.putih}
  }
  .bcc-tabs-style-Primary .bcc-tabs-ink-bar {
    background: ${colors.putih};
  }

  //Ligth style
  .bcc-tabs-style-Ligth {
    background: ${colors.putih};
    color: ${colors.biru03}
  }
  .bcc-tabs-style-Ligth .bcc-tabs-ink-bar {
    background: ${colors.biru03};
  }

  //Dark style
  .bcc-tabs-style-Darkk {
    background: ${colors.primaryText};
    color: ${colors.orange001};
  }
  .bcc-tabs-style-Darkk .bcc-tabs-ink-bar {
    background: ${colors.orange001};
  }
  
  //icon tabs 
  .bcc-tabs-tab > .bcc-tabs-tab-btn > span.icon-with-text > svg{
    font-size: 16px;
  }
  .bcc-tabs-tab:not(.bcc-tabs-tab-active) > .bcc-tabs-tab-btn > span.icon-with-text > p {
    display:none
  }
  .bcc-tabs-tab.bcc-tabs-tab-active > .bcc-tabs-tab-btn > span.icon-with-text{
    width: 100%;
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
  }
  .bcc-tabs-tab.bcc-tabs-tab-active > .bcc-tabs-tab-btn > span.icon-with-text > svg {
    margin-bottom: 4px;
  }
`;

export default BCCTabsStyle;
