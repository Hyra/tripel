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
        <Link to="home">Home</Link>
        <Link to="secondPage">Secondary Page</Link>
        <RouteHandler />
      </div>
    )
  }
});

module.exports = App;
