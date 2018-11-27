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
// const Link = ({ active, children, onClick }) => (
//     <button
//         onClick={onClick}
//         disabled={active}
//         style={{
//             marginLeft: '4px',
//         }}
//     >
//         {children}
//     </button>
// )

// Link.propTypes = {
//     active: PropTypes.bool.isRequired,
//     children: PropTypes.node.isRequired,
//     onClick: PropTypes.func.isRequired
// }

const mapStateToProps = (state, ownProps) => //console.log(ownProps.filter, 'ownProps', state.visibilityFilter)
    ({
        active: ownProps.filter === state.visibilityFilter
    })

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
// export default Link