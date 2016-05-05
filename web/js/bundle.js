(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StudentForm = require('./StudentForm');

var _StudentForm2 = _interopRequireDefault(_StudentForm);

var _StudentList = require('./StudentList');

var _StudentList2 = _interopRequireDefault(_StudentList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StudentApp = _react2.default.createClass({
    displayName: 'StudentApp',
    getInitialState: function getInitialState() {
        return {
            students: [{ name: 'tapos', email: 'tapos.aa@gmail.com' }, { name: 'sanjib', email: 'loton1984@gmail.com' }]
        };
    },
    addInList: function addInList(aStudent) {
        this.setState({
            students: this.state.students.concat(aStudent)
        });
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
                'h1',
                { className: 'text-center well' },
                'Student Entry directory'
            ),
            _react2.default.createElement(
                'div',
                { className: 'col-md-6' },
                _react2.default.createElement(_StudentForm2.default, { addStudent: this.addInList })
            ),
            _react2.default.createElement(
                'div',
                { className: 'col-md-6' },
                _react2.default.createElement(_StudentList2.default, { items: this.state.students })
            )
        );
    }
});

exports.default = StudentApp;

},{"./StudentForm":2,"./StudentList":3,"react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StudentForm = _react2.default.createClass({
    displayName: 'StudentForm',
    getInitialState: function getInitialState() {
        return {
            name: '',
            email: ''
        };
    },
    ChangeName: function ChangeName(e) {
        this.setState({
            name: e.target.value
        });
    },
    ChangeEmail: function ChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    },
    submitFormData: function submitFormData(e) {
        e.preventDefault();
        this.props.addStudent({ name: this.state.name, email: this.state.email });
        this.setState({
            email: '',
            name: ''
        });
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'form',
                { className: 'form-horizontal', onSubmit: this.submitFormData },
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'label',
                        { 'for': 'name', className: 'col-sm-2 control-label' },
                        'Name'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-10' },
                        _react2.default.createElement('input', { type: 'text', onChange: this.ChangeName, value: this.state.name, className: 'form-control', placeholder: 'Enter Name' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'label',
                        { 'for': 'email', className: 'col-sm-2 control-label' },
                        'Email'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-10' },
                        _react2.default.createElement('input', { type: 'text', onChange: this.ChangeEmail, value: this.state.email, className: 'form-control', placeholder: 'Enter Email' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-offset-2 col-sm-10' },
                        _react2.default.createElement(
                            'button',
                            { type: 'submit', className: 'btn btn-primary' },
                            'Add Student'
                        )
                    )
                )
            )
        );
    }
});

exports.default = StudentForm;

},{"react":"react"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StudentList = _react2.default.createClass({
    displayName: "StudentList",
    render: function render() {
        var genereateList = function genereateList(astudent, index) {
            return _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    null,
                    index
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    astudent.name
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    astudent.email
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(
                        "a",
                        { href: "" },
                        " Delete"
                    )
                )
            );
        };
        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                "table",
                { className: "table table-bordered" },
                _react2.default.createElement(
                    "thead",
                    null,
                    _react2.default.createElement(
                        "tr",
                        null,
                        _react2.default.createElement(
                            "th",
                            null,
                            "#"
                        ),
                        _react2.default.createElement(
                            "th",
                            null,
                            "Name"
                        ),
                        _react2.default.createElement(
                            "th",
                            null,
                            "Email"
                        ),
                        _react2.default.createElement(
                            "th",
                            null,
                            "Delete"
                        )
                    )
                ),
                _react2.default.createElement(
                    "tbody",
                    null,
                    this.props.items.map(genereateList)
                )
            )
        );
    }
});

exports.default = StudentList;

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _StudentForm = require('./StudentForm');

var _StudentForm2 = _interopRequireDefault(_StudentForm);

var _StudentApp = require('./StudentApp');

var _StudentApp2 = _interopRequireDefault(_StudentApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_StudentApp2.default, null), document.querySelector('.container'));

},{"./StudentApp":1,"./StudentForm":2,"react":"react","react-dom":"react-dom"}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvU3R1ZGVudEFwcC5qcyIsImFwcC9TdHVkZW50Rm9ybS5qcyIsImFwcC9TdHVkZW50TGlzdC5qcyIsImFwcC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sYUFBYSxnQkFBTSxXQUFOLENBQWtCO0FBQUE7QUFDakMsbUJBRGlDLDZCQUNmO0FBQ2hCLGVBQU87QUFDTCxzQkFBUyxDQUNMLEVBQUMsTUFBSyxPQUFOLEVBQWMsT0FBTSxvQkFBcEIsRUFESyxFQUVMLEVBQUMsTUFBSyxRQUFOLEVBQWUsT0FBTSxxQkFBckIsRUFGSztBQURKLFNBQVA7QUFNRCxLQVJnQztBQVNqQyxhQVRpQyxxQkFTdkIsUUFUdUIsRUFTZDtBQUNmLGFBQUssUUFBTCxDQUFjO0FBQ1Ysc0JBQVMsS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixNQUFwQixDQUEyQixRQUEzQjtBQURDLFNBQWQ7QUFHSCxLQWJnQztBQWVuQyxVQWZtQyxvQkFlMUI7QUFDUCxlQUNJO0FBQUE7WUFBQSxFQUFLLFdBQVUsS0FBZjtZQUNJO0FBQUE7Z0JBQUEsRUFBSSxXQUFVLGtCQUFkO2dCQUFBO0FBQUEsYUFESjtZQUVJO0FBQUE7Z0JBQUEsRUFBSyxXQUFVLFVBQWY7Z0JBQ0csdURBQWEsWUFBWSxLQUFLLFNBQTlCO0FBREgsYUFGSjtZQUtJO0FBQUE7Z0JBQUEsRUFBSyxXQUFVLFVBQWY7Z0JBQ0ksdURBQWEsT0FBTyxLQUFLLEtBQUwsQ0FBVyxRQUEvQjtBQURKO0FBTEosU0FESjtBQVdEO0FBM0JrQyxDQUFsQixDQUFuQjs7a0JBOEJlLFU7Ozs7Ozs7OztBQ2xDZjs7Ozs7O0FBRUEsSUFBTSxjQUFjLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUNsQyxtQkFEa0MsNkJBQ2hCO0FBQ2hCLGVBQU87QUFDTCxrQkFBSyxFQURB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NEJBQUE7NEJBQUE7QUFBQTtBQUpKO0FBREEsaUJBREo7Z0JBU0k7QUFBQTtvQkFBQTtvQkFDQyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEdBQWpCLENBQXFCLGFBQXJCO0FBREQ7QUFUSjtBQURKLFNBREY7QUFpQkQ7QUE1Qm1DLENBQWxCLENBQXBCOztrQkErQmUsVzs7Ozs7QUNqQ2Y7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLG1CQUFTLE1BQVQsQ0FBZ0IseURBQWhCLEVBQStCLFNBQVMsYUFBVCxDQUF1QixZQUF2QixDQUEvQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0dWRlbnRGb3JtIGZyb20gJy4vU3R1ZGVudEZvcm0nO1xuaW1wb3J0IFN0dWRlbnRMaXN0IGZyb20gJy4vU3R1ZGVudExpc3QnO1xuXG5jb25zdCBTdHVkZW50QXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0dWRlbnRzOltcbiAgICAgICAgICAgIHtuYW1lOid0YXBvcycsZW1haWw6J3RhcG9zLmFhQGdtYWlsLmNvbSd9LFxuICAgICAgICAgICAge25hbWU6J3NhbmppYicsZW1haWw6J2xvdG9uMTk4NEBnbWFpbC5jb20nfVxuICAgICAgICBdXG4gICAgICB9O1xuICAgIH0sXG4gICAgYWRkSW5MaXN0KGFTdHVkZW50KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdHVkZW50czp0aGlzLnN0YXRlLnN0dWRlbnRzLmNvbmNhdChhU3R1ZGVudClcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3ZWxsXCI+U3R1ZGVudCBFbnRyeSBkaXJlY3Rvcnk8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgPFN0dWRlbnRGb3JtIGFkZFN0dWRlbnQ9e3RoaXMuYWRkSW5MaXN0fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8U3R1ZGVudExpc3QgaXRlbXM9e3RoaXMuc3RhdGUuc3R1ZGVudHN9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN0dWRlbnRGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6JycsXG4gICAgICAgICAgZW1haWw6JydcbiAgICAgIH07XG4gICAgfSxcbiAgICBDaGFuZ2VOYW1lKGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBuYW1lOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgfSxcbiAgICBDaGFuZ2VFbWFpbChlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbWFpbDplLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHN1Ym1pdEZvcm1EYXRhKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMuYWRkU3R1ZGVudCh7bmFtZTp0aGlzLnN0YXRlLm5hbWUsZW1haWw6dGhpcy5zdGF0ZS5lbWFpbH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVtYWlsOicnLFxuICAgICAgICAgICAgbmFtZTonJ1xuICAgICAgICB9KTtcbiAgICB9LFxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm1EYXRhfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuQ2hhbmdlTmFtZX0gdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLkNoYW5nZUVtYWlsfSB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkFkZCBTdHVkZW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnRGb3JtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3R1ZGVudExpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgcmVuZGVyKCkge1xuICAgICB2YXIgIGdlbmVyZWF0ZUxpc3QgPSBmdW5jdGlvbihhc3R1ZGVudCxpbmRleCl7XG4gICAgICAgICAgcmV0dXJuIDx0cj5cbiAgICAgICAgICAgICAgPHRkPntpbmRleH08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e2FzdHVkZW50Lm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPnthc3R1ZGVudC5lbWFpbH08L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIlwiPiBEZWxldGU8L2E+PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPkRlbGV0ZTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbXMubWFwKGdlbmVyZWF0ZUxpc3QpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudExpc3Q7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBTdHVkZW50Rm9ybSBmcm9tICcuL1N0dWRlbnRGb3JtJ1xuaW1wb3J0IFN0dWRlbnRBcHAgZnJvbSAnLi9TdHVkZW50QXBwJztcblJlYWN0RE9NLnJlbmRlcig8U3R1ZGVudEFwcC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykgKTsiXX0=
