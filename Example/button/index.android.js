/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
} = React;
import Example from './Example'

var button = React.createClass({
  render: function() {
    return (
      <Example />
    );
  }
});


AppRegistry.registerComponent('button', () => button);
