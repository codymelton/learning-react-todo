var React = require("react");
var createReactClass = require("create-react-class");
var ReactDOM = require("react-dom");

require("./index.css");

const TodoList = props => (
  <div>
    <ul>
      {props.todos.map(item =>
        <p> {item.text} </p>
      )}
    </ul>
  </div>
);

class App extends React.Component {
  state = {
    todos: null,
    newTodoText: null
  };
  componentDidMount() {
    var todos = [
      { text: "clean room" },
      { text: "do laundry" },
      { text: "walk dog" },
      { text: "learn to spell...or not." }
    ];

    setTimeout(() => {
      this.setState({ todos }); //same as todos:todos
    }, 250);
    //set state of todos to use data
  }

  updateTodoText = e => {
    this.setState({ newTodoText: e.target.value })
  }

  submitTodo(e) {
    e.preventDefault();
    var todo = { text: this.state.newTodoText };
    this.setState({ todos: this.state.todos.concat([todo]), newTodoText: "" });
  }

  render() {
    return (
      <div className="jumbotron">
        <h3> What should I do now??? </h3>
        {this.state.todos ? <TodoList todos={this.state.todos} /> : null}
        <form onSubmit={this.submitTodo}>
          <input
            placeholder="new todo text"
            onChange={this.updateTodoText}
            value={this.state.newTodoText}
          />
          <button type="submit" className="btn btn-default"> Submit </button>
        </form>
        <button type="update" className="btn btn-warning"> Update List </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
