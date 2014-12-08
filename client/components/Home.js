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
