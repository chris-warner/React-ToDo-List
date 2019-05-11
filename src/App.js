import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with friend',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }
  
  //Toggle Complete
  markComplete = (id) => {
    console.log(id);
    this.setState({todos: this.state.todos.map(todo => {
if(todo.id === id) {
  todo.completed = !todo.completed
}
return todo;
    })})
  }

  //Delete  Todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
      <Header />
      <AddTodo />
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
    );
  }
}

export default App;
