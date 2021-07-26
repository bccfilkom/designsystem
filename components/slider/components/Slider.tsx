import * as React from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { themeGet } from "@styled-system/theme-get";
import PropTypes from "prop-types";
import { colors } from "../../_utils";
import Warning from "@material-ui/icons/Warning";
// import './Slider.css'


const sliderThumbStyles = (props) => (`
    width: 20px;
    height: 20px;
    background: ${props.color};
    cursor: pointer;
    border-radius: 50%;
    -webkit-transition: .2s;
    -webkit-appearance: none;
    transition: all 0.15s ease-in-out;

    ${props => !props.disabled ?
        `&:hover {
            background: #3598DB;
            transform: scale(1.2);
            box-shadow: 0 0 0 5px rgba(159, 212, 248, 0.2);
        }
        &:active {
            box-shadow: 0 0 0 5px rgba(159, 212, 248, 0.4);
        }`
        :
        ""
    }
`);

const Styles = styled.div`
// display: flex;
align-items: center;
color: #888;
margin-top: 2rem;
margin-bottom: 2rem;
.value {
    flex: 1;
    font-size: 2rem;
}
.slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    // background: #9FD4F8;
    outline: none;
    // background: linear-gradient(90deg, #3598DB 30%, #9FD4F8 30%);
    background: linear-gradient(90deg, ${props => props.disabled ? "#D8D8D8" : "#3598DB"} ${props => props.value/props.max * 100}%, ${props => props.disabled ? "#E8E8E8" : "#9FD4F8"} ${props => props.value/props.max * 100}%);
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
        ${props => sliderThumbStyles(props)}
    }

    &:hover {
        box-shadow: 0 0 0 20px rgba($color: #9FD4F8, $alpha: 0.4);; // if disable, dont use this
    }
}
`;


const Slider = (props) => {
    const [value, setValue] = React.useState(props.value ? props.value : 0)
    let handleOnChange = (e) => setValue(e.target.value)

    if (!props.disabled) {
        return (
            <>
                <Styles value={value} color={props.disabled ? "#D8D8D8" : "#0074D9"} min={props.min ? props.min : 0} max={props.max ? props.max : 255} >
                    <input type="range" min={props.min ? props.min : 0} max={props.max ? props.max : 255} value={value} className="slider" onChange={handleOnChange} />
                </Styles>            
            </>
        );
    }
    else {
        return (
            <>
                <Styles value={value} color={props.disabled ? "#D8D8D8" : "#0074D9"} min={props.min ? props.min : 0} max={props.max ? props.max : 255} disabled >
                    <input type="range" min={props.min ? props.min : 0} max={props.max ? props.max : 255} value={value} className="slider" onChange={handleOnChange} disabled />
                </Styles>            
            </>
        );
    }
    
};

export default Slider