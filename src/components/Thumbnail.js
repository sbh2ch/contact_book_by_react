/**
 * Created by sonbyeonghwa on 2017. 8. 31..
 */
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Person from 'react-icons/lib/md/person';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: calc(${props => props.size} * 0.5);
    font-size: calc(${props => props.size} * 0.75);
    
    background: ${props => props.color};
    color: white;
`;

Wrapper.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
};

const Thumbnail = ({size, color}) => (
    <Wrapper size={size} color={color}>
        <Person/>
    </Wrapper>
);

Thumbnail.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
};

Thumbnail.defaultProps = {
    size: '4rem',
    color: '#000'
};

export default Thumbnail;