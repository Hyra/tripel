var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div><h1>Hello</h1></div>
    );
  }
});

React.renderComponent(<App />, document.getElementById('app'));

