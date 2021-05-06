import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { useOutsideClick } from '../../../shared/hooks';
import { colors } from '../../_utils/variables';
import { KeyboardArrowDown } from '@material-ui/icons';

export interface DropdownProps {
  value: string;
  type?: string;
  children: React.ReactNode;
}

export interface DropdownItemProps {
  setShow?: Function;
  children: React.ReactNode;
  onClick?: Function;
}

const DropdownSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #d8d8d8;
  background-color: ${colors.white};
  border-radius: 10px;
  border-color: ${(props) => (props.onOpen ? colors.biru03 : '#D8D8D8')};
  color: rgba(20, 48, 69, 0.5);
  font-size: 14px;
  padding: 16px;
  cursor: pointer;
  width: 100%;
  user-select: none;
`;

const DropdownMenu = styled.ul`
  padding: 0;
  height: ${(props) => (props.type === 'scrollable' ? '153px' : '100%')};
  overflow-y: ${(props) => (props.type === 'scrollable' ? 'scroll' : 'hidden')};
  border-radius: 6px;
  display: ${(props) => (props.show ? 'block' : 'none')};
  box-shadow: -1px 4px 8px -1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: -1px 4px 8px -1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -1px 4px 8px -1px rgba(0, 0, 0, 0.1);
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #fff;
  }

  ::-webkit-scrollbar {
    width: 4px;
    background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #d8d8d8;
  }

  li {
    border-bottom: 0.5px solid #d8d8d8;
    color: #143045;
    :first-child {
      border-radius: 4px 4px 0px 0px;
    }
    :last-child {
      border-bottom: 0px;
      border-radius: 0px 0px 6px 6px;
    }
  }
`;

const DropdownItemStyle = styled.li`
  list-style-type: none;
  padding: 16px 8px 16px 8px;
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: #b9e4fb;
  }
  :active {
    color: white;
    background-color: #3598db;
  }
`;

const Dropdown = ({ value, children, type }: DropdownProps) => {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setShow(false));
  const itemWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { setShow });
    }
  });
  return (
    <div ref={wrapperRef}>
      <DropdownSelect onClick={() => setShow(!show)} onOpen={show}>
        <div>{value || 'Placeholder Text'}</div>
        <div>
          <KeyboardArrowDown style={{ fontSize: '1.5em', color: '#143045' }} />
        </div>
      </DropdownSelect>
      <DropdownMenu type={type} show={show}>
        {itemWithProps}
      </DropdownMenu>
    </div>
  );
};

const DropdownItem = ({ children, onClick, setShow }: DropdownItemProps) => {
  return (
    <DropdownItemStyle
      onClick={() => {
        onClick();
        setShow(false);
      }}
    >
      {children}
    </DropdownItemStyle>
  );
};

Dropdown.defaultProps = {};

export { Dropdown as default, DropdownItem };
