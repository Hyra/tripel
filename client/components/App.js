'use strict';

var React = require('react');
var Router = require('react-router');
var {
    Route,
    DefaultRoute,
    NotFoundRoute,
    RouteHandler,
    Link
} = Router;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="dashboard">Dashboard</Link>
        <Link to="projects">Projects</Link>
        <RouteHandler />
      </div>
    )
  }
});

module.exports = App;
