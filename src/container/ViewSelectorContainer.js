import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from '../modules/base';
import ViewSelector from '../components/ViewSelector';

class ViewSelectorContainer extends Component {
    handleSelector = (view) => {
        const {BaseActions} = this.props;
        BaseActions.setView(view);
    };

    render() {
        const {view} = this.props;
        const {handleSelector} = this;
        return (
            <ViewSelector selected={view} onSelect={handleSelector}/>
        );
    };
}

export default connect((state) => ({
    view: state.base.get('view')
}), (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
}))(ViewSelectorContainer);