import React from 'react';
import TodoItem from './TodoItem';
class Todos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.todos);
        return this.props.todos.map((todo)=>(
           <TodoItem todo={todo} />
        ));
    }
}

export default Todos;
