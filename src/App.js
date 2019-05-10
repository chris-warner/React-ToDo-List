import React from 'react';
import './App.css';
import Todos from './components/Todos';

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
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }
  markComplete = (id) => {
    console.log(id);
  }
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
      <Todos todos={this.state.todos} markComplete={this.markComplete} />
        </div>
    );
  }
}

export default App;
