/**
 * Created by sonbyeonghwa on 2017. 8. 30..
 */
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    height: 5rem;
    background: ${oc.gray[9]};
    border-bottom:${oc.gray[2]};
    
    color: ${oc.gray[2]};
    font-weight: 500;
    font-size: 1.5rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = () => (<Wrapper>Contact</Wrapper>);

export default Header;