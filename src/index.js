var React = require("react");
var createReactClass = require("create-react-class");
var ReactDOM = require("react-dom");

require("./index.css");

function TodosList(props) {
  return (
    <div>
      <ul>
        {props.todos.map(function(item) {
          return <li>{item.text}</li>;
        })}
      </ul>
    </div>
  );
}

var App = createReactClass({
  getInitialState: function() {
    return {
      todos: null,
      newTodoText: null
    };
  },
  componentDidMount: function() {
    var data = [
      { text: "clean room" },
      { text: "do laundry" },
      { text: "walk dog" },
      { text: "learn to spell...or not." }
    ];
    var self = this;
    setTimeout(function() {
      self.setState({ todos: data });
    }, 250);
    //set state of todos to use data
  },

  updateTodoText: function(event) {
    this.setState({ newTodoText: event.target.value });
  },

  submitTodo: function(event) {
    event.preventDefault();
    var todo = { text: this.state.newTodoText };
    this.setState({ todos: this.state.todos.concat([todo]), newTodoText: "" });
  },

  render: function() {
    return (
      <div className="jumbotron">
        <h3> What should I do now??? </h3>
        {this.state.todos ? <TodosList todos={this.state.todos} /> : null}
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
});

ReactDOM.render(<App />, document.getElementById("root"));
