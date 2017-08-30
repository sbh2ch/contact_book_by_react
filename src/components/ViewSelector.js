/**
 * Created by sonbyeonghwa on 2017. 8. 30..
 */
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import StarIcon from 'react-icons/lib/md/star';
import PeopleIcon from 'react-icons/lib/md/people';

const Wrapper = styled.div`
    height: 4rem;
    background: white;
    width:100%;
    display: flex;
    
    position: relative;
`;

const StyledItem = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
    color: ${oc.gray[6]};
    
    font-size: 1.5rem;
    cursor: pointer;
    
    &:hover: {
        background: ${oc.gray[0]};
    }
`;

const Bar = styled.div`
    position: absolute;
    bottom: 0px;
    height: 3px;
    
    width: 50%;
    background: ${oc.cyan[5]};
`;

const Item = ({children}) => (
    <StyledItem>
        {children}
    </StyledItem>
);

const ViewSelector = () => (
    <Wrapper>
        <Item><StarIcon/></Item>
        <Item><PeopleIcon/></Item>
        <Bar/>
    </Wrapper>
);

export default ViewSelector;