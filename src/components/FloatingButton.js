/**
 * Created by sonbyeonghwa on 2017. 8. 30..
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import oc from 'open-color';
import AddIcon from 'react-icons/lib/md/add';

const Wrapper = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    
    background: white;
    border: 3px solid ${oc.cyan[6]};
    color: ${oc.cyan[6]};
    
    border-radius: 2rem;
    font-size: 2rem;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: all .15s;
    
    &:hover {
        transform: translateY(-0.5rem);
        color: white;
        background: ${oc.cyan[6]};
    }
    
    &:active {
        background: ${oc.cyan[8]};
    }
`;

const FloatingButtion = ({onClick}) => (
    <Wrapper onClick={onClick}>
        <AddIcon/>
    </Wrapper>
);

FloatingButtion.propTypes = {
    onClick: PropTypes.func
};

export default FloatingButtion;