import React, {Component} from 'react';
import FloatingButton from '../components/FloatingButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../modules/modal';
import * as baseActions from '../modules/base';
import oc from 'open-color';

function generateRandomColor() {
    const colors = [
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange'
    ];

    const random = Math.floor(Math.random() * 13);

    return oc[colors[random]][6];
}

class FloatingButtonContainer extends Component {
    handleClick = () => {
        const {ModalActions, BaseActions} = this.props;
        BaseActions.setView('list');
        ModalActions.show({
            mode: 'create',
            contact: {
                name: '',
                phone: '',
                color: generateRandomColor()
            }
        });
    };

    render() {
        return (
            <FloatingButton onClick={this.handleClick}/>
        );
    }
}

export default connect(null, (dispatch) => ({
    ModalActions: bindActionCreators(modalActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
}))(FloatingButtonContainer);