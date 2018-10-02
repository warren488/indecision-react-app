'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppData = function AppData() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$title = _ref.title,
        title = _ref$title === undefined ? 'Default title' : _ref$title,
        _ref$subtitle = _ref.subtitle,
        subtitle = _ref$subtitle === undefined ? 'Default subtitle' : _ref$subtitle,
        _ref$options = _ref.options,
        options = _ref$options === undefined ? [] : _ref$options;

    _classCallCheck(this, AppData);

    this.title = title;
    this.subtitle = subtitle;
    this.options = options;
};

var currApp = void 0;

var appData1 = new AppData({
    title: 'Indecision App 2',
    subtitle: 'A subtitle'
});

var appData = new AppData({
    title: 'Indecision App',
    subtitle: 'A subtitle',
    options: []
});

currApp = appData1;

var user = {
    fname: 'Warren',
    lname: 'Scantlebury',
    age: 22,
    location: 'Bim'
};

user.fullName = user.fname + ' ' + user.lname;

var getLocation = function getLocation(user) {
    if (user.location !== undefined) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            user.location
        );
    }
    return 'uknown';
};

function switchApp() {
    currApp === appData ? currApp = appData1 : currApp = appData;
    render();
}

var onMakeDecision = function onMakeDecision() {
    var rand = Math.floor(Math.random() * currApp.options.length);
    console.log(rand);
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.fullName ? user.fullName : 'Anonymous'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user)
);
var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();

    var option = event.target.elements.option.value;

    if (option) {
        currApp.options.push(option);
        event.target.elements.option.value = '';
        render();
    }
};

function renderList(list) {
    var array = [];
    list.forEach(function (item, index) {
        array.push(React.createElement(
            'p',
            { key: index },
            index + 1,
            ': ',
            item
        ));
    });
    return React.createElement(
        'div',
        null,
        array
    );
}

function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            currApp.title
        ),
        currApp.subtitle && React.createElement(
            'p',
            null,
            currApp.subtitle
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        ),
        React.createElement(
            'button',
            { onClick: switchApp },
            'switch Apps'
        ),
        React.createElement(
            'button',
            { disabled: currApp.options.length === 0, onClick: onMakeDecision },
            'What should I do'
        ),
        React.createElement(
            'p',
            null,
            currApp.options && currApp.options.length > 0 ? 'here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            'optionCount: ',
            currApp.options.length
        ),
        renderList(currApp.options)
    );
    var appRoot = document.getElementById("app");

    ReactDOM.render(template, appRoot);
}
render();

var toggleVisibility = function toggleVisibility(visible) {
    return function () {
        renderVisibility(!visible);
    };
};

function renderVisibility(visible) {
    var appRoot = document.getElementById("app");
    var text = 'My simple visibilty text';
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility(visible) },
            visible ? 'hide' : 'show',
            ' details'
        ),
        visible ? React.createElement(
            'p',
            null,
            text
        ) : visible
    );

    ReactDOM.render(template, appRoot);
}

renderVisibility(false);
