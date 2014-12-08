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

var PageTwo = React.createClass({
  render: function() {
    return (
      <div>
        Secondary Page
      </div>
    )
  }
});

module.exports = PageTwo;
