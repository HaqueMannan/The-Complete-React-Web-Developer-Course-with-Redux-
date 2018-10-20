'use strict';

var appRoot = document.getElementById('app');
var visibility = false;

var toggleVisibility = function toggleVisibility(e) {
   visibility = !visibility;
   renderApp();
};

var renderApp = function renderApp() {
   var visibilityApp = React.createElement(
      'div',
      null,
      React.createElement(
         'h1',
         null,
         'Visibility Toggle'
      ),
      React.createElement(
         'button',
         { onClick: toggleVisibility },
         visibility ? 'Hide Details' : 'Show Details'
      ),
      visibility && React.createElement(
         'p',
         null,
         'Hey. These are some details you can now see!'
      )
   );
   ReactDOM.render(visibilityApp, appRoot);
};

renderApp();
