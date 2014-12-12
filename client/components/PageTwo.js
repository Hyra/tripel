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
