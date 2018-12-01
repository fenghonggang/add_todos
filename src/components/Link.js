import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setVisibilityFilter } from '../actions';

class Link extends Component {
    static proptypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired
    }
    render() {
        const {
            onClick,
            active,
            children
        } = this.props;
        console.log(Math.floor(Math.random() * 100 + 1), '1~100随机数')
        console.log(Math.random(), '0~1随机数')
        // console.log(active, 'active')
        // console.log(children, 'children')
        return (
            <button
                onClick={onClick}
                disabled={active}
                style={{
                    marginLeft: '4px',
                }}
            >
                {children}
            </button>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({ //console.log(ownProps.filter, 'ownProps', state.visibilityFilter)
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)