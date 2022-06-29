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
          console.log(todos)
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
    render() {
      return (
        <table>
          <tbody>
            {this.state.todos.map((todo) => {
              return (
                <tr>
                  <td> {todo.description} </td>
                  <td> X </td>
                  <td> complete </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  }
  // RENDER COMPONENT ON THE SCREEN
  ReactDOM.render(<App />, document.querySelector(".container"));