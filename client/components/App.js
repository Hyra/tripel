'use strict';

var React = require('react'),
    Router = require('react-router'),
    {
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
