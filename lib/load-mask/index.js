'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCleanProps = require('react-clean-props');

var _reactCleanProps2 = _interopRequireDefault(_reactCleanProps);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var DEFAULT_CLASS_NAME = 'react-load-mask';

var notEmpty = function notEmpty(s) {
  return !!s;
};

var LoadMask = (function (_React$Component) {
  _inherits(LoadMask, _React$Component);

  function LoadMask() {
    _classCallCheck(this, LoadMask);

    _get(Object.getPrototypeOf(LoadMask.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(LoadMask, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      var visibleClassName = props.visible ? DEFAULT_CLASS_NAME + '--visible' : '';
      var className = [props.className, DEFAULT_CLASS_NAME, visibleClassName, props.theme && DEFAULT_CLASS_NAME + '--theme-' + props.theme].filter(notEmpty).join(' ');

      return _react2['default'].createElement(
        'div',
        _extends({}, (0, _reactCleanProps2['default'])(props, LoadMask.propTypes), { className: className }),
        _react2['default'].createElement(_Loader2['default'], { size: props.size, theme: props.theme }),
        this.props.children
      );
    }
  }]);

  return LoadMask;
})(_react2['default'].Component);

exports['default'] = LoadMask;

LoadMask.defaultProps = { visible: false, theme: 'default' };

LoadMask.propTypes = { visible: _propTypes2['default'].bool, theme: _propTypes2['default'].string };
module.exports = exports['default'];