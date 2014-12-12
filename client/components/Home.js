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

var Home = React.createClass({
  render: function() {
    return (
      <div>
        I am the main homepage
      </div>
    )
  }
});

module.exports = Home;
