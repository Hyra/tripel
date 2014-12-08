var React = require('react');

var Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;

var App = require('./components/App.js');

var Dashboard = React.createClass({
  render: function() {
    return (
      <div><h2>Ik ben een dashboard</h2></div>
    );
  }
});

var Projects = React.createClass({
  render: function() {
    return (
      <div><h3>Project overzicht</h3></div>
    );
  }
});

var routes = (
  <Route name="app" handler={App}>
    <Route name="dashboard" path="/" handler={Dashboard}/>
    <Route name="projects" path="/projects" handler={Projects}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});

