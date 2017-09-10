/**
 * Created by sonbyeonghwa on 2017. 8. 31..
 */
import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import Thumbmail from './Thumbnail';
import StarIcon from 'react-icons/lib/md/star';
import EditIcon from 'react-icons/lib/md/edit';

const Wrapper = styled.div`
    padding: 1rem;
    position: relative;
    overflow: hidden;
    display: flex;
    
    background: ${oc.gray[0]};
    border: 1px solid ${oc.gray[2]};
    
    transition: all .25s;
    
    & + & {
        margin-top: 1rem;
    }
    
    .actions {
        position: absolute;
        top: 0;
        right: -3rem;
        width: 3rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column; /* 세로로 나열 */
        
        background: ${oc.gray[1]};
        border-left: 1px solid ${oc.gray[2]};
        opacity: 0;
        
        transition: all .4s;
    }
    
    &:hover {
        border: 1px solid ${oc.gray[4]};
        background: white;
        
        .actions {
            opacity: 1;
            right: 0rem;
        }
    }
`;

const Info = styled.div`
    margin-left: 1rem;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Name = styled.div`
    font-size: 1.25rem;
    color: ${oc.gray[9]};
    font-weight: 500;
`;

const Phone = styled.div`
    color: ${oc.gray[6]};
    margin-top: 0.25rem;
`;

const CircleButton = styled.div`
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.25rem;
    
    background: white;
    border: 1px solid ${oc.gray[4]};
    color: ${oc.gray[4]};
    
    border-radius: 1rem;
    font-size: 1.15rem;
    
    &:hover {
        border: 1px solid ${oc.gray[7]};
        color: ${oc.gray[9]};
    }
    
    ${ props => props.favorite && css`
        ${props => props.active && css`
            border: 1px solid ${oc.yellow[6]};
            color: ${oc.yellow[6]};
            
            &:hover{
                color: ${oc.yellow[5]};
                border: 1px solid ${oc.yellow[5]};
            }
        `}

        &:active {
            border: 1px solid ${oc.yellow[8]};
            color: ${oc.yellow[8]};
        }
    `}
`;

CircleButton.propTypes = {
    active: PropTypes.bool
};

export default class ContactItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.contact !== nextProps.contact;
    }

    render() {
        const {contact, onOpenModify, onToggleFavorite} = this.props;
        const {color, phone, favorite, name, id} = contact.toJS();
        return (
            <Wrapper>
                <Thumbmail color={color}/>
                <Info>
                    <Name>{name}</Name>
                    <Phone>{phone}</Phone>
                </Info>
                <div className="actions">
                    <CircleButton
                        favorite
                        active={favorite}
                        onClick={() => onToggleFavorite(id)}
                    >
                        <StarIcon/>
                    </CircleButton>
                    <CircleButton onClick={() => onOpenModify(id)}>
                        <EditIcon/>
                    </CircleButton>
                </div>
            </Wrapper>
        );
    };
}