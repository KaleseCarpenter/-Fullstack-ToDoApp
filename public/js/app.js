// CREATE APP COMPONENT
class App extends React.Component {
    state = {
      todos: [],
    };
    // Add your lifecycle method here
    componentDidMount() {
      fetch("/todos")
        .then((response) => {
          return response.json();
        })
        .then((todos) => {
          this.setState({ todos: todos.data.todos });
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
    // Create a delete todo method
    deleteToDo = (id, index) => {
        fetch(`todos/${id}`, {method: "DELETE"}).then(() =>{
            this.setState({
                todos:[
                    ...this.state.todos.slice(0, index), // TAKE EVRYTHING BEFORE THE USER CLICKED ON!
                    ...this.state.todos.slice(index + 1), // TAKE EVERYTHING AFTER WHAT THE USER CLICKED ON! slice always stops 1 before the number at the end of the array
                ],
            });
        });
    };
    render() {
      return (
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li>
                {todo.description}{" "}
                <button
                  onClick={() => {
                    return this.deleteToDo(todo._id, index); // you do ._id to refer to the id in the backend MongoDB database. It is just .id in the frontend
                  }}
                >
                  {" "}
                  X{" "}
                </button>
                <small> complete </small>
              </li>
            );
          })}
        </ul>
      );
    }
  }
  // RENDER COMPONENT ON THE SCREEN
  ReactDOM.render(<App />, document.querySelector(".container"));