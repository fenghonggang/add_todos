import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Todo extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }
    render() {
        const {
            onClick,
            completed,
            text
        } = this.props;
        console.log(completed, 'completed')
        console.log(text, 'text')
        return (
            <li
                onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                {text}
            </li>
        )
    }
}
// const Todo = ({ onClick, completed, text }) => (
//     <li
//         onClick={onClick}
//         style={{
//             textDecoration: completed ? 'line-through' : 'none'
//         }}
//     >
//         {text}
//     </li>
// )

// Todo.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
// }

export default Todo