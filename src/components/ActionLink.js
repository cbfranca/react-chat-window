import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ActionLink extends Component {

    render() {
        return (
            <div className="sc-action-header" 
            hidden={!this.props.visible}
            onClick={this.props.onClick}
            >
                {this.props.label}
            </div>
        );
    }
}

ActionLink.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    visible: PropTypes.bool,
};

ActionLink.defaultProps = {
    visible: false,
}

export default ActionLink;
