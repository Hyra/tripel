var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello</h1>
        <Link
            to="state"
          >Linkje</Link>
        <RouteHandler/>
      </div>
    );
  }
});
var Home = React.createClass({
  render: function() {
    return (
      <div><h1>Home</h1></div>
    );
  }
});
var About = React.createClass({
  render: function() {
    return (
      <div><h1>About</h1></div>
    );
  }
});

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Home}/>
    <Route name="state" path="hoi" handler={About}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});

