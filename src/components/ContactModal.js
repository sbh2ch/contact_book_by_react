/**
 * Created by sonbyeonghwa on 2017. 8. 31..
 */
import React, {Component} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Modal from './Modal';
import Input from './Input';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

const ThumbnailWrapper = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: center;
    
    background: white;
`;

const Form = styled.div`
    padding: 1rem;
    background: ${oc.gray[0]};
`;

const ButtonsWrapper = styled.div`
    display: flex;
`;


class ContactModal extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        mode: PropTypes.oneOf(['create', 'modify']),
        name: PropTypes.string,
        phone: PropTypes.string,
        color: PropTypes.string,
        onHide: PropTypes.func,
        onAction: PropTypes.func,
        onRemove: PropTypes.func
    };

    render() {
        const {
            visible,
            mode,
            name,
            phone,
            color,
            onHide
        } = this.props;

        return (
            <Modal visible={visible} onHide={onHide}>
                <ThumbnailWrapper>
                    <Thumbnail size="8rem" color={color}/>
                </ThumbnailWrapper>
                <Form>
                    <Input
                        name="name"
                        placeholder="이름"
                    />
                    <Input
                        name="phone"
                        placeholder="전화번호"
                    />
                </Form>
                <ButtonsWrapper>hello buttons</ButtonsWrapper>
            </Modal>
        );
    };
}

export default ContactModal;