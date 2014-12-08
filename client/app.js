var React = require('react');
var Router = require('react-router');

var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>My App</h1>

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
  <Route name="app" handler={App}>
    <Route name="dashboard" path="/" handler={Dashboard}/>
    <Route name="projects" path="/projects" handler={Projects}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});

