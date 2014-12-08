var React = require('react');

var Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;

var App = require('./components/App.js');
var Home = require('./components/Home.js');
var PageTwo = require('./components/PageTwo.js');

var routes = (
  <Route name="app" handler={App}>
    <Route name="home" path="/" handler={Home}/>
    <Route name="secondPage" path="/second-page" handler={PageTwo}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});

