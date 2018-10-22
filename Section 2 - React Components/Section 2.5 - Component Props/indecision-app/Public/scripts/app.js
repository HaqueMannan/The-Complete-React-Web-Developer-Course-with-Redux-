'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Parent Class:
var IndecisionApp = function (_React$Component) {
   _inherits(IndecisionApp, _React$Component);

   function IndecisionApp() {
      _classCallCheck(this, IndecisionApp);

      return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
   }

   _createClass(IndecisionApp, [{
      key: 'render',
      value: function render() {
         var title = 'Indecision';
         var subtitle = 'Put your life in the hands of a computer.';
         var options = ['Option One', 'Option Two', 'Option Three'];

         return React.createElement(
            'div',
            null,
            React.createElement(Header, { title: title, subtitle: subtitle }),
            React.createElement(Action, null),
            React.createElement(Options, { options: options }),
            React.createElement(AddOption, null)
         );
      }
   }]);

   return IndecisionApp;
}(React.Component);

;

// React Components:

var Header = function (_React$Component2) {
   _inherits(Header, _React$Component2);

   function Header() {
      _classCallCheck(this, Header);

      return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
   }

   _createClass(Header, [{
      key: 'render',
      value: function render() {
         console.log(this.props); // Returns the object key:value pairs for the props data passed in.
         return React.createElement(
            'div',
            null,
            React.createElement(
               'h1',
               null,
               this.props.title
            ),
            React.createElement(
               'h2',
               null,
               this.props.subtitle
            )
         );
      }
   }]);

   return Header;
}(React.Component);

;

var Action = function (_React$Component3) {
   _inherits(Action, _React$Component3);

   function Action() {
      _classCallCheck(this, Action);

      return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
   }

   _createClass(Action, [{
      key: 'render',
      value: function render() {
         return React.createElement(
            'div',
            null,
            React.createElement(
               'button',
               null,
               'What should I do?'
            )
         );
      }
   }]);

   return Action;
}(React.Component);

;

var Options = function (_React$Component4) {
   _inherits(Options, _React$Component4);

   function Options() {
      _classCallCheck(this, Options);

      return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
   }

   _createClass(Options, [{
      key: 'render',
      value: function render() {
         return React.createElement(
            'div',
            null,
            this.props.options.length,
            this.props.options.map(function (option) {
               return React.createElement(
                  'li',
                  { key: option },
                  option
               );
            }),
            this.props.options.map(function (option) {
               return React.createElement(Option, { key: option, optionText: option });
            })
         );
      }
   }]);

   return Options;
}(React.Component);

;

var Option = function (_React$Component5) {
   _inherits(Option, _React$Component5);

   function Option() {
      _classCallCheck(this, Option);

      return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
   }

   _createClass(Option, [{
      key: 'render',
      value: function render() {
         return React.createElement(
            'div',
            null,
            this.props.optionText
         );
      }
   }]);

   return Option;
}(React.Component);

;

var AddOption = function (_React$Component6) {
   _inherits(AddOption, _React$Component6);

   function AddOption() {
      _classCallCheck(this, AddOption);

      return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
   }

   _createClass(AddOption, [{
      key: 'render',
      value: function render() {
         return React.createElement(
            'div',
            null,
            'AddOption component here.'
         );
      }
   }]);

   return AddOption;
}(React.Component);

;

//ReactDOM Render Function:
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

//--------------------------------
// Challenge:
//--------------------------------
// Challenge 1:
// Setup options prop for Options component
// Render the length of the array

// Challenge 2:
// Render new <li> tag for each option. Set the key attribute, set the text.

// Challenge 3:
// Use the Option React Component to render each instance of the array and have Options reference the Option component.


//--------------------------------
// Answer:
//--------------------------------
// Challenge 1:
// In the IndecisionApp parent component render we need to add the array called options. This will allow us to have access to this.props.options.
//const options = ['Option One', 'Option Two', 'Option Three']
// We then need to return the options data within our Options Component element.
// <Options options={options} />
// In our Options React Component class we now have access to this.props.options and can call the .length operator to return the number of items within our array. We would add this to the return function.
// {this.props.options.length}

// Challenge 2:
// We would want to render in the Options React Component class using the map operator on this.props.options to loop through the array and create <li> elements with the text acting as both the key and text:
// {
//    this.props.options.map( (option) => <li key={option}>{option}</li>)
// }

// Challenge 3:
// Add to the render function the map operator to loop through the array to create instances of the Option component passing in the props data for the key and optionText.
// {
//    this.props.options.map( (option) => <Option key={option} optionText={option} />)
// }
// Key is a reserved work therefore we had to create another attribute called optionText in order for the Option Component to have access to this data.
// Update the Option React component to render the <li> elements passing in the data coming from the Options component.
