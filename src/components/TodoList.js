import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Todo from './Todo';
import { VisibilityFilters, toggleTodo } from '../actions';

class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        toggleTodo: PropTypes.func.isRequired
    }
    render() {
        const { todos, toggleTodo } = this.props;
        return (
            <ul>
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => toggleTodo(todo.id)}
                    />
                )}
            </ul>
        )
    }
}

// const TodoList = ({ todos, toggleTodo }) => (
//     <ul>
//         {todos.map(todo =>
//             <Todo
//                 key={todo.id}
//                 {...todo}
//                 onClick={() => toggleTodo(todo.id)}
//             />
//         )}
//     </ul>
// )


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)