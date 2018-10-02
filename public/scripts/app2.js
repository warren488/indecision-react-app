'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullApp = function (_React$Component) {
    _inherits(FullApp, _React$Component);

    function FullApp(props) {
        _classCallCheck(this, FullApp);

        var _this = _possibleConstructorReturn(this, (FullApp.__proto__ || Object.getPrototypeOf(FullApp)).call(this, props));

        _this.appData = {
            title: 'Indecision App 2',
            subtitle: 'A subtitle',
            options: []
        };
        _this.state = {
            appData: _this.appData
        };
        return _this;
    }

    _createClass(FullApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { currApp: this.state.appData }),
                React.createElement(Options, { currApp: this.state.appData }),
                React.createElement(AddOption, { currApp: this.state.appData }),
                React.createElement(Action, { currApp: this.state.appData })
            );
        }
    }]);

    return FullApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'header',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Indecision'
                ),
                React.createElement(
                    'h2',
                    null,
                    'Do something already'
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this3 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this3.state = {
            options: _this3.props.currApp.options
        };
        return _this3;
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    this.state.options && this.state.options.length > 0 ? 'here are your options' : 'No options'
                ),
                React.createElement(
                    'p',
                    null,
                    'optionCount: ',
                    this.state.options.length
                ),
                this.renderList(this.state.options)
            );
        }
    }, {
        key: 'renderList',
        value: function renderList(list) {
            return list.map(function (item, index) {
                return React.createElement(
                    'p',
                    { key: index },
                    index + 1,
                    ': ',
                    item
                );
            });
        }
    }]);

    return Options;
}(React.Component);

var Action = function (_React$Component4) {
    _inherits(Action, _React$Component4);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'onMakeDecision',
        value: function onMakeDecision() {
            var rand = Math.floor(Math.random() * this.props.currApp.options.length);
            console.log(rand);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { disabled: this.props.currApp.options.length === 0, onClick: this.onMakeDecision },
                    'What should I do'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this5.onFormSubmit = _this5.onFormSubmit.bind(_this5);
        _this5.state = {
            options: _this5.props.currApp.options
        };
        return _this5;
    }

    //funny trick i have to do because this function will be run as an event handler 
    // so the context is messed up


    _createClass(AddOption, [{
        key: 'onFormSubmit',
        value: function onFormSubmit(event) {
            event.preventDefault();
            console.log(this.state);

            var option = event.target.elements.option.value;

            if (option) {
                this.setState(function (prev) {
                    return {
                        options: prev.options.concat([option])
                    };
                });
                event.target.elements.option.value = '';
                // __this.render()
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.options.map(function (val) {
                    return React.createElement(
                        'p',
                        null,
                        val
                    );
                }),
                React.createElement(
                    'form',
                    { onSubmit: this.onFormSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var template = React.createElement(FullApp, null);

ReactDOM.render(template, document.getElementById('app'));
